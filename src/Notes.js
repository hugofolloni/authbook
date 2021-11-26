import React, { useState, useEffect } from "react";
import Text from "./Text";
import Create from "./Create";

const Notes = () => {

    const [username, setUsername] = useState("");
    const [texts, setTexts] = useState(null);

    var userId = localStorage.getItem("userId");

    var url = " http://localhost:8000/users";

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        window.location.href = "/login";
    }

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                if(data[i].id === parseInt(userId)){
                    setUsername(data[i].username);
                    setTexts(data[i].notes);
                }
            }
        })
    }, [url, userId]);
    

    return ( 
        <div className="notes">
            <h1>Notes</h1>
            <div className='logout-div'>
                <button className='logout-button' onClick={ handleLogout }>Logout</button>
            </div>
            <div className='create'>
                <Create userId={userId}/>
            </div>
            <div className="notes">
                <h4>Notes from { username }</h4>
                {texts && <Text texts={texts} />}
            </div>
        </div>
     );
}
 
export default Notes;