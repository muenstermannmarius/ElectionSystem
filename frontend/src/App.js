import React, { Component } from 'react';
/**import ProjekteGenehmigen from './components/layout/pages/ProjectGenehmigen/ProjekteGenehmigen';**/
import Teilnehmerliste from './components/layout/pages/Teilnehmerliste'
import ArchiveProject from'./components/layout/pages/ProjectGenehmigen/ArchiveProject'
import ListEntryDiesesSemester from'./components/layout/pages/ProjectGenehmigen/ListEntryDiesesSemester'
import HomeScreenAdminBeginn from'./components/layout/pages/ProjectGenehmigen/HomeScreenAdminBeginn'


class App extends Component {


  render() {


        return (

            <div>
                <Teilnehmerliste />
		    </div>
		);
	}
}
export default App;
