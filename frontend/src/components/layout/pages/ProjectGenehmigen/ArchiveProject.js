import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import DeleteButton from '../../../Buttons/DeleteButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';


class ArchiveProject extends Component {
constructor(props){
    super(props)

    this.state= {
    rows:[
    {
    id:1,
    project_name:"User Experience",
    project_type:"inter",
    professor:"Kunz"},

     {
    id:2,
    project_name:"Programmieren",
    project_type:"xyz",
    professor:"Thies"},

     {
    id:3,
    project_name:"ADS",
    project_type:"mno",
    professor:"Thies"},

    ]
    }
}



  render() {


        return (

            <div>
             <Container maxWidth="sm">

                <CssBaseline />

                <Typography color="secondary" variant='h4'>ARCHIVED PROJECT</Typography>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <br/>
                    <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Projekt</TableCell>
                                        <TableCell>Projektart</TableCell>
                                        <TableCell>Professor</TableCell>
                                        <TableCell> <Button  variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete All</Button> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.rows.map(row=> (
                                        <TableRow key={row.id}>
                                            <TableCell> {row.project_name}</TableCell>
                                            <TableCell> {row.project_type}</TableCell>
                                            <TableCell> {row.professor}</TableCell>
                                            <TableCell> <IconButton aria-label="delete"><DeleteIcon /> </IconButton></TableCell>
                                        </TableRow>
                                    ))}
                               </TableBody>
                            </Table>
                    </TableContainer>
                </Grid>
             </Container>
		    </div>
		);
  }
}
export default ArchiveProject;
