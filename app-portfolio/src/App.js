import React, { useState } from 'react';
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TodoList from './components/todolist';
import {v4} from "uuid";
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';

function App() {
  const [todolist,settodolist] = useState([]);
  const [textinput,setinput] = useState("");

  const ontextinput = (e) => {
    setinput(e.target.value);
  };
 const onAddBtnClick = (e) => {
   settodolist([...todolist,{id: v4(), name: textinput,isCompleted: false}]);
 };

  return (
    <>
     <Banner></Banner>
      {/* <h3>Danh sach can lam</h3>
      <Textfield
        name='add-todo'
        placeholder="Them viec can lam..."
        elemAfterInput={
          <Button isDisabled={!textinput} appearance='primary' onClick={onAddBtnClick}>
               Them
          </Button>
        }
        css={{padding:"2px 4px 2px"}}
        value={textinput}
        onChange={ontextinput}
        >
      </Textfield>
      <TodoList
       todolist = {todolist}
       ></TodoList> */}
    </>
  );
}

export default App;
