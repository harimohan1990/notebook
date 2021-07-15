import React from 'react';
import Paper  from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


function Note({title,content,id,delNode}) {

    function clickHandler(){
        delNode(id)
    }
    return (
        <div>
            <Paper style={{minWidth:"200px",minHeight:"100px",padding:"10px",margin:"10px",display:"flex"}}>
              <h1>{title}</h1>
              <p>{content}</p>
              <Button  onClick={clickHandler} style={{marginLeft:"200px"}}>
            <DeleteIcon style={{color:"red"}}/>
            </Button>
            </Paper>
           
        </div>
    )
}

export default Note
