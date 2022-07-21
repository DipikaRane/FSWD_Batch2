function orderId(){
    var oid=`TVA${Math.floor(Math.random()*1000)}`
    document.getElementById('eid').value=oid;
}
function validateName(){
    var fname=document.getElementById('name').value;
    if(fname.trim().length==0){
        document.getElementById('nout').innerHTML="Please enter a name";
    }else{
        document.getElementById('nout').innerHTML=" ";
        fname=fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase();
        document.getElementById('name').value=fname;
    }
}
function validatePass(){
    var pwd=document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pwd').innerHTML="Password Too Short"
        }else{
            document.getElementById('pwd').innerHTML="More than 15"
        }
        
    }else{
        document.getElementById('pwd').style.color="green"
        document.getElementById('pwd').innerHTML="Strong Password"
    }
}
function validatecp(){
    var cpwd=document.getElementById('cpassword').value;
    var pwd=document.getElementById('password').value;
    if(cpwd==pwd){
        document.getElementById('cpwd').innerHTML="Password Match";
    }else{
        document.getElementById('cpwd').innerHTML="Password does not Match";
    }
}
function showPassword(){
    var pwd=document.getElementById('password');
    console.log(pwd)
    if(pwd.type=="password"){       
        pwd.type="text"
    }else{
        pwd.type="password"
    }
}