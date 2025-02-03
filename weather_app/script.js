        const button = document.querySelector("button");
        const searchInput = document.querySelector("input");
        const temprature = document.querySelector(".temprature");
        const Orlocation = document.querySelector(".location");

        button.addEventListener("click", async function (){
            const location = searchInput.value;
            if(location){
                // get data then update
                
                // fetchWeather(location).then((data) => {
                //     updateDOM(data);
                const data = await fetchWeather(location);
                if(data != null) {
                    updateDOM(data);
                }
            }
                searchInput.value ="";
        })
        
            function updateDOM(data){

                // console.log("i will update the data", data);
                
                // ***********extract your data***********
                const temp = data.current.temp_c;
                const loca = data.location.name;
                const timeData = data.location.localtime;
                const [date, time]= timeData.split(" ");
                const iconLink = data.current.condition.icon;
                const condition = data.current.condition.text;           

                // *************update the data************
                temprature.textContent = temp;
                Orlocation.textContent = loca;
                
                const Ortime = document.querySelector(".time");
                Ortime.textContent = time;

                const Ordate = document.querySelector(".date");
                Ordate.textContent = date;

                const image = document.querySelector("img");
                image.src = iconLink;

                const Orcondition = document.querySelector(".condition");
                Orcondition.textContent = condition;
            }

        async function fetchWeather(location){
            const url = `http://api.weatherapi.com/v1/current.json?key=21de335d62fb45568ec125841251201&q=${location}&aqi=no`
            const response = await fetch(url);
            
            // console.log(response);

            if(response.status == 400){
                alert("location is invalid");
                return null;
            } 
            else if(response.status == 200){
                const jasonData = await response.json();
                // console.log("jasonData : ",jasonData);
                return jasonData;
            }
        }