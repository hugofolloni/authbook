import React, { useState } from 'react';

const NewUser = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleCreate = () => {
        fetch('http://localhost:8000/users')
        .then(res => res.json())
        .then(data => {
            var userExists = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].username === username) {
                    userExists = true;
                }
            }
            if(userExists === true){
                alert("User already exists");
            }
            else{
                fetch('http://localhost:8000/users', { 
                    method: 'POST', 
                    headers: {  'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: username,
                        password: password
                        })
                    })
                    .then(() => window.alert(`Novo usuário cadastrado: ${username}`))
                    .then(() => window.location.href = '/login')
                }
            })
    }

    return ( 
        <div className='new-user-div'>
            <h1>New User</h1>
            <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value) }/>
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value) } />
            <button onClick={ handleCreate }>Create</button>
        </div>
     );
}
 
export default NewUser;