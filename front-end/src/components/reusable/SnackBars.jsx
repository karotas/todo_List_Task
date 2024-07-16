import { Alert, Snackbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Contexts } from '../../store/Context';
let sx = {
    Snackbar: {
        width: {
            md: 250,
            xs: "40%"
        },
        marginBottom: {
            xs: 2,
            md: 0
        }
    },
    Alert: {

        width: "100%"

    }
}
function SnackBars() {
    let {

        isErrSnk,

        snkOpen,
        setSnkOpen,
        snkMsg,

    } = useContext(Contexts)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnkOpen(false);
    };

    return (
        <>
            <Snackbar
                autoHideDuration={2000}
                onClose={handleClose}
                sx={
                    sx.Snackbar
                }
                open={snkOpen}

            >
                <Alert
                    color={isErrSnk ? "error" : "success"}
                    sx={sx.Alert}
                >
                    <Typography variant="body1" fontSize={14} color="secondary">{snkMsg}</Typography>

                </Alert>

            </Snackbar>
        </>
    )
}

export default SnackBars