import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';





class ListEntryDiesesSemester extends Component {
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
        const {classes}= this.props;
        return (
            <div>
                <Container maxWidth="sm">
                    <CssBaseline />
                    <Typography variant='h4' color="secondary">DIESES SEMESTER</Typography>
                    <br/>
                    <Typography variant='h6' color="gray">Genähmigte Projekte</Typography>
                    <br/>
                    <Grid item>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Projekt</TableCell>
                                        <TableCell>Projektart</TableCell>
                                        <TableCell>Professor</TableCell>
                                        <TableCell>Professor</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.rows.map(row=> (
                                        <TableRow key={row.id}>
                                            <TableCell> {row.project_name}</TableCell>
                                            <TableCell> {row.project_type}</TableCell>
                                            <TableCell> {row.professor}</TableCell>
                                        </TableRow>

                                    ))}
                               </TableBody>
                            </Table>
                        </TableContainer>
                     </Grid>
                    <Typography variant='h6' color="gray">Abgelehnte Projekte</Typography>
                    <br/>
                    <Grid item>
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
export default ListEntryDiesesSemester;
