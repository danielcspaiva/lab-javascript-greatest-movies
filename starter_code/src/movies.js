// /* eslint no-restricted-globals: 'off' */


// COMENTAR A VARIAVEL MOVIES PARA RODAR OS TESTES NA JASMINE
// let movies = [ 
//   {
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Steven Spielberg",
//     "duration": "2h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": ''
//   },
//   {
//     "title": "The Godfather",
//     "year": 1972,
//     "director": "Francis Ford Coppola",
//     "duration": "2h 55min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.2
//   },
//   {
//     "title": "The Godfather: Part II",
//     "year": 1974,
//     "director": "Francis Ford Coppola",
//     "duration": "3h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9
//   },
//   {
//     "title": "The Dark Knight",
//     "year": 2008,
//     "director": "Christopher Nolan",
//     "duration": "32min",
//     "genre": [
//       "Action",
//       "Crime",
//       "Thriller"
//     ],
//     "rate": 9
//   }
// ]


// // Iteration 1: Ordering by year - Order by year, ascending (in growing order)
console.log('Iteration 1');

const orderByYear = (arr) => {
    let newArray = [...arr];
    return newArray.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 );
};

console.log(orderByYear(movies));

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
console.log('Iteration 2');

const howManyMovies = (arr) => {
    let arrSteven = [...arr];
    // console.log(arrSteven);
    const arr2 = arrSteven.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))
    return arr2.length;
}

console.log(howManyMovies(movies));

// // // Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

console.log('Iteration 3');

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


console.log(orderAlphabetically(movies));

// // Iteration 4: All rates average - Get the average of all rates with 2 decimals

console.log('Iteration 4');

const ratesAverage = (arr) => {
    let sum = arr.reduce((acc, movie) => {
        if (!movie.hasOwnProperty('rate') || movie.rate === '' || movie.rate === undefined || movie.rate === null) {
            return acc;
        } else {
          return acc + movie.rate 
        }
    }, 0);
    if (arr.length === 0) {
        return 0;
    }
     return +(sum / (arr.length)).toFixed(2);
}
  

console.log(ratesAverage(movies));

// // Iteration 5: Drama movies - Get the average of Drama Movies

console.log('Iteration 5');

const dramaMoviesRate = (arr) => {
  let dramaCount = 0; // variável para contar filmes de genero drama
  let dramaRate = 0; //variável para contar o rate dos filmes de drama
  arr.forEach((element) => {
     element.genre.forEach(genre => {
      if( genre == 'Drama'){
        dramaCount++; //se o genero do filme for drama vai adicionar a variavel dramaCount
        dramaRate += element.rate; // quando encontrar os filmes de genero drama vai adicionar o rate desses filmes a variavel dramaRate
        }
      })
    })
    if (dramaCount == 0){
      return 0; //se não existe vai retornar 0
    } else {
      return +(dramaRate / dramaCount).toFixed(2); // se existe vai retornar a média do rate com 2 casas decimais
    }
  }

console.log(dramaMoviesRate(movies));

// // Iteration 6: Time Format - Turn duration of the movies from hours to minutes

console.log('Iteration 6');


const turnHoursToMinutes = (arr) => {
  let newArr = [...arr]; //para criar uma cópia do array original
  const arreglo = newArr.map((element) => {
    let elem = {...element} //para criar cópia do elemento dentro do objeto
    let hour = elem.duration; // definindo a variável hora como a duration dentro do arreglo "movies"
    let minutos = 0; //criando uma variável para adicionar os minutos
    if (hour.indexOf('h') >= 0) { //para o case de filmes com horas ('h' na string)
      hour = hour.split('h'); //dividindo a duração para obter somente a hora
      if( hour[1] !== '' && hour[1] !== undefined ){ // o index 0 de hour (hour[0]) é para acessar a hora e o index 1 (hour[1]) é para acessar os minutos, este if é caso não haja nenhum minuto, seja hora redonda (por ex. 2h)
        minutos = hour[1];
        minutos = minutos.split('min');//este split é para tirar a palavra "min" depois dos minutos
        minutos = minutos[0];//minutos[0] acessa somente aos numeros do minuto
      }
      hour = hour[0];
      hour = +hour*60;//multiplicando para obter o valor da hora em minutos
      elem.duration = hour + +minutos;//asignando o total do valor de hora em minutos mais os minutos para a duração do element no array "movies"
    }
    else { // Para o caso de filmes sem 'h' (que não estavam sendo splitados no 'h')
      minutos = hour.split('min');
      elem.duration = +minutos[0];
    }
    return elem;
  })
  return arreglo;
}
turnHoursToMinutes(movies)

// // BONUS Iteration: Best yearly rate average - Best yearly rate average

console.log('Bonus Iteration 1');

const bestYearAvg = (arr) => {
  if (arr.length == 0 ) {//definindo que se o array está vazio retorne null
   return null;
  }
  let newObj = {} //variável para somar valores em objetos
  let totalObj = {} //variável para somar valores em objetos

  arr.forEach( movie => {
    if( newObj[movie.year] == undefined ){
      newObj[movie.year] = 0 //definindo uma variável "newObj" para receber e guardar o ano dos filmes
      totalObj[movie.year] = 0 //variável "totalObj" para guardar o total de filmes de cada ano
    }
    newObj[movie.year] = newObj[movie.year] + movie.rate //asignando o rate de cada filme para a variável "newObj"
    totalObj[movie.year]++
  })
  const keys = Object.keys(newObj) //object.keys para acessar as chaves que temos no objeto (ex. title, year,rate ...)
  let maxYear= 0
  let max = 0
  for( let i = 0; i < keys.length; i++ ){
    newObj[keys[i]] = newObj[keys[i]] / totalObj[keys[i]] //esse for é para fazer a média dividindo o valor do rate pelo valor total de quantos filmes existe por ano
  }
  for( let i = 0; i < keys.length; i++ ){ //esse for é para asignar o maior rate e de que ano é esse rate a cada variável
    if( newObj[keys[i]] > max ){
      max = newObj[keys[i]]
      maxYear = keys[i]
    }
  }
  return `The best year was ${maxYear} with an average rate of ${max}`
}

console.log(bestYearAvg(movies));