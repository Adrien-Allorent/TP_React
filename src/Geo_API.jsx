function Geo_API() {

    const getCity = () => {
        const random = Math.floor(Math.random() * 5);
        const cities = ["Paris", "Nantes", "Marseille", "Pau", "Carcassonne"];
        return cities[random];
    };

    function App() {
        const errorCallback = (error) => {
            console.log(error);
        };

        const successCallback = (position) => {
            const city = getCity();

            const latitude = position.coords.latitude;
            const longitude = position.coords.latitude;

            const response = {latitude, longitude, city};

            let element = document.getElementById("responseText");
            element.innerText = JSON.stringify(response);
        };

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    return (
        <div className="App">
            <h1>Geolocalisation</h1>

            <button
                id="localisationButton"
                type="submit"
                onClick={() => App()}
            >Search
            </button>

            <div id="responseText"></div>

        </div>
    );
}
export default Geo_API;