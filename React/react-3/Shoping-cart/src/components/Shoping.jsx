// rcfe

import React from 'react'
import InputBox from './inputBox';
import List from './list';

function Shoping() {
    const [content, setContent] = React.useState("");
    const [item, setItem] = React.useState([]);
    
    const handelInput = (event) =>{
        setContent(event.target.value);
    }

    const handelAddMe = ()=>{
        const newItem = content;
        const newArr = [];

        for(let i = 0; i<item.length; i++){
            newArr.push(item[i]);
        }
        newArr.push(newItem);

        setItem(newArr);
        setContent("");
    }
    

    const deleteMe = (index) =>{
        const filterArr = [];
        for(let i = 0; i<item.length; i++){
            if(i != index){
                filterArr.push(item[i]);
            }
        }
        setItem(filterArr);

    }

  return (
    <div>
        <InputBox handelAddMe ={handelAddMe} content = {content} handelInput = {handelInput}></InputBox>
        <List item = {item} deleteMe ={deleteMe}></List>
    </div>
  )
}

export default Shoping