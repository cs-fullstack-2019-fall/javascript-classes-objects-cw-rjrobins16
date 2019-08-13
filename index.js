//### Problem 1:



//Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. 
    //Create a function that prints all properties. Create an object of the class and use the function.
class GitHubRepository {
    constructor(userName, fileName, descriptionOfRepository,code) {
    this.userName= userName;
    this.fileName= fileName;
    this.descriptionOfRepository=descriptionOfRepository;
    this.code=code;
}
    printClass() {
        alert(this.userName);
        alert(this.fileName);
        alert(this.descriptionOfRepository);
        alert(this.code);

    }
}

let myClass = new GitHubRepository("rjrobins16","classes","classwork","code");

myClass.printClass();


//### Problem 2:
//Create a Movie class with the following properties: movieName, rating, and yearReleased. 
    //Create a method to change the rating and another one to change the yearReleased properties. 
// Create an object of the class and use the two methods you created.


class Movie {
    constructor(movieName, rating, yearReleased){
        this.movieName= movieName;
        this.rating =rating;
        this.yearReleased= yearReleased;
    }

    changeRating(rating){
        this.rating = rating;
        
    }
    
    changeYearReleased(year){
        this.yearReleased = year;

    }
}

let myMovie = new Movie("Legally Blonde","4 stars","2002");

myMovie.changeRating("3 stars");
console.log(myMovie.rating);

let hisMovie = new Movie("Players Club","3 stars","1999");

hisMovie.changeYearReleased("1999");
console.log(hisMovie.yearReleased);

