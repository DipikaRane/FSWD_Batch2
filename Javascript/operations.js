var a=10;
var b=20;
a+b
30
b-a
10
a-b
-10
a*b
200
a/b
0.5
b/a
2
a%b
10
b%a
0

var a="Hii"
var b="Javascript"
a+b //// Concatenation
'HiiJavascript'  //// Concatenation
a-b
NaN     // Not A Number
a/b
NaN
a*b
NaN
a%b
NaN

var a=10
var b="HII"
a+b
'10HII'     //Concatenation

var a="HIII"
var b=10
a+b
'HIII10'

String + String = String 
String + Number = String
Number + String = String
Number + Number = Number

"10"+20+30
'1020'+30
'102030'

10+"20"+30
'1020'+30
'102030'

10+20+"30"
30+"30"
3030

// arithmatic logic
10+20+"30"-1
'3029'

"10"-1
9
"10"*2
20
"20"+2
'202'
// if both sides of opeerator are purely number then it operates a function
// but + operator will concat...
10+20+"30"+1
'30301'

var a="10"
var b="20"
a+b
'1020'
//es5
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30
var a="10.11"
var b="20"
a+b
'10.1120'
parseFloat(a)+parseFloat(b)
30.11

//es6
var a="10"
var b="20"
a+b
Number(a)+Number(b)
30
a+b
'1020'
var a="10"
var b="20"
a+b
'1020'
Number(a)+Number(b)
30
typeof(a)
'string'
typeof(Number(a))
'number'

var a="Delhi124"
var b="123Delhi"
parseInt(a)
parseInt(b)
123
a
'Delhi124'
b
'123Delhi'
parseInt(a)
NaN
parseInt(b)
123
var c="123Delhi123"
parseInt(c)
123