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
                console.log(`Logado! Usuário ${username} de id ${userId} foi autenticado!`);
            }
            else{
                console.log("Usuário ou senha inválidos!");
            }
        })
    }

    return ( 
        <div className='login-div'>
            <h1>Login</h1>
            <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value) }/>
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value) }/>
            <button onClick={ handleAuth }>Login</button>
        </div>
     );
}
 
export default Login;