import React from 'react'

function InputBox() {
    const [content, setContent] = React.useState("");

    const handelInput = (event) =>{
        setContent(event.target.value)
    }
    const handelAddME = () => {
        console.log(content);
        setContent("");
    }
  return (
    <div>
        <input type="text" value={content} onChange={handelInput} />
        <button onClick={handelAddME}>Add me</button>
    </div>
  )
}

export default InputBox