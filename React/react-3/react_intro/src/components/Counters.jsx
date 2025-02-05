import {useState} from "react";

function Counter(props){
    const [value, setValue] = useState(props.initialValue);

    const handelnc= () =>{
        if(value == 10){
            return;
        }
        setValue(value+1);
    }

    const handeldec = ()=>{
        if(value == 0){
            return;
        }
        setValue(value-1);
    }

    return <div>
        <div>{value}</div>
        <button onClick={handelnc}>+plus</button>
        <button onClick={handeldec}>-minus</button>
    </div>
}

export default Counter;