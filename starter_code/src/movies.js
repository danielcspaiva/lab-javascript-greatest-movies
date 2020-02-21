// // /* eslint no-restricted-globals: 'off' */

let movies = [
    {
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "duration": "2h 55min",
        "genre": [
          "Crime",
          "Drama"
        ],
        // "rate": 9.2
    },
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather: Part II",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "3h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9
    },
    {
        "title": "Schindler\"s List",
        "year": 1993,
        "director": "Steven Spielberg",
        "duration": "3h 15min",
        "genre": [
          "Biography",
          "Drama",
          "History"
        ],
        "rate": 8.9
      }
]

// // let numbers = [2, 4, 3, 2, 1];
// // Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
    let newArray = [...arr];
    return newArray.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 );
};

// // console.log(orderByYear(movies));
// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
    let arrSteven = [...arr];
    // console.log(arrSteven);
    const arr2 = arrSteven.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))
    return arr2.length;
}


// // console.log(howManyMovies(movies));
// // Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
    let newArray = [...arr];
    // console.log(newArray);
    newArray = newArray.sort((a, b) => (a.title > b.title) ? 1 : -1 );
    let alphabeticArray = [];
    newArray.forEach((movie, idx) => {
        if (idx < 20) {
            alphabeticArray.push(movie.title);
        }
    })
    return alphabeticArray;
}


// console.log(orderAlphabetically(movies));
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {
    let notRated = 0;
    let sum = arr.reduce((acc, movie) => {
        if (!movie.hasOwnProperty('rate')) {
            notRated += 1;
            // console.log(notRated);
            return acc;
        }
        return acc + movie.rate;
    }, 0);
    // console.log(sum);
    if (arr.length === 0) {
        return 0;
    }
     num = (sum / (arr.length - notRated)).toFixed(2);
     return parseInt(num)
}
  

 console.log(ratesAverage(movies));



// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
