var productData=[]
const baseURL="https://cynthiaesthermetilda.github.io/Xhrdemo/products.json"

window.onload = () => {
  var fetchButton = document.getElementById("fetchButton");
  var searchButton = document.getElementById("searchButton");

  fetchButton.addEventListener("click", async () => {
    document.getElementById("loading").style.display="block"
    await fetch(baseURL).then((res)=>{
        res.json().then((data)=>{
        productData=data
        productData.length>0? document.getElementById("loading").style.display="none":null
        renderList(productData);
       })
    }).catch((err)=>{
        console.log(err);
    })
    
  });
  // searchButton.addEventListener("click", searchOrFilterData);

  document.getElementById("searchinput").addEventListener('input',searchOrFilterData)
  document.getElementById("filtervalue").addEventListener('change',searchOrFilterData)
};




const searchOrFilterData = () => {
  const searchitem = document.getElementById("searchinput").value;
  const filterType = document.getElementById("filtervalue").value;
  var noproducts = document.getElementById("noproducts");
  noproducts.style.display = "none";

  var newlist = [];
  if(searchitem!=''){
      for (let i = 0; i < productData.length; i++) {
        if (productData[i].name.toLowerCase().includes(searchitem.toLowerCase())) {
          newlist.push(productData[i]);
        }
      }
      document.getElementById("tbody").innerHTML = null;
      if (newlist.length === 0) {
        var noproducts = document.getElementById("noproducts");
        noproducts.style.display = "block";
      } 
      else {
        if(filterType==="name"){
          document.getElementById("pname").innerText="Product Name (Ascending)"
          document.getElementById("pprice").innerText="Product Price"
            newlist = newlist.slice().sort((a,b)=>a.name.localeCompare(b.name))
        }
        else if(filterType==="nosort"){
        document.getElementById("pname").innerText="Product Name"
        document.getElementById("pprice").innerText="Product Price"

        }
        else if(filterType==="price"){
          document.getElementById("pprice").innerText="Product Price (Low to High)"
          document.getElementById("pprice").innerText="Product Price"
            newlist = newlist.slice().sort((a,b)=>a.price - b.price)
        }
        else if(filterType==="pricedesc"){
          document.getElementById("pprice").innerText="Product Price (High to Low)"
          document.getElementById("pname").innerText="Product Name"
          newlist = newlist.slice().sort((a,b)=>a.price - b.price)
          newlist=newlist.reverse()
      }
      else if(filterType==="namedesc"){
        document.getElementById("pname").innerText="Product Name (Descending)"
        document.getElementById("pprice").innerText="Product Price"
        newlist = newlist.slice().sort((a,b)=>a.name.localeCompare(b.name))
        newlist=newlist.reverse()
      }
        renderList(newlist);
      }
  }
  else{
    newlist=productData;
    document.getElementById("tbody").innerHTML = null;
     
        if(filterType==="name"){
            document.getElementById("pname").innerText="Product Name (Ascending)"
            document.getElementById("pprice").innerText="Product Price"
            newlist = newlist.slice().sort((a,b)=>a.name.localeCompare(b.name))
        }
        else if(filterType==="nosort"){
          document.getElementById("pname").innerText="Product Name"
          document.getElementById("pprice").innerText="Product Price"
  
          }
        else if(filterType==="price"){
            document.getElementById("pname").innerText="Product Name"
            document.getElementById("pprice").innerText="Product Price (Low to High)"
            newlist = newlist.slice().sort((a,b)=>a.price - b.price)
        }
        else if(filterType==="pricedesc"){
          document.getElementById("pname").innerText="Product Name"
          document.getElementById("pprice").innerText="Product Price (High to Low)"
          newlist = newlist.slice().sort((a,b)=>a.price - b.price)
          newlist=newlist.reverse()
      }
      else if(filterType==="namedesc"){
        document.getElementById("pname").innerText=" Product Name (Descending)"
        document.getElementById("pprice").innerText="Product Price"
        newlist = newlist.slice().sort((a,b)=>a.name.localeCompare(b.name))
        newlist=newlist.reverse()
      }
        renderList(newlist);99

  }
};

const setDefaultList = () => {
  const searchitem = document.getElementById("searchinput").value;
  if (searchitem === null || searchitem === "") {
    document.getElementById("tbody").innerHTML = null;
    document.getElementById("pname").innerText="Product Name"
    document.getElementById("pprice").innerText="Product Price"
    var noproducts = document.getElementById("noproducts");
    noproducts.style.display = "none";
    renderList(productData);
  }
};

const renderList = async (dataList) => {
  document.getElementById("products-container").style.visibility = "visible";
  for (let i = 0; i < dataList.length; i++) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    name.innerHTML = dataList[i].name;
    var price = document.createElement("td");
    price.innerHTML = dataList[i].price;
    var desc = document.createElement("td");
    desc.innerHTML = dataList[i].description;
    var imgcell = document.createElement('td')
    var img = document.createElement('img')
    img.src=dataList[i].image_url
    imgcell.appendChild(img)
    row.appendChild(name);
    row.appendChild(desc);
    row.appendChild(price);
    row.appendChild(imgcell)
    document.getElementById("tbody").appendChild(row);
  }
};

const noproducts = () => {
  document.getElementById("noproducts").style.display = "flex";
};
