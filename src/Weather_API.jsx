import {useState} from "react";

function Weather_API() {
    const [newItem, setNewItem] = useState("");

    function getTemperature() {
        return Math.floor(Math.random() * 40);
    }

    function getWeather() {
        const weathers = ["Ensoleillé", "Nuageux", "Venteux", "Pluvieux", "Orageux"];
        const hints = ["Prenez votre chapeau",
            "Couvrez-vous bien",
            "N'oubliez pas votre manteau",
            "Prenez votre parapluie",
            "Vous savez, le télétravail c'est bien aussi"];
        const random = Math.floor(Math.random() * 5);


        const city = newItem;
        const temperature = getTemperature();
        const weather = weathers[random];
        const hint = hints[random];

        if(!city){
            HTMLResponse("Veuillez entrer un nom valide.");
        }
        else{
            const response = {city, temperature, weather, hint};
            HTMLResponse(response);
        }
    }

    function HTMLResponse(response){
        try{
            let element = document.getElementById("responseText");
            element.innerText = JSON.stringify(response);
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    return (
        <div className="App">
            <h1>Weather Report</h1>

            <input
                onKeyPress={(e) => {if (e.key === "Enter") {
                    // Cancel the default action, if needed
                    e.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("weatherButton").click();
                }}}
                id="myInput"
                type="text"
                placeholder="name a city"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />

            <button
                id="weatherButton"
                type="submit"
                onClick={() => getWeather()}
            >Search
            </button>

            <div id="responseText"></div>

        </div>
    );
}
export default Weather_API;
