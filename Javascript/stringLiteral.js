var name="Avengers"
var type="Action"
var rating=4.5
var industry="Hollywood"
var date="12-05-2002"

The movie Avengers is an Action Movie from Hollywood released on 12-05-2002 has rating 4.5.

//es5
var out = "The movie "+name+" is an "+type+" Movie from "+industry+" released on "+date+" has rating "+rating+"."

out
'The movie Avengers is an Action Movie from Hollywood released on 12-05-2002 has rating 4.5.'

//es6
var out=`The movie ${name} is an ${type} Movie from ${industry} released on ${date} has rating ${rating}.`
out
'The movie Avengers is an Action Movie from Hollywood released on 12-05-2002 has rating 4.5.'