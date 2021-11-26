import React, { useState } from 'react';

const Create = (props) => {

    var userId = props.userId;

    const [note, setNote] = useState(null);

    var url = `http://localhost:8000/users/${userId}`;

    const handleSubmit = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            var today = new Date();
            var date = today.getHours() + ":" + today.getMinutes() + " - " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
            var newNotes
            console.log(data.notes);
            if(data.notes !== undefined) {
                var oldNotes = data.notes;
                oldNotes.push({note: note, date: date});
                newNotes = oldNotes;
            } else {
                newNotes = [{note: note, date: date}]
            }
            fetch(url, {    
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                    notes: newNotes
                })
                }
            )
           .then(() => {
                setNote('');
                window.location.reload();
            })
        })
    }


    return ( 
        <div className='create-div'>
            <h3>Create Note</h3>
            <textarea value={note} onChange ={ (e) => setNote(e.target.value) }/>
            <button onClick={handleSubmit}>Create</button>
        </div>
     );
}
 
export default Create;