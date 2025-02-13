import React,{useContext} from 'react'
// 1
const ContextWrapper = React.createContext();

function PropDrillingSol() {
    const value = 10;
  return (
    <>    <div>1_PropDrillingSol</div>
    {/* 2 */}
    <ContextWrapper.Provider value={value}>
    <GrandParent></GrandParent>
    </ContextWrapper.Provider>
    </>

  )
}

function GrandParent(){
    return <>
        <div>GrandParent</div>
        <Parent ></Parent>
    </>
}

function Parent(){
    return<>
        <div>Parent</div>
        <Child></Child>
    </>
}

function Child(){
    // 3
    const message = useContext(ContextWrapper);
    return <>
    <div>Child value = {message}</div>
    </>
}

export default PropDrillingSol