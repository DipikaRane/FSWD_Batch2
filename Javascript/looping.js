Use of looping

//to print the series
//to iterate over data

//for loop
for(i=0;i<5;i++){
    console.log(i)
}

var city=['Delhi', 'Chennai', 'Tirupati', 'Ooty', 'Banglore', 'Gondiya', 'Wardha', 'Nagpur', 'Kolkata', 'Chandigarh']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Delhi
VM85:3 Chennai
VM85:3 Tirupati
VM85:3 Ooty
VM85:3 Banglore
VM85:3 Gondiya
VM85:3 Wardha
VM85:3 Nagpur
VM85:3 Kolkata
VM85:3 Chandigarh

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
for(i=0;i<movie.length;i++){
    console.log(movie[i].name,movie[i].type)
}
Singham Action
Golmal Comedy