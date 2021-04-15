//STEP 1

// let movies = ['Idiocracy', 'The Matrix', 'Nightmare Before Christmas', 'The Silence of the Lambs', 'Jaws'];

// console.log(movies[1]);

//STEP 2

// let movies = new Array(5);
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';

// console.log(movies[0]);

//STEP 3

// let movies = new Array(5);
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';

// movies.splice(2, 0, 'Ever After: A Cinderalla Story');

// console.log(movies.length);

//STEP 4

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';

// delete movies[0];

// console.log(movies);


//STEP 5

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';
// movies[5] = 'Zoolander';
// movies[6] = 'Gremlins';

// for (let movie in movies) {
//     console.log(movies[movie]);
// }


//STEP 6

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';
// movies[5] = 'Zoolander';
// movies[6] = 'Gremlins';

// for (let i of movies) {
//     console.log(i);
// }



//STEP 7

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';
// movies[5] = 'Zoolander';
// movies[6] = 'Gremlins';

// movies.sort();

// for (let i of movies) {
//     console.log(i);
// }


//STEP 8

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';
// movies[5] = 'Zoolander';
// movies[6] = 'Gremlins';

// let leastFavMovies = ['National Treasure', 'Night at the Museum', 'Meet the Parents'];

// console.log(`Movies I like:\n\n${movies.splice(0, 3).join('\n')}\n...\n\nMovies I regret watching:\n\n${leastFavMovies.join('\n')}\n...`);



//STEP 9

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';
// movies[5] = 'Zoolander';
// movies[6] = 'Gremlins';

// let leastFavMovies = ['National Treasure', 'Night at the Museum', 'Meet the Parents'];

// let allMovies = movies.concat(leastFavMovies);
// allMovies.sort();
// allMovies.reverse();
// console.log(allMovies);

//STEP 10

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';
// movies[5] = 'Zoolander';
// movies[6] = 'Gremlins';

// let leastFavMovies = ['National Treasure', 'Night at the Museum', 'Meet the Parents'];

// let allMovies = movies.concat(leastFavMovies);
// console.log(allMovies.pop());

//STEP 11

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';
// movies[5] = 'Zoolander';
// movies[6] = 'Gremlins';

// let leastFavMovies = ['National Treasure', 'Night at the Museum', 'Meet the Parents'];

// let allMovies = movies.concat(leastFavMovies);
// console.log(allMovies.shift());


//STEP 12

// let movies = [];
// movies[0] = 'Idiocracy';
// movies[1] = 'The Matrix';
// movies[2] = 'Nightmare Before Christmas';
// movies[3] = 'The Silence of the Lambs';
// movies[4] = 'Jaws';
// movies[5] = 'Zoolander';
// movies[6] = 'Gremlins';

// let leastFavMovies = ['National Treasure', 'Night at the Museum', 'Meet the Parents'];

// let allMovies = movies.concat(leastFavMovies);

// allMovies[allMovies.indexOf('National Treasure')] = 'Blade Runner 2049';
// allMovies[allMovies.indexOf('Night at the Museum')] = 'Legally Blonde';
// allMovies[allMovies.indexOf('Meet the Parents')] = 'Hocus Pocus';

// console.log(allMovies);


//STEP 13

// let movies = [['Jaws', 1], ['Idiocracy', 2], ['Nightmare Before Christmas', 3], ['Zoolander', 4], ['The Silence of the Lambs', 5]];

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].filter(movie => typeof movie === 'string'));
// }


//STEP 14

// let employees = [];
// employees[0] = 'Harry';
// employees[1] = 'Elizabeth';
// employees[2] = 'Charles';
// employees[3] = 'Phillip';
// employees[4] = 'Katherine';

// let showEmployee = function(emp) {
//     console.log(`Employees:\n\n`);
//     for (let i in emp) {
//     console.log(emp[i]);
//     }
// }

// showEmployee(employees);

//STEP 15

// let myArray = [58, 'Blueberries', 0, false, null, '', 74, 36, 'Happiness', 'Summer', true];

// let filterValues = arr => arr.filter(x => Boolean(x));

// console.log(filterValues(myArray));


//STEP 16

// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let random = function(arr) {
//     console.log(arr[Math.floor(Math.random()*arr.length)]);
// }

// random(myNumbers);


//STEP 17

// let nums = [55, 22, 36, 101, 3, 99, 87];

// let largeNum = function(arr) {
//     arr.sort((x, y) => x - y);
//     console.log(arr[arr.length - 1]);
// }

// largeNum(nums);