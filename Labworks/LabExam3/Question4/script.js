
window.onload= ()=>{
     fetch("dogs.json").then((res)=>{
        res.json().then((data)=>{
            console.log(data[0])
            if(data.length>0){
                for(let i=0;i<data.length;i++){
                    var newdog= document.createElement('div')
                    newdog.className="single-dog"
                    var breed = document.createElement('div')
                    breed.innerHTML=`<b>Breed</b>:${data[i].breed}`
                    var color = document.createElement('div')
                    color.innerHTML=`<b>Color</b>:${data[i].color}`
                    var country = document.createElement('div')
                    country.innerHTML=`<b>Country</b>:${data[i].country}`
                    newdog.appendChild(breed)
                    newdog.appendChild(color)
                    newdog.appendChild(country)
                    document.getElementById("dogs-container").appendChild(newdog)
                }
            }
        })
    })

}



