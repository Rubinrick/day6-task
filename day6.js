// 1.a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    getrating(){
        console.log(`
The Title : ${this.title}
Studio : ${this.studio}
Ratings : ${this.rating}`);
    }
}



// 1.b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.


class Movie1{
    constructor(title,studio,rating){
        this.title =title;
        this.studio = studio;
        this.rating = rating || "PG";
    }

    getrating(){
        console.log(`
The Title : ${this.title}
Studio : ${this.studio}
Ratings : ${this.rating}`);
    }
}








// 1.c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class MovieRatings{
    constructor(movies){
        this.movies = movies;
    }

    getPG(){
        const newMovie = [];
        this.movies.forEach(element => {
            if(element === "PG"){
                console.log("");
            }
            else{
                newMovie.push(element);
            }
        });

        return newMovie;
    }
}

const Film1 = new MovieRatings("Seven Samurais","Legend Studios");



const Film2 = new MovieRatings("Jawan", "Khan Productions","PG12");
Film2.getPG();
const Film3 = new MovieRatings("Jailer","Sun Pictures","PG15");

const movieArr = [Film1,Film2,Film3];

// movieArr.getPG();




// 1.d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie2{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    getrating(){
        console.log(`
The Title : ${this.title}
Studio : ${this.studio}
Ratings : ${this.rating}`);
    }
}

const movieName = new Movie2("Casino Royale","Eon Productions","PG­13");
movieName.getrating();
// 2) Circle - class

    // I raised a query for this concept-typescript they didnt take the query 

// 3). Write a “person” class to hold all the details.

class Person{
    constructor(name,age,gender,status,fathername,mothername,sibilings,occupation,experience,degree,percentinclg,passedoutyear){

        this.name = name;
        this.age = age;
        this.gender = gender;
        this.status = status;
        this.fathername = fathername;
        this.mothername = mothername;
        this.sibilings = sibilings;
        this.occupation = occupation;
        this.experience = experience;
        this.degree = degree;
        this.percentinclg = percentinclg;
        this.passedoutyear = passedoutyear;
    }

    getdetails(){
    
        console.log(`
----3)person class----

Name : ${this.name}
Age : ${this.age}
Gender : ${this.gender}
Status : ${this.status}
Fathername : ${this.fathername}
Mothername : ${this.mothername}
Sibilings : ${this.sibilings}
Occupation : ${this.occupation}
Experience : ${this.experience}
Degree : ${this.degree}
Percentage : ${this.percentinclg}
Passed out year : ${this.passedoutyear}`);
    }
};


const Details = new Person("Rubin" , 21, "Male","Single", "Arumugam","Muthu Mari",1,"Intern","4months","B.E-CSE","77.4%",2023);

Details.getdetails();


// 4) write a class to calculate the uber price.


class UberPrice{
    constructor(cartype,distance){
        this.cartype = cartype;
        this.distance = distance;
    }

    getfareDetails(){

        console.log("----4)Uberfare----");
        
        if(this.cartype == "xuv" && this.distance <= 10){
            console.log(`
your fare amount : ${this.distance * 35} , Thank You for using Uber.`);
        }

        else if (this.cartype == "xuv" && this.distance >10){
            console.log(`
your fare amount : ${this.distance * 30}, Thank You for using Uber.`);
        }

        else if (this.cartype == "sedan" && this.distance <= 10){
            console.log(`
Your fare amount : ${this.distance * 25}, Thank You for using Uber.`);
        }

        else if (this.cartype == "sedan" && this.distance >10){
            console.log(`
your fare amount : ${this.distance * 18}, Thank You for using Uber.`);
        }

        else{
            console.log("Please enter correctly");
        }
    }
    
    
};

const UserFare = new UberPrice("sedan",5);

UserFare.getfareDetails();







