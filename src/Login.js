import React, { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleAuth = () => {
        fetch('http://localhost:8000/users')
        .then(res => res.json())
        .then(data => {
            var userExists = false;
            var userId = 0;
            for(let i = 0; i < data.length; i++){
                if(data[i].username === username && data[i].password === password){
                    userExists = true;
                    userId = data[i].id;
                }
            }
            if(userExists === true){
                window.alert(`Logado! Usuário ${username} foi autenticado!`);
                localStorage.setItem("userId", userId);
                window.location.href = '/notes';
            }
            else{
                window.alert("Usuário ou senha inválidos!");
                window.location.reload()
            }
        })
    }

    return ( 
        <div className='login-div'>
            <h1>Login</h1>
            <div className="container">
                <div className="usernameDiv">
                    <h3>Username</h3>
                    <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value) }/>
                </div>
                <div className="passwordDiv">
                    <h3>Password</h3>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value) }/>
                </div>
                <button onClick={ handleAuth }>Login</button>
                <a className='create' href='/create'>New user</a>
            </div>
        </div>
     );
}
 
export default Login;