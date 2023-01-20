import {useState} from "react";

function Weather_API() {
    const [newItem, setNewItem] = useState("");

    function getWeather(){
        const weathers = ["Ensoleillé", "Nuageux", "Venteux", "Pluvieux", "Orageux"];
        const random = Math.floor(Math.random() * 5);
        return weathers[random]
    }
    function getTemperature() {
        return Math.floor(Math.random() * 40);
    }
    function getTenue(weather){
        switch (weather) {
            case "Ensoleillé":
                return "Prenez votre chapeau";
            case "Nuageux":
                return "Couvrez-vous bien";
            case "Venteux":
                return "N'oubliez pas votre manteau";
            case "Pluvieux":
                return "Prenez votre parapluie";
            case "Orageux":
                return "Vous savez, le télétravail c'est bien aussi";
            default:
                return "";
        }
    }

    function App() {
        const city = newItem;
        const weather = getWeather();
        const temperature = getTemperature();
        const hint = getTenue(weather);

        if(!city){
            document.getElementById("cityLocation").innerText = "Entrez un nom valide.";
        }
        else{
            const response = [city, temperature, weather, hint];
            HTMLResponse(response);
        }
    }

    function HTMLResponse(response){
        try{
            let element = document.getElementById("cityLocation");
            element.innerText = response[0] + " - France";

            element = document.getElementById("weatherResponse");
            element.innerText = response[1] + "°C - " + response[2];

            element = document.getElementById("clothesHint");
            element.innerText = response[3];
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
                onClick={() => App()}
            >Search
            </button>

            <div id="cityLocation"></div>
            <div id="weatherResponse"></div>
            <div id="clothesHint"></div>

        </div>
    );
}
export default Weather_API;
