// import react; react-router-dom
import React from 'react';
import {BrowswerRouter as Router,Route,Switch} from 'react-router-dom';

// import all previously made pages
import loginPage from './pages/loginPage';
import achivementsPage from './pages/achivementsPage';
import chartsPage from './pages/chartsPage';
import chatbotPage from './pages/chatbotPage';
import goalsPage from './pages/goalsPage';
import progressPage from './pages/progressPage'

//function for switching/navigating between the pages of the app
function app() {
    return (
        <Router>
            <Switch>
                <Route path="/login" compodent={loginPage} />
                <Route path="/goals" compodent={goalsPage} />
                <Route path="/achivements" compodent={achivementsPage} />
                <Route path="/charts" compodent={chartsPage} />
                <Route path="/chatbot" compodent={chatbotPage} />
                <Route path="/progress" compodent={progressPage} />
            </Switch>
        </Router>
    );
}
export default app;
//export default so this code can be used in other files