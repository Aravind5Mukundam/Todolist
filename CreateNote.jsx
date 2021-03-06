import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNote = (props) => {
    
    const[note, setNote] =useState({
        title: "",
        content: ""
    });

    const InputEvent = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;

        const {name, value} = e.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: ""
        });
    }
    
    return (
        <>
            <div className='main_note'>
                <form className="create-note">
                    <input className="title" type='text' name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off' />
                    <textarea className="content"  rows='' column='' name='content' value={note.content} onChange={InputEvent} placeholder='Write a note' ></textarea>
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreateNote;

