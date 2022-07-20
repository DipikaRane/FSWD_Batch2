//if I have some data like this
var movieName="Singham"
var movieType="Action"
var movieRating=4.5

var movieName="Golmal"
var movieType="Comedy"
var movieRating=4.9

//solution for this is object

var movie={
    name:"Singham",
    type:"Action",
    rating:4.5
}
movie
{name: 'Singham', type: 'Action', rating: 4.5}name: "Singham"rating: 4.5type: "Action"[[Prototype]]: Object
movie.actor="Ajay Devgan"
'Ajay Devgan'
movie
{name: 'Singham', type: 'Action', rating: 4.5, actor: 'Ajay Devgan'}
movie.actress="Kajal Agarwal"
'Kajal Agarwal'
movie
{name: 'Singham', type: 'Action', rating: 4.5, actor: 'Ajay Devgan', actress: 'Kajal Agarwal'}
delete movie.rating
true
movie
{name: 'Singham', type: 'Action', actor: 'Ajay Devgan', actress: 'Kajal Agarwal'}

movie.name="Singham Returns"
'Singham Returns'
movie
{name: 'Singham Returns', type: 'Action', actor: 'Ajay Devgan', actress: 'Kajal Agarwal'}

var movie=[                 //JSON -- JavaScript object notation
    {
        name:"Singham",
        type:"Action",
        rating:4.5
    },
    {
        name:"Golmal",
        type:"Comedy",
        rating:4.9
    }
]
movie
(2) [{…}, {…}]0: {name: 'Singham', type: 'Action', rating: 4.5}1: {name: 'Golmal', type: 'Comedy', rating: 4.9}length: 2[[Prototype]]: Array(0)
movie[0].name
'Singham'
movie[1].name
'Golmal'
movie[1].type
'Comedy'