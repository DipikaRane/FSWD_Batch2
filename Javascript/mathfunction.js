//Math Function
//--- Math.random()
Math.random()
0.28840577518944466
Math.random()
0.7349988096490299
Math.random()
0.7388743501409212

Math.random()*10
4.430995510788809
Math.random()*100
96.01666003095077
Math.random()*1000
139.44895894597443
Math.random()*10000
5212.014108302061

//--Math.floor(number)
Math.floor(10.1)
10
Math.floor(24.6516)
24

//--Math.ceil(number)
Math.ceil(10.1)
11
Math.ceil(10.224)
11

Math.round(10.5)
11
Math.round(10.3)
10
Math.round(10.4)
10
Math.round(10.5)
11
Math.round(10.10)
10

Math.floor(Math.random()*10)
9
Math.floor(Math.random()*10)
8
Math.floor(Math.random()*10)
1
Math.floor(Math.random()*10)
1
Math.floor(Math.random()*100)
98
Math.floor(Math.random()*1000)
844

function orderId(){
    var oid=`TVA${Math.floor(Math.random()*1000)}`
    document.getElementById('oid').value=oid;
}