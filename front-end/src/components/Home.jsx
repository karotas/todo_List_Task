import { Button, Stack, TextField, Typography, ButtonGroup } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Tables from "./reusable/Tables"
import { useForm } from "react-hook-form"
import useHelper from '../helpers/useHelper';
import { Contexts } from '../store/Context';
let sx={
TextField:{
    width: {
        xs: "70%",
        md: "50%"

    },
    "& input": {
        height: "70%"
    }



},
Button:{

    width: {
        xs: "70%",
        md: 150

    },
    borderRadius: 5
}
}
function Home() {
    let { add, callApi } = useHelper()
    let [filterIndex, setFilterIndex] = useState(0)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    let {  setCopyTodos, setTodos, setDisAction,setSnkMsg,setSnkOpen,setIsErrSnk } = useContext(Contexts)
    const onSubmit = (data) => add(data)
    let FilterTodos = async(i) => {
        setFilterIndex(i)
        setDisAction(false)
   try {
    let res=await  callApi("get", "allTodos")
   
    if (i === 0) {
        setTodos(res.data.data)

        return
    }
    if (i === 1) {
        const completedTodos = res.data.data.filter(copyTodos => !copyTodos.completed);
        setTodos(completedTodos)
        setDisAction(true)

        return
    }
    if (i === 2) {
        setDisAction(true)
        const unCompletedTodos = res.data.data.filter(copyTodos => copyTodos.completed);
        setTodos(unCompletedTodos)

        return
    }
   } catch (error) {
    setSnkOpen(true)
    setSnkMsg("try again.")
    setIsErrSnk(true)
    
   }

    }
    useEffect(() => {
        callApi("get", "allTodos",).then((res) => {
            setTodos(res.data.data)
            setCopyTodos(res.data.data)
        }).catch((err)=>{
            setSnkOpen(true)
            setSnkMsg("try again.")
            setIsErrSnk(true)

        })


    }, [])
    return (
        <Stack
            height={"auto"}
            pb={2}

        >


            <Stack
                direction={{
                    xs: "column",
                    md: "row"
                }}
                spacing={2}
                alignItems={"center"}
                mt={8}
                justifyContent={"center"}

                height={"auto"}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}>




                <TextField
                    focused
                    variant='outlined'
                    type='search'

                    color={errors.todo && errors.todo.type === "required" ? "error" : "secondary"}
                    {...register("todo", { required: true })}

                    sx={sx.TextField
                }

                />
                <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    type='submit'
                    endIcon={<AddIcon
                        color='primary'
                        fontSize='large'
                    />}
                    sx={sx.Button}

                >
                    <Typography
                        letterSpacing={1}
                        fontSize={18}
                    >
                        add
                    </Typography>
                </Button>
            </Stack>
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                mt={4}
                width="100%"
            >
                <Typography variant="body1" width="70%" align='center' mb={2} fontSize={21} color="secondary">all todos</Typography>

                <Stack
                    alignItems={{
                        md:"flex-end",
                        xs:"center"
                    }}
                    width={
                        {
                            md:"70%",
                            xs:"100%"
                        }
                    }
                    mb={2}
                >
                    <ButtonGroup  variant="outlined" color="secondary" aria-label="filterbtn">
                        <Button
                 
                        onClick={() => FilterTodos(0)} variant={filterIndex == 0 ? "contained" : "outlined"}>
                            all</Button>
                        <Button onClick={() => FilterTodos(1)} variant={filterIndex == 1 ? "contained" : "outlined"}>
                            active</Button>
                        <Button onClick={() => FilterTodos(2)} variant={filterIndex == 2 ? "contained" : "outlined"}>
                            completed</Button>

                    </ButtonGroup>
                </Stack>
                <Tables />
            </Stack>
        </Stack>
    )
}

export default Home