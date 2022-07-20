function calc(opt){
    var a=document.getElementById('first').value;
    var b=document.getElementById('second').value;
    var output=document.getElementsByClassName('output')[0];

    if(a.trim().length>0 && b.trim().length>0){
        a=a.replace(/ /g,'')
        b=b.replace(/ /g,'')

        if(isNaN(a) || isNaN(b)){
            out="Please Enter valid number";
        }
        else{
            if(opt=="Add"){
                out=Number(a)+Number(b);
                console.log(out)
                out=`Sum of two numbers is ${out}`
            }
            else{
                if(opt=="Sub"){
                    out=Number(a)-Number(b);
                    console.log(out)
                    out=`Substraction of two numbers is ${out}`
                }
                else{
                    if(opt=="times"){
                        out=Number(a)*Number(b);
                    out=`Multiplication of two numbers is ${out}`
                    }
                    else{
                        if(opt=="divide"){
                            out=Number(a)/Number(b);
                         out=`Division of two numbers is ${out}`
                        }
                        else{
                            out=Number(a)%Number(b);
                            out=`Modulus of two numbers is ${out}`
                        }
                    }
                    
                }
            }
        }
    }
    else{
        out="Please Enter value";
    }
    output.innerText=out
}

// function clearAll(){
//     var c="output"
//     docuement.getElementById('first').value=" ";
//     docuement.getElementById('second').value=" ";
//     document.getElementsByClassName('output')[0].innerText=`${c}`
// }