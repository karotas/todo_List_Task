import React, { useContext } from 'react'
import { Contexts } from '../store/Context';
import axios from "axios"
let mainUrl="http://localhost:4000/todos/"
function useHelper() {
  let { todos,
    setTodos,


    isErrSnk,
    setIsErrSnk,
    snkOpen,
    setSnkOpen,
    snkMsg,
    setSnkMsg,
    openAlert,
    setOpenAlert,
    openModal,
    setOpenModal,
    delIndex,
    editIndex,
    completedIndex,
    setCompletedIndex,
    setEditIndex,
    setDelIndex,
    setCopyTodos,
  } = useContext(Contexts)
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
  let add = async(data) => {
    let demoTodos=[...todos, {
      todo: data.todo,
      completed: false,
      date: datetime
    }]

try {
  let res=await callApi("post","addTodos",{      todo: data.todo,
    completed: false,
    date: datetime})

  if(res.data.error){
    throw Error(res.data.message)
  }
  setTodos(demoTodos)
  setIsErrSnk(false)
  setSnkMsg("successfully has been added.")
  setSnkOpen(true)
} catch (error) {
  setIsErrSnk(true)
  setSnkMsg(error.message)
  setSnkOpen(true)
}



  }
  let edit =async (data) => {
    let demoTodos = [...todos];

    if (editIndex === null) {
      return
    }
    demoTodos[editIndex] = {
      todo: data.editedTodo,
      completed: false,
      date: datetime
    }
try {
  let res=await callApi("post","editTodos",[{
    todo: data.editedTodo,
    completed: false,
    date: datetime
  },todos[editIndex]])

  if(res.data.error){
    throw Error(res.data.message)
  }
  setTodos(demoTodos)
  setCopyTodos(demoTodos)
  setOpenAlert(false)
  setSnkMsg("successfully edited.")

  setIsErrSnk(false)
  setSnkOpen(true)
  setOpenModal(false)
  setDelIndex(null)
} catch (error) {
  setSnkMsg(error.message)
  setSnkOpen(true)
  setIsErrSnk(true)
}
 

  };

  let deleteTodo =async() => {
    let demoTodos = [...todos];

    if (delIndex === null) {
      return
    }
    try {
      let res=await callApi("delete","delTodos",demoTodos[delIndex])

      if(res.data.error){
        throw Error(res.data.message)
      }
      demoTodos.splice(delIndex, 1)
      setTodos(demoTodos)
      setCopyTodos(demoTodos)
      setOpenAlert(false)
      setSnkMsg("successfully deleted.")
      setIsErrSnk(false)
      setSnkOpen(true)
      setDelIndex(null)
    } catch (error) {
      setSnkMsg(error.message)
      setSnkOpen(true)
    }



  }

  let completedTodos = async() => {
    let demoTodos = [...todos];



    if (completedIndex === null) {
      return
    }
    demoTodos[completedIndex] = {
      ...demoTodos[completedIndex],
      completed: !demoTodos.completed,
      date:datetime
    }
    try {
      let res=await callApi("post","editTodos",[ {
        ...demoTodos[completedIndex],
        completed: !demoTodos.completed,
        date:datetime
  
      },todos[completedIndex]])

      if(res.data.error){
        throw Error(res.data.message)
      }
    } catch (error) {
      setSnkMsg(error.message)
      setSnkOpen(true)
      setIsErrSnk(true)
    }

    setTodos(demoTodos)
    setCopyTodos(demoTodos)
    setOpenAlert(false)
    setSnkMsg("successfully edited.")

    setIsErrSnk(false)
    setSnkOpen(true)
    setOpenModal(false)
    setCompletedIndex(null)

  }
  let callApi = async (method, url, data) => {
    let response = await axios({
      method: method,
      url: mainUrl+url,
      data:data
    })

    return response
  }
  return {
    add, edit, deleteTodo, completedTodos,callApi
  }
}


export default useHelper