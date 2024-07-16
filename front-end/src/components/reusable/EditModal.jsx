import React, { useContext } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import TextField from '@mui/material/TextField'
import { Paper, Stack, Button, Typography, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Contexts } from '../../store/Context';
import { useForm } from "react-hook-form"
import useHelper from '../../helpers/useHelper';
let sx={
    paper:{
        height: "50vh",
        position
        :"relative"
    },
    IconButton:{
        position:"absolute",
        top:3,
        right:3
    }
}
function EditModal() {
    let { openModal,
        setOpenModal,}=useContext(Contexts)
        let closeModal=()=>{
            setOpenModal(false)
        }
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
          let {edit}=useHelper()
          const onSubmit = (data) => edit(data)
    return (
        <SwipeableDrawer
            open={openModal}
            anchor='bottom'
        >
            <Paper
                sx={sx.paper}
            >
        
                    <Tooltip
                        placement='right'
                        title="close"
                    >
                        <IconButton
                        sx={sx.IconButton}

                        onClick={closeModal}
                        >
                            <CloseIcon
                                color='secondary'
                                fontSize='large'
                            />

                        </IconButton>
                    </Tooltip>
        


                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"100%"}

                >


                    <Stack
                        width={"70%"}

                        gap={2}

                        alignItems={"center"}
                        justifyContent={"center"}
                        component={"form"}
                        onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            variant='outlined'
                    
                            focused
                            sx={{
                                width: "70%"
                            }}
                            color={errors.editedTodo && errors.editedTodo.type === "required"?"error":"secondary" }
                            {...register("editedTodo", { required: true })}


                        />
                        <Button
                        type='submit'
                            sx={{
                                width: "70%"
                            }}
                            variant="outlined"
                            color="secondary"
                            size='large'
                            endIcon={<EditIcon
                                color='secondary'
                                fontSize='medium'
                            />}
                        >
                            <Typography
                                variant="body1"
                                color="secondary">edit</Typography>
                        </Button>
                    </Stack>

                </Stack>    </Paper>

        </SwipeableDrawer>
    )
}

export default EditModal