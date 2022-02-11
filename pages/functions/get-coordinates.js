export const getCoordinates = (place, setCoordinates) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?` + new URLSearchParams({
        access_token: "pk.eyJ1Ijoicm9iZXJ0b3plcHBpbGxpIiwiYSI6ImNremgzazFrYjE5cnAydXBkcGpuN3V1NGsifQ.tg5kLySOIpP24EPb6tPIig",
        limit: 1
    }))
    .then((res) => res.json())
    .then(data => {
        setCoordinates(data.features[0].center)
    })
}