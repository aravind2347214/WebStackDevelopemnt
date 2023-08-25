var xmlreq= new XMLHttpRequest()
console.log("Before opeing",xmlreq.onreadystatechange)

xmlreq.open('GET',"https://dummyjson.com/products/1")


console.log("after opening",xmlreq.onreadystatechange)
xmlreq.send()

console.log("after sending",xmlreq.onreadystatechange)

xmlreq.onreadystatechange =()=>{
    var res= xmlreq.response
    console.log(JSON.parse(xmlreq.response))
    document.getElementById("animalinfo").innerHTML=res

}