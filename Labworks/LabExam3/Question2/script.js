window.onload=()=>{

    var nameflag=null
    var emailflag=null
    var cmtflag = null

    const nameValidate=()=>{

    const name= document.getElementById("name").value;
    const nameRegex= /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    if(name.length<3){
        nameflag=false
        document.getElementById("n-err").style.visibility="visible"
        document.getElementById("n-err").innerText="Minimum of 3 alphabets"
        document.getElementById("n-err").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("n-err").style.visibility="hidden"
        },5000)
    }
    if(name===""|| name===" " ||name===null){
        nameflag=false
        document.getElementById("n-err").style.visibility="visible"
        document.getElementById("n-err").innerText="Name cannot be empty"
        document.getElementById("n-err").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("n-err").style.visibility="hidden"
        },5000)
    }
    else if(!nameRegex.test(name)){
        nameflag=false
        document.getElementById("n-err").style.visibility="visible"
        document.getElementById("n-err").innerText="Only alphabets and spaces are allowed"
        document.getElementById("n-err").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("n-err").style.visibility="hidden"
        },3000);

    }
    else{
        nameflag=true
    }





    }


    const commentValidate=()=>{
        var comments=document.getElementById("comments").value
        if (comments==""){
            document.getElementById("c-err").style.visibility="visible";
            document.getElementById("c-err").innerText="Please enter your message!"
            cmtflag= false
        }
        else{
            cmtflag = true
            document.getElementById("c-err").style.visibility="hidden";
        

        }


    }

    const emailValidate=()=>{
        const email= document.getElementById("email").value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailRegex.test(email)){
            document.getElementById("e-err").style.visibility="visible"
            document.getElementById("e-err").innerText="Invalid Email"
            document.getElementById("e-err").style.backgroundColor="rgba(255, 169, 169, 0.2)"
            emailflag=false
            setTimeout(() => {
                document.getElementById("e-err").style.visibility="hidden"
            },5000);
        }
        else{
            emailflag=true;
        } 

    }


    document.getElementById("name").addEventListener('input',nameValidate)
    document.getElementById("email").addEventListener('input',emailValidate)

    var submitbutton = document.getElementById("submitButton")

    

    submitbutton.addEventListener('click',(e)=>{
        e.preventDefault()
        nameValidate()
        emailValidate()
        commentValidate()



        if(nameflag&&emailflag){
            document.getElementById("success").style.visibility="visible"
            setTimeout(() => {
                document.getElementById("e-err").style.visibility="hidden"
                document.getElementById("name").value=null;
                document.getElementById("email").value=null;

            },5000);

        }



    })




}