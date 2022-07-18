//conditional statement 
// if, if else , nested if else
-- conditional statements are used when there needs to solve a condition that
"if this happens then do this else do that"
// if
if(condition){
statements
}

//if-else
if(condition){
statement
}else{
    statements
}

//nested if-else
if(condition){
    statements
}else if(condition){
    statements
}else if(condition){
    statements
}else{
    statements
}

var a=200;
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`#=${a} is odd`)
}

VM220:5 200 is even

var a=201;
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
VM220:5 201 is odd

var myname="Deepika";
if(myname=="Ankita"){
    console.log(`Hi ${myname} you are not admin`)
}else if(myname=="Girish"){
    console.log(`Hi ${myname} you are user`)
}else{
    console.log(`Hi ${myname} you are admin`)
}
Hi Deepika you are admin
undefined
var myname="Ankita";
if(myname=="Ankita"){
    console.log(`Hi ${myname} you are not admin`)
}else if(myname=="Girish"){
    console.log(`Hi ${myname} you are user`)
}else{
    console.log(`Hi ${myname} you are admin`)
}
VM255:3 Hi Ankita you are not admin
undefined
var myname="Girish";
if(myname=="Ankita"){
    console.log(`Hi ${myname} you are not admin`)
}else if(myname=="Girish"){
    console.log(`Hi ${myname} you are user`)
}else{
    console.log(`Hi ${myname} you are admin`)
}
VM285:5 Hi Girish you are user
undefined
var myname="Goury";
if(myname=="Ankita"){
    console.log(`Hi ${myname} you are not admin`)
}else if(myname=="Girish"){
    console.log(`Hi ${myname} you are user`)
}else{
    console.log(`Hi ${myname} you are admin`)
}
VM309:7 Hi Goury you are admin

//ternary operator
syntax : condition ? execute this if condition is true : execute this if condition is false


'Bye'
var a=9
a>10? "Hii":"Bye"
'Bye'
var a=90
a>10? "Hii":"Bye"
'Hii'

var a=20
a>10 ? a+1 : a-1
21
var a=9
a>10 ? a+1 : a-1
8