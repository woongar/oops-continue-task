


class Laibery {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
        console.log(user);
    }
    
}


class User {
    constructor(fName, lName, adress) {
        this.fName = fName;
        this.lName = lName;
        this.adress = adress;
        this.books = [];
    }

    
    addBook(bookName) {
        this.books.push(bookName);
        console.log(bookName);
    }
}

class Book {
    constructor(bookName) {
        this.bookName = bookName;   
        console.log(bookName);
    }
}






let laibery1 = new Laibery();
let laibery2 = new Laibery();
let laibery3 = new Laibery();


let user1 = new User('Yosi', 'Cohen', 'Ramat-Gan');
let user2 = new User('Ori', 'Levi', 'Bat-Yam');
let user3 = new User('Gabi', 'Rotmand', 'Haifa');

let book1 = new Book('The House');
let book2 = new Book('The Beach');
let book3 = new Book('The Sand');
let book4 = new Book('The sky');

laibery2.addUser(user3);
laibery1.addUser(user1);
laibery3.addUser(user2);

user1.addBook(book1);
user1.addBook(book3);
user3.addBook(book4);

class WeeklyReport {
    constructor(report) {
        this.report = report;
        this.members = [];
    }
    addNewMember(member) {
        this.members.push(member);
    }
}
let report1 = new WeeklyReport("report1");
let report2 = new WeeklyReport("report2");
let report3 = new WeeklyReport("report3");

report1.addNewMember(user2);
report2.addNewMember(user1);
report3.addNewMember(user3);

console.log(report1);
console.log(report2);


laibery2.addUser(user2);
user2.addBook(book2);
console.log(JSON.stringify(laibery2));

laibery2.addUser(user1);
user2.addBook(book1);
console.log(JSON.stringify(laibery1));
