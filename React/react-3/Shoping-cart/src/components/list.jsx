import React from 'react'

function List(props) {
    const item = props.item;
    const deleteMe = props.deleteMe;
  return (
    <ul>
        {item.map((Elem, index) =>{
            return <>
            <li key={index}><span>{Elem}</span>
            <button onClick={() => deleteMe(index)}>Delete me</button></li>
            </>
        })}
    </ul>
  )
}

export default List