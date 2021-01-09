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
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core';
import {ElectionSystemAPI, ProjectBO, ParticipationBO, ProjecttypeBO } from '../../../api';
import TableEntryAdmin from './TableEntryAdmin';




class ApprovedProjectsAdmin extends Component {
constructor(props) {
        super(props)
        this.state = {
            tableData: [],
            projects: [],
            projecttypes: [],
            error: null,
            priority: '',
            updatingError: null,
            deletingError: null,
            loaded: null,
            activeIndex: null,

        };
        this.baseState = this.state;
    }

    componentDidMount(){
        this.getProjectForStateOne();

    }

      /**Delets the project  **/
      deleteProjectHandler = (project) => {
        console.log(project);
        ElectionSystemAPI.getAPI().deleteProject(project.getID()).then(project => {
          console.log(project);
        }).catch(e =>
          this.setState({
            deletingError: e
          })
        );

        this.setState({
          projects: this.state.projects.filter(projectFromState => projectFromState.getID() != project.getID())
        })
    }

    //Gives back the projects by state "approved"
    getProjectForStateOne = () =>{
        ElectionSystemAPI.getAPI().getProjectForState("approved")
        .then(projectBO => { this.setState({
            projects: projectBO,
            loaded: true,
            error: null
        })}).catch(e =>
            this.setState({
                projects:[],
                error: e
        }))

    }






  render() {

    const {projects} = this.state;
     const {classes}= this.props;
        return (
            <div>
                <Container maxWidth="md">
                    <CssBaseline />
                    <Typography variant='h4' color="secondary" className={classes.redHeader}>THIS SEMESTER</Typography>
                    <br/>
                    <Typography variant='h6' color="gray">Approved Projects</Typography>
                    <br/>
                    <Grid item container
                            direction="column"
                            xs={12}
                            md={12}
                            spacing={2}
                            align="center"
                            className={classes.grid}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="h6" className={classes.tableRow}>
                                                project
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6" className={classes.tableRow}>
                                                professor
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6" className={classes.tableRow}>
                                                projecttype
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                                {this.state.projects.map(project => (
                                            <TableEntryAdmin
                                                name = {project.getName()}
                                                prof = {project.getProfessor()}
                                                type = {project.getProjectType()}
                                            />
                                )
                                )}

                            </TableBody>
                            </Table>
                        </TableContainer>
                     </Grid>

				</Container>
		    </div>
		);
	}
}
const styles = theme => ({
    grid:{
        width: '100%',
        margin: '0px',
        padding: theme.spacing(3)
    },
    button:{
        marginTop: theme.spacing(3)
    },
    redHeader:{
        color: theme.palette.red,
        fontFamily: 'Arial',
        fontStyle: 'bold',
        fontSize: 30
    },
    tableRow:{
    color:'lightGray',
    fontFamily:'Arial'
    }
});
export default withStyles(styles) (ApprovedProjectsAdmin);
