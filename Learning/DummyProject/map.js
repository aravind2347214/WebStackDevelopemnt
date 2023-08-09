
var lat;
var lon

window.onload=()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(locationSuccess,locationError)
    }
}



const locationSuccess=(data)=>{

    console.log("Success",data)
    document.getElementById("lat").innerHTML=data.coords.latitude
    lat=data.coords.latitude;
    lon=data.coords.longitude;
    document.getElementById("lon").innerHTML=data.coords.longitude
    document.getElementById("timestamp").innerHTML=data.timestamp
    console.log(lat,lon)

    const iframelink=`https://maps.google.com/maps?q=+${lat}+,+${lon}+&hl=es&z=14&amp;output=embed`
    console.log(iframelink);
    document.getElementById("maplink").src=`https://maps.google.com/maps?q=+${lat}+,+${lon}+&hl=es&z=14&amp;output=embed`


}

const locationError=(data)=>{
    console.log("Error",data)
    document.getElementById("error").innerHTML=data.message;

}




