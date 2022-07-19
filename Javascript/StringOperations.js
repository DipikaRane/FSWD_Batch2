//toUpperCase()
var name='techvanto'
name.toUpperCase()
'TECHVANTO'

//toLowerCase()
var name='TECHVANTO'
name.toLowerCase()
'techvanto'

name.length
9

var a="hdfklfhcaghsagHDFADJAYFDASJGDA"
a.length
30

var name="techvanto"
name[0].toUpperCase()
'T'
var name="techvanto"
name[8].toUpperCase()
'O'

var name="    TECHVANTO   "
name.length
16
name.trim()
'TECHVANTO'
var name="    TECHVANTO  !  "
name.trim()
'TECHVANTO  !'
name.trim().length
12

// JS is case insensitive
var name1="techvanto"
var name2="Techvanto"
name1==name2
false
name1.toLowerCase()==name2.toLowerCase()
tru

//charAt()
var city="amrITsar"
city.charAt(0)
'a'
city.charAt(5)
's'
city.charAt(3)
'I'
city.charAt(3).toLowerCase()
'i'
city.charAt(4).toLowerCase()
't'

//slice() --- it slices/ cuts the particular character from the string
var city="amrITsar"
city.slice(1)
'mrITsar'
city.slice(1,4)
'mrI'
city.slice(-1)
'r'
city.slice(-4)
'Tsar'

//to convert string in format by using charAt, slice and toLowerCase() and toUpperCase()
city.charAt(0).toUpperCase()
'A'
city.slice(1)
'mrITsar'
city.slice(1).toLowerCase()
'mritsar'
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() //concat
'Amritsar'

//replace() -- it replaces the string , word, characters etc.
 var a="I am learning in Techvanto"
 a.replace(/learning/,'teaching')
 'I am teaching in Techvanto'

 var a="Techvanto I am learning in Techvanto"
 a.replace(/Techvanto/,'LPU')
'LPU I am learning in Techvanto'

 var a="Techvanto I am Techvanto learning in Techvanto"
 a.replace(/Techvanto/,'LPU')
'LPU I am Techvanto learning in Techvanto'

var a="Techvanto I am Techvanto learning in Techvanto"
a.replace(/Techvanto/g,'LPU')       // g means global that replace every similar word
'LPU I am LPU learning in LPU'

var name='   TECHVANTO  !  '
name.replace(/ /g,'')

//split()
var url="G:/Techvanto/Batch2/CSS/Listing.html"
var out=url.split('/')
out
(5) ['G:', 'Techvanto', 'Batch2', 'CSS', 'Listing.html']
var url="G:/Techvanto/Batch2/CSS/Listing.html"
var out=url.split('.')
out
(2) ['G:/Techvanto/Batch2/CSS/Listing', 'html']

var url="G:/Techvanto/Batch2/CSS/Listing.html"
var out=url.split('/')
out
['G:/Techvanto/Batch2/CSS/Listing', 'html']
out[out.length-1]
'html'
out[out.length-2]
'G:/Techvanto/Batch2/CSS/Listing'

var a='Javascript is a language'
undefined
a.split(' ')
(4) ['Javascript', 'is', 'a', 'language']
a.split(' ')[0]
'Javascript'
var name=a.split(' ')[0]
undefined
name
'Javascript'
var out=name.split('')
undefined
out
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

//use of toString()
out.toString()
'J,a,v,a,s,c,r,i,p,t'
out.toString().replace(/,/g,'')
'Javascript'

var a=09325098
a.toString()
'9325098'

var a=90325098
a.toString()
'90325098'
a.toString().slice(0,-1)
'9032509'
a.toString().slice(0,-4)
'9032'