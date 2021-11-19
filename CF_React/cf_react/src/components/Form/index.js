import React, { useState } from 'react';

export default function Form() {
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    const sendForm = (ev) => {
        ev.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            setTitle('');
            setBody('');
            console.log(json)
        });
    }

    return (
        
        <form onSubmit={(ev) => sendForm(ev)}>
            <div>
                <h2>Form</h2>
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} id="title" onChange={ (ev) => setTitle(ev.target.value) }/>
            </div>

            <div>
                <label htmlFor="body">public</label>
                <textarea id="body" rows="2" cols="30" value={body} onChange={ (ev) => setBody(ev.target.value) }></textarea>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    )
}