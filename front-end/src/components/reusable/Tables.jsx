import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Contexts } from '../../store/Context';





export default function BasicTable() {
    let { todos, setOpenAlert,


        setDelIndex,
        setEditIndex,
        setOpenModal,
        setIsComAl,
        setCompletedIndex,
        setCopyTodos,
        disAction,


    } = React.useContext(Contexts)
    React.useEffect(() => {
        setCopyTodos(todos)

    }, [])
    let openAlertFunc = (i) => {


        setOpenAlert(true);
        setDelIndex(i)
    }
    let openCompAl = (i) => {
        if (todos[i].completed) {


            return
        }


        setIsComAl(true)
        setOpenAlert(true);
        setCompletedIndex(i)
    }
    let openEditFunc = (i) => {
        setOpenModal(true);
        setEditIndex(i)
    }

    return (
        <TableContainer sx={{
            width: "70%",
            maxHeight: 500
        }} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell

                            align='center'>

                            <Typography fontSize={18} letterSpacing={0.5} variant="body1" color="secondary">     todos</Typography>
                        </TableCell>
                        {
                            !disAction && <TableCell align='center'>

                                <Typography fontSize={18} letterSpacing={0.5} variant="body1" color="secondary">
                                    actions</Typography>

                            </TableCell>
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((row, i) => (
                        <TableRow
                            key={row.todo}
                            sx={{ '&:last-child td, &:last-child th': { border: 0, } }}
                        >
                            <TableCell component="th" align='left' scope="row">
                                <Typography variant="body1" color="secondary">
                                    {row.todo}
                                </Typography>
                                <Typography fontSize={13} mt={1} variant="body1" color="secondary">
                                    {row.date}
                                </Typography>
                            </TableCell>
                            {
                                !disAction && <TableCell
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: {
                                            xs: "column",
                                            md: "row"
                                        },
                                        gap: 1
                                    }}

                                    align="center">
                                    <Tooltip
                                        title="delete"
                                        placement='right'
                                    >
                                        <IconButton
                                            onClick={() => openAlertFunc(i)}
                                            disabled={disAction}
                                        >
                                            <DeleteIcon
                                                color='secondary'
                                                fontSize='medium'
                                            />

                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip
                                        title="edit"
                                        placement='right'

                                    >
                                        <IconButton
                                            onClick={() => openEditFunc(i)}
                                            disabled={disAction}
                                        >
                                            <EditIcon
                                                color='secondary'
                                                fontSize='medium'
                                            />

                                        </IconButton>

                                    </Tooltip>
                                    <Tooltip
                                        title="completed"
                                        placement='right'

                                    >
                                        <IconButton
                                            disabled={disAction}
                                            onClick={() => openCompAl(i)}
                                            sx={{
                                                bgcolor: row.completed ? "success.main" : 'primary.main',
                                                "&:hover": {
                                                    bgcolor: row.completed ? "success.light" : 'primary.light',
                                                }


                                            }}

                                        >
                                            <CheckIcon
                                                color={row.completed ? "primary" : 'secondary'}
                                                fontSize='medium'
                                            />

                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            }



                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
