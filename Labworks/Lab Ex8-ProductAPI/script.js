const baseURL="./products.json"

window.onload=()=>{
    var fetchButton = document.getElementById("fetchButton");
    fetchButton.addEventListener('click',async()=>{
        await fetch(baseURL).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    })

}