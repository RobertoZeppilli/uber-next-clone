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

export const getRideDuration = (pickupCoordinates, dropoffCoordinates, setRide) => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoicm9iZXJ0b3plcHBpbGxpIiwiYSI6ImNremgzazFrYjE5cnAydXBkcGpuN3V1NGsifQ.tg5kLySOIpP24EPb6tPIig`)
        .then(res => res.json())
        .then(data => data.routes[0] && setRide(data.routes[0].duration / 100))
}