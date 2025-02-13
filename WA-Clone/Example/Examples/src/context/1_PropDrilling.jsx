import React from 'react'

function PropDrilling() {
    const value = 10;
  return (
    <>    <div>1_PropDrilling</div>
    <GrandParent value={value}></GrandParent>
    </>

  )
}

function GrandParent(props){
    const GParentvalue = props.value;
    return <>
        <div>GrandParent</div>
        <Parent value={GParentvalue}></Parent>
    </>
}

function Parent(props){
    const ParentValue = props.value;
    return<>
        <div>Parent</div>
        <Child value={ParentValue}></Child>
    </>
}

function Child(props){
    const ChildValue = props.value;
    return <>
    <div>Child value = {ChildValue}</div>
    </>
}

export default PropDrilling