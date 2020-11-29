import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import {ThemeProvider} from '@material-ui/core/styles';




//This will be the signin page. The user will thus be able to sign in to the ElectionSystem.
//Users are professors, admins and students.

class App extends Component {

    handleSignInButtonClicked = () => {
        this.props.onSignIn();
    }
    /** Renders the sign in page, if user objext is null */

    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Typography variant='h1' align='center'textColor='primary_red'> Hochschule der Medien</Typography>
                    <Typography  align='center' variant='h3'>Welcome to the ElectionSystem for HdM Projects.</Typography>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
	                <Typography  align='center' variant='h6'>This page appeares, if you are not signed in.</Typography>
	                <Typography  align='center' variant='h6'>To use the services of the HdM ElectionSystem please</Typography>
	                <br/>
	                <Grid container justify='center'>
					    <Grid item>
						    <Button variant='contained' color='primary' onClick={this.handleSignInButtonClicked}>
							    Sign in with Google
      			            </Button>
					    </Grid>
				    </Grid>
				    </ThemeProvider>
			    </div>
		);
	}
}
PropTypes
SignIn.propTypes = {
	classes: PropTypes.object.isRequired,
	onSignIn: PropTypes.func.isRequired,}

export default App;
