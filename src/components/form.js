import React, { useState } from 'react'
import {Fab, Paper,TextField}from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
function Form({addNode}) {
    const [note, setNote] = useState({
        title:"",
        content:""
    })
    function clickHander(){
       addNode(note)
       setNote({
        title:"",
        content:""
       })
    }
    function changeHandler(event){
        const {name,value} = event.target
        setNote((prevalues) =>{
            return{
                ...prevalues,
                [name] : value 
            }
         } )
      
    }
    return (
        <div>
            <Paper style={{margin:"15px",padding:"20px"}}>
              <form>
                  <TextField  
                   onChange={changeHandler}
                  name="title" 
                  value={note.title} 
                  label="title"
                   fullWidth
                    autoComplete="off" />
                  <TextField
                   onChange={changeHandler}
                   name="content"
                    value={note.content}
                     label="content"
                      fullWidth multiline rows={4} 
                      autoComplete="off" />
                 <Fab onClick={clickHander} style={{marginTop:"20px", display:"flex"}}>
                 <AddIcon/>
                  </Fab>
              </form>
            </Paper>
        </div>
    )
}

export default Form
