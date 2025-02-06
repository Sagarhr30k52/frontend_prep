import React from 'react'

function InputBox(props) {
    const content = props.content;
    const handelInput = props.handelInput;
    const handelAddMe = props.handelAddMe;
  return (
    <>
    <h2>input box</h2>
    <input type="text" value={content} onChange={handelInput}/>
    <button onClick={handelAddMe}>Add Me</button>
    </>
  )
}

export default InputBox