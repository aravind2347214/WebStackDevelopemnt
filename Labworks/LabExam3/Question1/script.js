window.onload=async()=>{
    var dogButton = document.getElementById("getdog")
    var clearDogButton = document.getElementById("cleardog")

    const dogApi="https://dog.ceo/api/breeds/image/random"
    await fetch(dogApi).then((res)=>{
        res.json().then((data)=>{
            // console.log(data)
            var newdog = document.createElement("img")
            newdog.src=data.message
            document.getElementById("container").appendChild(newdog)

        })
    })


  


    dogButton.addEventListener('click',async()=>{
        document.getElementById("container").innerHTML=null

        await fetch(dogApi).then((res)=>{
            res.json().then((data)=>{
                // console.log(data)
                var newdog = document.createElement("img")
                newdog.src=data.message
                document.getElementById("container").appendChild(newdog)

            })
        })
    })
}