import React from 'react'

function footer() {
    return (
        <div>
           <p style={{position:"absolute",bottom:"0",width:"100%",textAlign:"center"}}>
               copyright  &copy ; {new Date().getFullYear()}
               <a href="https://www.javascriptboy.com/">JavascriptBoy</a>
           </p>

        </div>
    )
}

export default footer
