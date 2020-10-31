/* ------------------------------------ 1 ----------------------------------- */

class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  printCalculateValue() {
    console.log(`Value: \$${(this.price / this.length).toFixed(2)}/hour`);
  }

  printSummary() {
    console.log(`
    Title: ${this.title}
    Length: ${this.length} hours
    Price: \$${this.price}
    `);
  }
}

const htmlCourse = new Course("HTML course", 6, 12.99);
const jsCourse = new Course("JS course", 15, 21.99);

class PracticalCourse extends Course {
  constructor(title, length, price, exercises) {
    super(title, length, price);
    this.exercises = exercises;
  }
}

const angularCourse = new PracticalCourse('Angular course', 19, 24.99, 6);



// output
console.log(htmlCourse, jsCourse, angularCourse);

htmlCourse.printSummary();
htmlCourse.printCalculateValue();

jsCourse.printSummary();
jsCourse.printCalculateValue();

angularCourse.printSummary();
angularCourse.printCalculateValue();