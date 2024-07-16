import { Button, Modal, Paper, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Contexts } from '../../store/Context'
import useHelper from '../../helpers/useHelper'
let sx = {
    Paper: {
        width: {
            md: 300,
            xs: "80%"
        },
        p: 1
    }
}
function PopUp() {
    let { openAlert, setOpenAlert, isComAl } = useContext(Contexts)
    let { deleteTodo, completedTodos } = useHelper()
    let cancel = () => {
        setOpenAlert(false)
    }
    return (
        <>
            <Modal
                open={openAlert}
            >
                <Stack
                    height={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}

                >
                    <Paper
                        sx={sx.Paper}
                    >
                        <Typography textAlign={"center"}

                            mt={2}
                            variant="body1" color="secondary">{
                                isComAl ? "are you completed this." : "do you want delete this."
                            }
                        </Typography>
                        <Stack
                            direction={"row"}
                            justifyContent={"flex-end"}
                            mt={2}
                            pb={1}
                            gap={1}
                        >
                            <Button
                                variant='contained'
                                color='secondary'
                                size='small'
                                onClick={cancel}
                            >
                                <Typography
                                    color={"primary"}
                                >
                                    cancel
                                </Typography>
                            </Button>
                            <Button
                                variant='contained'
                                color='secondary'
                                size='small'
                                onClick={
                                    isComAl ?
                                        completedTodos
                                        : deleteTodo
                                }
                            >
                                <Typography
                                    color={"primary"}
                                >
                                    Ok
                                </Typography>
                            </Button>
                        </Stack>
                    </Paper>

                </Stack>
            </Modal>
        </>
    )
}

export default PopUp