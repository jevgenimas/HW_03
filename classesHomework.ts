// Task 2.1: Class with fields only

// Declaring variables

class Person {
  firstName: string;
  lastName: string;
}

// Create instance 1

const person1 = new Person();

// Set values person 1

person1.firstName = 'Jevgeni';
person1.lastName = 'Massalov';

// Create instance 2

const person2 = new Person();

// Set values person 2

person2.firstName = 'Daniil';
person2.lastName = 'Borodin';

// Outputting the results to the console

console.log('Person 1 first name: ', person1.firstName);
console.log('Person 1 last name: ', person1.lastName);
console.log('Person 2 first name: ', person2.firstName);
console.log('Person 2 last name: ', person2.lastName);

// Task 2.2: Class with a constructor

// Declaring variables

class Book {
  title: string;
  author: string;
  pages: number;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// Create an instance with values

const book1 = new Book('The Hobbit', 'Tolkien', 354);

// Outputting the results to the console

console.log('Book 1 title: ', book1.title);
console.log('Book 1 author: ', book1.author);
console.log('Book 1 number of pages: ', book1.pages);
