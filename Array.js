// Started Array 

// var a = [54, 423, 13, 435, 12, 5325, 123]

// console.log(a[5]);

/* There are so many thing's to do in the Array when I want to take some important and they are 
found with the i found the array which i know the array. */

// Normal Functions

function Fun(parameters){
    // code

    return 'something' + parameters
}

// Arrow Functions

const Func = (parameters) => {
    // code

    return 'something' + parameters
}

// const Func = (parameters) => return 'something' + parameters

// Creating an Array
// const Arr = ['Apple','Potato','Banana','Tomato','Water-Melon','Green-Chilli','Orange','Onion'];

// Arr.forEach()

// Arr.forEach((Arr)=>{
//     console.log(Arr[2] + ' :- 1');
// });

// Map Array

// const Force = Arr.map((items)=>'Banana');

// console.log(Force);

// const company = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

// const d = company.pop['Bloomberg']

// console.log(company)
// console.log(d);

//OTP Genrator

/* function otp() {
    let otp = ""
    otp = Math.floor(Math.random() * 9000 + 1000)
    return otp
}
console.log('otp: ',otp()); */

//Filter Method

const movies = [
    {
      title: "Inception",
      genre: "Science-Fiction",
      releaseDate: "2010"
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      releaseDate: "1994"
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      releaseDate: "2008"
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      releaseDate: "1994"
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      releaseDate: "1994"
    },
    {
      title: "The Matrix",
      genre: "Science-Fiction",
      releaseDate: "1999"
    },
    {
      title: "Fight Club",
      genre: "Drama",
      releaseDate: "1999"
    },
    {
      title: "The Godfather",
      genre: "Crime",
      releaseDate: "1972"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      genre: "Fantasy",
      releaseDate: "2003"
    },
    {
      title: "Interstellar",
      genre: "Science-Fiction",
      releaseDate: "2001"
    }
  ];

// const myMovies = movies.filter( (movies) => {
//     return movies.genre === 'Science-Fiction';
// })  

// console.log(myMovies);

// const myMovies = movies.map( (mv) => {
//     return mv.releaseDate + 2
// })

// console.log(myMovies);