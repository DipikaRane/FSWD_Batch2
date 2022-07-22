//es6

var urlCake="https://mycakestudio.herokuapp.com/cakes"

async function getCakes(){
    var response=await fetch(urlCake);
    var data=await response.json();
    data.map((item)=>{
        var element=document.createElement('h1'); //create a p tag
        var TextNode=document.createTextNode(item.cake_name)  //create a text node
        element.appendChild(TextNode)
        element.value=item._id;
        document.getElementById('cakeName').appendChild(element)
    })
}