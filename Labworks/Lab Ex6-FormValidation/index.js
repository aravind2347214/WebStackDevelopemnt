let flag=null;

const submitHandler =(e)=>{
    const name= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const dob= document.getElementById("dob").value;
    const password= document.getElementById("password").value;
    const cpassword= document.getElementById("c_password").value;


    const dobRegex=/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/ 
    if(dob===null || dob==="" || dobRegex.test(dob)|| new Date(dob)>new Date||(getAge(dob)<18)){
        document.getElementById("dob-error").innerText=`${getAge(dob)<18?"Under 18":"Invalid Age"}`
        document.getElementById("dob-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        flag=false
        setTimeout(() => {
            document.getElementById("dob-error").innerText=""
            document.getElementById("dob-error").style.backgroundColor="transparent"
        },5000);   
    }
    else{
        flag=true;
    }
    
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email)){
        document.getElementById("email-error").innerText="Invalid Email"
        document.getElementById("email-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        flag=false
        setTimeout(() => {
            document.getElementById("email-error").innerText=""
            document.getElementById("email-error").style.backgroundColor="transparent"
        },5000);
    }
    else{
        flag=true;
    }
  

    

    const nameRegex= /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    // console.log(nameRegex.test(name));
    if(name===""|| name===" " ||name===null){
        flag=false
        document.getElementById("name-error").innerText="Name cannot be empty"
        document.getElementById("name-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("name-error").innerText=""
            document.getElementById("name-error").style.backgroundColor="transparent"
        },5000);

    }
    else if(!nameRegex.test(name)){
        flag=false
        document.getElementById("name-error").innerText="Only alphabets and spaces are allowed"
        document.getElementById("name-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("name-error").innerText=""
            document.getElementById("name-error").style.backgroundColor="transparent"
        },5000);

    }
    else{
        flag=true
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    if(passwordRegex.test(password)){
        flag=false
        if(!(password===cpassword)){
        document.getElementById("cpass-error").innerText="Password does not match"
        document.getElementById("cpass-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("cpass-error").innerText=""
            document.getElementById("cpass-error").style.backgroundColor="transparent"
        },5000);
        }
        else{
            flag=true
        }
    }
    else if(!passwordRegex.test(password)){
        flag=false
        document.getElementById("pass-error").innerText="1 Digit 1 ,Uppercase 1 ,Lowercase 1 ,Special Charecter and of length 8"
        document.getElementById("pass-error").style.backgroundColor="rgba(255, 169, 169, 0.2)"
        setTimeout(() => {
            document.getElementById("pass-error").innerText=""
            document.getElementById("pass-error").style.backgroundColor="transparent"
        },5000);
        }
        // console.log(flag);
        if(flag===true && flag!=null){
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