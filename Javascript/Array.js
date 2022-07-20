//Array -- collection of homogeneous data/dataypes

var a=['a','b','c','d','e','f','g','h','i'] // array of string
var b=[1,2,3,4,5,6,7]       // array of numbers
var c=[true,false,false,true,true]      // array of booleans

//in JavaScript
var d=['a','b','c',1,2,3,4,5,true,false,true] // array of string,numbers and booleans

var city=["Delhi","Mumbai","Chennai","Nagpur","Kolkata","Chandigarh"]
city.length
6
typeof(city)
'object'
city[0]
'Delhi'

city[3]
'Nagpur'

city[city.length-1]
'Chandigarh'

var city=["Delhi","Mumbai","Chennai","Nagpur","Kolkata","Chandigarh"]
//push() - to add the object/data
city.push("Ranchi")
7
city
(7) ['Delhi', 'Mumbai', 'Chennai', 'Nagpur', 'Kolkata', 'Chandigarh', 'Ranchi']
city.unshift("Hyderabad")
8
city
(8) ['Hyderabad', 'Delhi', 'Mumbai', 'Chennai', 'Nagpur', 'Kolkata', 'Chandigarh', 'Ranchi']
city.pop()
'Ranchi'
city.pop(1)
'Chandigarh'
city
(6) ['Hyderabad', 'Delhi', 'Mumbai', 'Chennai', 'Nagpur', 'Kolkata']
city.pop(3)
'Kolkata'
city
(5) ['Hyderabad', 'Delhi', 'Mumbai', 'Chennai', 'Nagpur']

push() //-- add object at end of array
pop()  //-- removes object from end of array
unshift() //add object at start of array
shift() //--removes object from start

//slice and splice on Array
var city=["Delhi","Mumbai","Chennai","Nagpur","Kolkata","Chandigarh"]
city.slice(1)
(5) ['Mumbai', 'Chennai', 'Nagpur', 'Kolkata', 'Chandigarh']
var city=["Delhi","Mumbai","Chennai","Nagpur","Kolkata","Chandigarh"]
city.slice(2,5)

arrayName.splice(start,deleteCount,array)
(3) ['Chennai', 'Nagpur', 'Kolkata']
city.splice(3,0,"Banglore")

city
(7) ['Delhi', 'Mumbai', 'Chennai', 'Banglore', 'Nagpur', 'Kolkata', 'Chandigarh']
city.splice(3,0,"Tirupati","Ooty")

city
(9) ['Delhi', 'Mumbai', 'Chennai', 'Tirupati', 'Ooty', 'Banglore', 'Nagpur', 'Kolkata', 'Chandigarh']
city.splice(6,0,"Gondiya","Wardha")

city
(11) ['Delhi', 'Mumbai', 'Chennai', 'Tirupati', 'Ooty', 'Banglore', 'Gondiya', 'Wardha', 'Nagpur', 'Kolkata', 'Chandigarh']

city.splice(1,1)
[0]
city
(10) ['Delhi', 'Chennai', 'Tirupati', 'Ooty', 'Banglore', 'Gondiya', 'Wardha', 'Nagpur', 'Kolkata', 'Chandigarh']
city.splice(1,1,"Mumbai")
['Chennai']
city
(10) ['Delhi', 'Mumbai', 'Tirupati', 'Ooty', 'Banglore', 'Gondiya', 'Wardha', 'Nagpur', 'Kolkata', 'Chandigarh']

//use of concat in array
var a=[1,2,3,4,5]
var b=[1,'c','d',6]
a+b                     //this will prove wrong
'1,2,3,4,51,c,d,6'
a.concat(b)
(9) [1, 2, 3, 4, 5, 1, 'c', 'd', 6]

//sort()
var city=["Delhi","Mumbai","Chennai","Nagpur","Kolkata","Chandigarh"]
city.sort()
(6) ['Chandigarh', 'Chennai', 'Delhi', 'Kolkata', 'Mumbai', 'Nagpur']
Array.isArray(city)
true
var a=64891
undefined
Array.isArray(a)
false

//Multidimenssional Array
var studentData=[['John',23],["Kiv",22],["Donald",21]]

let student1=['John',23]
let student2=["Kiv",22]
let student3=["Donald",21]

var studentData=[student1,student2,student3]
studentData
(3) [Array(2), Array(2), Array(2)]
(2) ['John', 23]
(2) ['Kiv', 22]
(2) ['Donald', 21]