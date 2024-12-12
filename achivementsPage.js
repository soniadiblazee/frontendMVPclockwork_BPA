// import react \/
import React from react;

/* a list of achivements that will be displayed
two achivements are here as examples of what kinds of achivements could be available
 more achivements can be added */

function AchivementsPage () {
    return (
        <div>
            <h1>Your Achivements</h1>
            <ul>
                <li>Complete 5 goals</li>
                <li>Login - 30 day streak</li>
                {/* list of achivements */}
            </ul>
        </div>
    )
};

export default AchivementsPage
//export default so this code can be used in other files