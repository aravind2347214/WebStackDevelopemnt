let nameflag=null;
let passwordflag=null;
let dobflag=null;
let cpasswordflag=null;
let emailflag=null;

const submitHandler =(e)=>{
    nameValidate();
    emailValidate();
    dobValidate();
    passwordValidate();
    const password=document.getElementById("password").value;
    const cpassword=document.getElementById("c_password").value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    if(passwordRegex.test(password)){
        passwordflag=true
        if(!(password===cpassword)){
        document.getElementById("cpass-error").innerText="Password does not match"
        document.getElementById("cpass-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("cpass-error").innerText=""
            document.getElementById("cpass-error").style.backgroundColor="transparent"
        },5000);
        }
        else{
            cpasswordflag=true
        }
    }


   

        // validation Sucesss;
        if(cpasswordflag===true && passwordflag ===true&& nameflag===true && emailflag===true && dobflag===true){
            document.getElementById("success").style.display="block"
            setTimeout(() => {
                document.getElementById("success").style.display="none"
            },5000);

            resetHandler();
        }
    }






const resetHandler =(e)=>{
    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
    document.getElementById("dob").value=null;
    document.getElementById("password").value=null;
    document.getElementById("c_password").value=null;
    flag=null;
    // document.getElementById("success").style.display="none"

}

const getAge=(dob)=>{
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }    
    return age;

}




const nameValidate =(e)=>{
    const name= document.getElementById("name").value;
    const nameRegex= /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    if(name===""|| name===" " ||name===null){
        nameflag=false
        document.getElementById("name-error").innerText="Name cannot be empty"
        document.getElementById("name-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("name-error").innerText=""
            document.getElementById("name-error").style.backgroundColor="transparent"
        },5000)
    }
    else if(!nameRegex.test(name)){
        nameflag=false
        document.getElementById("name-error").innerText="Only alphabets and spaces are allowed"
        document.getElementById("name-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("name-error").innerText=""
            document.getElementById("name-error").style.backgroundColor="transparent"
        },5000);

    }
    else{
        nameflag=true
    }    
}

const emailValidate =()=>{
    const email= document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email)){
        document.getElementById("email-error").innerText="Invalid Email"
        document.getElementById("email-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        emailflag=false
        setTimeout(() => {
            document.getElementById("email-error").innerText=""
            document.getElementById("email-error").style.backgroundColor="transparent"
        },5000);
    }
    else{
        emailflag=true;
    }   
}

const dobValidate =(e)=>{
    const dob= document.getElementById("dob").value;
    const dobRegex=/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/ 
    if(dob===null || dob==="" || dobRegex.test(dob)|| new Date(dob)>new Date||(getAge(dob)<18)){
        document.getElementById("dob-error").innerText=`${getAge(dob)<18?"Under 18":"Invalid Age"}`
        document.getElementById("dob-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        dobflag=false
        setTimeout(() => {
            document.getElementById("dob-error").innerText=""
            document.getElementById("dob-error").style.backgroundColor="transparent"
        },5000);   
    }
    else{
        dobflag=true;
    }
    
}

const passwordValidate =(e)=>{
    const password= document.getElementById("password").value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    if(passwordRegex.test(password)){
        passwordflag=true
    }
    else if(!passwordRegex.test(password)){
        passwordflag=false
        document.getElementById("pass-error").innerText="1 Digit 1 ,Uppercase 1 ,Lowercase 1 ,Special Charecter and of length 8"
        document.getElementById("pass-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("pass-error").innerText=""
            document.getElementById("pass-error").style.backgroundColor="transparent"
        },5000);
        } 
}

const showPassword=()=>{
    document.getElementById("password").type="text"
    document.getElementById("closeeye").style.display="none";
    document.getElementById("openeye").style.display="block";
}

const hidePassword=()=>{
    document.getElementById("password").type="password"
    document.getElementById("openeye").style.display="none";
    document.getElementById("closeeye").style.display="block";
}
