// import react \/
import React from react;

function GoalsPage() {
    const[goal,setGoal] = useState('');

// logic to add a goal (would likely save to an API)
    const addGoal = () => {
        alert(`Goal added: ${goal}`);
        setGoal('');
    };

/* makes an input field for putting a goal
makes a button 'add goal' to trigger the addGoal function to, well, add the goal */

    return (
        <div>
            <h1>Your Goals</h1>
            <input
            type="text"
            placeholder="enter your goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            />
            <button onClick={addGoal}>Add Goal</button>
            {/* list of goals go here */}
        </div>
    );
}

export default GoalsPage();
//export default so this code can be used in other files