// import react; react-router-dom
import React from 'react';
import {BrowswerRouter as Router,Route,Switch} from 'react-router-dom';

// import all previously made pages
import LoginPage from './pages/loginPage';
import AchivementsPage from './pages/achivementsPage';
import ChartsPage from './pages/chartsPage';
import ChatbotPage from './pages/chatbotPage';
import GoalsPage from './pages/goalsPage';
import ProgressPage from './pages/progressPage'

//function for switching/navigating between the pages of the app
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" compodent={LoginPage} />
                <Route path="/goals" compodent={GoalsPage} />
                <Route path="/achivements" compodent={AchivementsPage} />
                <Route path="/charts" compodent={ChartsPage} />
                <Route path="/chatbot" compodent={ChatbotPage} />
                <Route path="/progress" compodent={ProgressPage} />
            </Switch>
        </Router>
    );
}
export default App;
//export default so this code can be used in other files