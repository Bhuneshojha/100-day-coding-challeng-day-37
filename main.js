"use strict";
//          100 days of coding challenge ( DAY 37 )
Object.defineProperty(exports, "__esModule", { value: true });
// Question 01
// --Write an if statement that logs "Good Morning" if the current time is before 12 PM.
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
// ---This simple check helps us greet users appropriately based on the time of day.
// --It's morning if before 12 PM
// Question 02
// --Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "Fail";
    }
}
console.log(assignGrade(85)); // Outputs: B
console.log(assignGrade(45)); // Outputs: F
// Question 03 
// This function categorizes a person's age group
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(11)); // Outputs: child
console.log(categorizeAge(16)); // Outputs: teenager
console.log(categorizeAge(30)); // Outputs: adult
