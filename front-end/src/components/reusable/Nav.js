import React from 'react'
import { AppBar, Typography } from "@mui/material"
let sx={
    Nav:{
        height: 60,
        top: 0,
        left: 0,
        justifyContent:"center",
    }

}
function Nav() {
    return (
        <AppBar
            position='fixed'
            color='primary'
            variant='elevation'
            sx={sx.Nav}
        >
            <Typography
                fontSize={28}
                color={"secondary.main"}
                ml={2}
                letterSpacing={0.5}
            >
                todo list
            </Typography>


        </AppBar>
    )
}

export default Nav