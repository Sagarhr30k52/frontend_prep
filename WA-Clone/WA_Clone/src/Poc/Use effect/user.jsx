import React, { useEffect, useState } from 'react'

function user() {
    const[loading, setLoading] = useState(true);

    const[user, setuser] = useState(null);
    function cb(){
        // logic of fetching data and changing dom
        // console.log("i am after render");

        async function fetchUser(){
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const user = await response.json();
            // console.log("userdata", user);
            setLoading(false);
            setuser(user);
            
        }
        fetchUser();
    }

    useEffect(cb , []);

    console.log("render");
    if(loading){
        return (
          <>
          <div>Profile</div>
          <div>...loading</div>
          </>
        )
    }
    if(loading == false){
        return(
            <>
            <div>profile</div>
            <div>user</div>
            </>
        )
    }
}

export default user