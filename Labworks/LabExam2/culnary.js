window.onload=()=>{
    getMap();
}

const getMap=()=>{

    var map= new Microsoft.Maps.Map("#myMap",{
        credentials:"AmjQR8_zqd0uisqaoH3SZbKRYPTDIP4n40vQH6DkbWs5HUR-HkPsTBJJC31L_dji"
    })

    navigator.geolocation.getCurrentPosition((position)=>{
        var loc= new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude
        )

        var pin= new Microsoft.Maps.Pushpin(loc)
        map.entities.push(pin)
        map.setView({center:loc,zoom:15})

    })

}