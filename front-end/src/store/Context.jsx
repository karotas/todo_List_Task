import React, { createContext, useState } from 'react'
export let Contexts = createContext()
function Context({ children }) {
    let [todos,setTodos]=useState([    
])
    let [copyTodos,setCopyTodos]=useState([
    
    ])
    let [isErrSnk,setIsErrSnk]=useState(false);
    let [snkOpen,setSnkOpen]=useState(false);
    let [snkMsg,setSnkMsg]=useState("hi");
    let [openModal,setOpenModal]=useState(false);
    let [openAlert,setOpenAlert]=useState(false);
    let [delIndex,setDelIndex]=useState(null);
    let [editIndex,setEditIndex]=useState(null);
    let [completedIndex,setCompletedIndex]=useState(null);
    let [isComAl,setIsComAl]=useState(false);
    let [disAction,setDisAction]=useState(false);
    let values={
        todos,
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
        setDelIndex,
        setEditIndex,
        editIndex,
        completedIndex,
        setCompletedIndex,
        isComAl,setIsComAl,
        copyTodos,setCopyTodos,
        disAction,setDisAction

    }

    return (
        <Contexts.Provider
        value={values}
        >
            {
                children
            }
        
        </Contexts.Provider>
    )
}

export default Context