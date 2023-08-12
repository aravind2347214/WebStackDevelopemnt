
var lat;
var lon;

window.onload=()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(locationSuccess,locationError)
    }
    GetMap()
    drawCanvas()  
}

const locationSuccess=(data)=>{

    console.log("Success",data)
    document.getElementById("status").style.color="green"
    document.getElementById("status").innerHTML="Success";
    lat=data.coords.latitude;
    lon=data.coords.longitude;
    document.getElementById("lat").innerHTML=lat
    document.getElementById("lon").innerHTML=lon
    document.getElementById("timestamp").innerHTML=data.timestamp
    console.log(lat,lon)

}

const locationError=(data)=>{
    console.log("Error",data)
    document.getElementById("status").style.color="red"
    document.getElementById("status").innerHTML=data.message;
}

// Canvas Code

 const drawCanvas=()=>{
   const colors=["#900C3F","3C70039","#F94C10","#F8DE22"]
   var canvas=document.getElementById("canvas");
   console.log("canvas obj",canvas)
   const ctx = canvas.getContext("2d");
   var cy=canvas.clientHeight/2
   var cx=canvas.clientWidth/2  
   


   for(let i=1;i<25;i++){
       ctx.beginPath();
       ctx.lineWidth=50/i
       ctx.arc(2*cx, 2*cy, 40*i/3, 0, Math.PI * 2, true); // Outer circle
       ctx.stroke();


    }
    for(let i=1;i<20;i++){
        ctx.beginPath();
        ctx.strokeStyle="red"
        ctx.lineWidth=50/i
        ctx.arc(cx, cy, 60*i/3, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke();
     }

    for(let i=1;i<20;i++){
        ctx.beginPath();
        ctx.strokeStyle="black"
        ctx.lineWidth=50/i
        ctx.arc(0, 0, 50*i/3, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke();

       
     }

 }


 function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: "AmjQR8_zqd0uisqaoH3SZbKRYPTDIP4n40vQH6DkbWs5HUR-HkPsTBJJC31L_dji"
    });
    //Request the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
        var loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);

        //Add a pushpin at the user's location.
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);

        //Center the map on the user's location.
        map.setView({ center: loc, zoom: 15 });
    });
}




