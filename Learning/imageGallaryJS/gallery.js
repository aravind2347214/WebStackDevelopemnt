window.onload=()=>{
    var i1=document.querySelector('.i1');
    var i2=document.querySelector('.i2');
    var i3=document.querySelector('.i3');
    var i4=document.querySelector('.i4');
    var i5=document.querySelector('.i5');
    var i6=document.querySelector('.i6');
    var modal = document.getElementById("modal")
    var modalImage= document.getElementById('modalimage')

    i1.addEventListener('click',(e)=>{
        var  currImage=e?.srcElement?.attributes?.src?.nodeValue
        console.log(e?.srcElement?.attributes?.src?.nodeValue);
        showModal(currImage); 
    })
    i2.addEventListener('click',(e)=>{
        var  currImage=e?.srcElement?.attributes?.src?.nodeValue
        console.log(e?.srcElement?.attributes?.src?.nodeValue);
        showModal(currImage); 
    
    })
    i2.addEventListener('click',(e)=>{
        var  currImage=e?.srcElement?.attributes?.src?.nodeValue
        console.log(e?.srcElement?.attributes?.src?.nodeValue);
        showModal(currImage); 

    })
    i3.addEventListener('click',(e)=>{
        var  currImage=e?.srcElement?.attributes?.src?.nodeValue
        console.log(e?.srcElement?.attributes?.src?.nodeValue);
        showModal(currImage); 
    })
    i4.addEventListener('click',(e)=>{
        var  currImage=e?.srcElement?.attributes?.src?.nodeValue
        console.log(e?.srcElement?.attributes?.src?.nodeValue);
        showModal(currImage); 
    })
    i5.addEventListener('click',(e)=>{
        var  currImage=e?.srcElement?.attributes?.src?.nodeValue
        console.log(e?.srcElement?.attributes?.src?.nodeValue);
        showModal(currImage);  
    })
    i6.addEventListener('click',(e)=>{
        var  currImage=e?.srcElement?.attributes?.src?.nodeValue
        console.log(e?.srcElement?.attributes?.src?.nodeValue);
        showModal(currImage);  
    })

    const showModal=(currImage)=>{
        modal.style.display="flex"
        modalImage.src=currImage
        console.log(currImage);
    }

    modal.addEventListener('click',()=>{
        modal.style.display="none"
    })

    modalImage.addEventListener('click',(e)=>{
        e.stopPropagation();
    })

}