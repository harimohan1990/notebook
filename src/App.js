import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';
import Note from './components/Note'
import { useState } from 'react';
function App() {
  const [notes, setNodes] = useState([])

  function addNodes(note){
    setNodes(preNotes=>{
      return [...preNotes,note]
    }
    )
  }

  function delNode(id){
    setNodes((preNotes=>{
      return preNotes.filter((note,index)=>{
           return index !==id;
      })
    }))

  }
  return (
    <div style={{  
      backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height:"100vh"
    }} className="App">
     
      <Header/>
      <Form  addNode={addNodes}/>
     {notes.map((note,index)=>(
         <Note  id={index} delNode={delNode} title={note.title} content={note.content}/>
     ))}
      <Footer/>
    </div>
  );
}

export default App;
