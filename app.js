// import react; react-router-dom
import React from 'react';
import {BrowswerRouter as Router,Route,Switch,Link} from 'react-router-dom';

// import all previously made pages
import LoginPage from './pages/loginPage';
import AchivementsPage from './pages/achivementsPage';
import ChartsPage from './pages/chartsPage';
import ChatbotPage from './pages/chatbotPage';
import GoalsPage from './pages/goalsPage';
import ProgressPage from './pages/progressPage';

//function for switching/navigating between the pages of the app
function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>Home
                        <li><Link to="/login">Home</Link></li>
                        <li><Link to="/achievments">Achievments</Link></li>
                        <li><Link to="/charts">Charts</Link></li>
                        <li><Link to="/chatbot">Chatbot</Link></li>
                        <li><Link to="/goals">Goals</Link></li>
                        <li><Link to="/progress">Progress</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/login" compodent={LoginPage}/>
                    <Route path="/achievments" compodent={AchivementsPage}/>
                    <Route path="/charts" compodent={ChartsPage}/>
                    <Route path="/chatbot" compodent={ChatbotPage}/>
                    <Route path="/goals" compodent={GoalsPage}/>
                    <Route path="/progress" compodent={ProgressPage}/>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
//export default so this code can be used in other files