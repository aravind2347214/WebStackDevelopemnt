const submit=()=>{
    var APIKEY= document.querySelector("input").value
    
    if(APIKEY){

        console.log(APIKEY)

        var map = new Microsoft.Maps.Map("#myMap",{
            credentials:APIKEY
        });

        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            var loc= new Microsoft.Maps.Location(
                position.coords.latitude,
                position.coords.longitude
            );

            var pin = new Microsoft.Maps.Pushpin(loc)
            map.entities.push(pin)
            map.setView({center:loc,zoom:10})

        })
    }

    else{

        document.getElementById("error").innerHTML="APIKEY WRONG"

    }
  
}