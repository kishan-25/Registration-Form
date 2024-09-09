function validateForm(event){
    event.preventDefault();

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmPassword").value;
    const errorMessage=document.getElementById("error-message");

    if(name.trim()==='' || email.trim()===''||password.trim()===''||confirmPassword.trim()===''){
        errorMessage.innerText="All fields are required";
        return;
    }
    if(password !==confirmPassword){
        errorMessage.innerText="Password do not match";
        return;
    }
    else{
        if(!isValidLength(password)){
            errorMessage.innerText="Password length must be 8 to 12 characters";
            return ;
        }
        if(!(containsAlpha(password)&&containsDigit(password)&&containsSpecial(password))){
            errorMessage.innerText="Password must contain at least one alphabet, one digit and one special character";
            return ;
        }


        
    }

    document.getElementById("registrationForm").onsubmit();
}
function containsAlpha(pwd){
    for(let i=0;i<pwd.length;i++){
        if(pwd.charAt(i)>='a'&&pwd.charAt(i)<='z'||pwd.charAt(i)>='A'&&pwd.charAt(i)<='Z')
            return true;
    }
    return false;
}
function containsDigit(pwd){
    for(let i=0;i<pwd.length;i++){
        if(pwd.charAt(i)>='0'&&pwd.charAt(i)<='9')
            return true;
    }
    return false;
}
function containsSpecial(pwd){
    for(let i=0;i<pwd.length;i++){
        if(pwd.charAt(i)>='a'&&pwd.charAt(i)<='z'||pwd.charAt(i)>='A'&&pwd.charAt(i)<='Z'||pwd.charAt(i)>='0'&&pwd.charAt(i)<='9'){

        }
        else{
            return true;
        }     
    }
    alert("false");
    return false;
}
function isValidLength(pwd){
    if(pwd.length>=8 && pwd.length<=12)
        return true;
    else
        return false;
}