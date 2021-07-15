import React from 'react'
import Paper from '@material-ui/core/Paper';
import Logo from '../Images/logo.jpg'
let note = "SiliconVally's NoteBook"
function header() {
    return (
        <div>
            <Paper style={{padding:"12px", display:"flex"}} elevation={3}>
             <img style={{width:"40px", borderRadius:"2px",margin:"12px"}} src={Logo}></img>
            <h1 style={{margin:0}}>{note}</h1>
            </Paper>
        </div>
    )
}

export default header
