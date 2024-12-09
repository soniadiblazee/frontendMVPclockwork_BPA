// import React \/
import React,{ useState } from React;

/* basic login page
will be iterated upon after MVP
*/

function loginPage() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
};

// logic for authentication (call api)
const handleLogin = () => {
    alert('logged in! splendid');
};

/* creates input fields for username and password
creates a 'submit' button; handles form submission and trigger login proccess
HELPFUL: useState stores values of username and password fields
*/

return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.targetValue)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.targetValue)}
            />
            <button type="submit" onClick={handleLogin}>
            Login
            </button>
        </form>
    </div>
);
export default loginPage;