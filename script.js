var nm_alert = document.getElementById("nm_alert");
var em_alert = document.getElementById("em_alert");
var pwd_alert = document.getElementById("pwd_alert");
var cmf_alert = document.getElementById("cmf_alert");


var form = document.getElementById("form");
var nm = document.getElementById("name");
var email = document.getElementById("email");
var pwd = document.getElementById("password");
var cmf_pwd = document.getElementById("cmf_password");

var confirm_all = document.querySelectorAll('input');

// confirm_all.forEach(function confirm_cases(confirm_data){
// confirm_data.classList.add();
// })

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    name_validate();
})

const name_validate = ()=> {
    var nmVal = nm.value.trim();
    var emailVal = email.value.trim();
    var pwdVal = pwd.value.trim();
    var cmf_passwordVal = cmf_pwd.value.trim();
    var alert_icon = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>'

    var symbol_position = emailVal.indexOf('@');
    var dot_position = emailVal.lastIndexOf('.');

    if(nmVal === ''){
        nm_alert.innerHTML=`${alert_icon} Enter Username`;
    }else if(nmVal.length <= 5){
        nm_alert.innerHTML=`${alert_icon} Enter Min 5 Characters`;
    }else{
        nm_alert.innerText='';
    }
    
    if(emailVal === ''){
        em_alert.innerHTML=`${alert_icon} Enter Email`;
    }else if(symbol_position<1 || dot_position<symbol_position+2 || dot_position+2>=emailVal.length){
        em_alert.innerHTML=`${alert_icon} Enter Correct Email`
    }else{
        em_alert.innerText='';
    }

    if(pwdVal === ''){
        pwd_alert.innerHTML=`${alert_icon} Enter Password`
    }else if(pwdVal.length <= 8){
        pwd_alert.innerHTML=`${alert_icon} Enter Min 8 Characters`;
    }else{
        pwd_alert.innerText='';
    }

    if(cmf_passwordVal === ''){
        cmf_alert.innerHTML=`${alert_icon} Enter Password Again`;
    }else if(cmf_passwordVal!==pwdVal ){
        cmf_alert.innerHTML = `${alert_icon} Enter Correct Password`
    }else{
        cmf_alert.innerText='';
    }

    
}

