// API calling is the exchange of data
var urlCake="https://mycakestudio.herokuapp.com/cakes"      //declare an url

//here we use method to call an API and the promise to get response.
//Fetch is a method and .then is a promise
function getCakes(){
    fetch(urlCake,{method:'GET'})
    .then((response)=>response.json())
    .then((data)=>{
        for(i=0;i<data.length;i++){
            console.log(data[i])
            var element=document.createElement('h1'); //create a p tag
            var TextNode=document.createTextNode(data[i].cake_name)  //create a text node
            element.appendChild(TextNode)
            document.getElementById('cakeName').appendChild(element)
        }
    })
}