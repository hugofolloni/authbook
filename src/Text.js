import React, { useState } from 'react';

const Text = (props) => {

    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState("");
    const [editId, setEditId] = useState("");

    var texts = props.texts;

    const userId = localStorage.getItem("userId");
    var url = `http://localhost:8000/users/${userId}`;
    
    const handleDelete = (id) => {
        const position = parseInt(id);

        fetch(url)
        .then(response => response.json())
        .then(data => {
            var newNotes = texts
            newNotes.splice(position, 1);

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
                window.location.reload();
            })
        })
    }

    const handleEdit = (id, currentNote) => {
        setEditId(id);
        setEditing(true);
        setEditText(currentNote);
    }

    const handleUpdate = () => {
        const position = parseInt(editId);

        fetch(url)
        .then(response => response.json())
        .then(data => {
            var newNotes = texts
    
            var today = new Date();
            var date = today.getHours() + ":" + today.getMinutes() + " - " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

            newNotes[position] = {note: editText, date: date};

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
                setEditId('');
                setEditing(false);
                setEditText("");
                window.location.reload();
            })
        })
    }

    return ( 
        <div className="texts-div">
            { editing && <div className='edit-div'>
                <textarea value={editText} onChange={(e) => setEditText(e.target.value)}/>
                <button onClick={ () => setEditing(false) }>Cancel</button>
                <button onClick={ () => handleUpdate() }>Update</button>
            </div> 
            }
            {texts.map((texts, index) => (
                <div className="singular-text">
                    <p>{texts.note}   -   {texts.date}</p>
                    <button onClick={() => handleEdit(index, texts.note)}>Edit</button>
                    <button onClick={() => handleDelete(index) }>Delete</button>
                </div>
            ))
        }
        </div>
     );
}
 
export default Text;