// Core modules
const fs = require( "fs" );


// Third party Modules
const slugify = require( "slugify" );


// Local Modules
// We've used object destructuring to get our greet function
const { greet } = require( "./modules/greet.js" );



/* ------------ Let's now use all our modules ------------ */

//  Let's use the 'fs' Core Module to read a line.txt file and store it in a variable

const line = fs.readFileSync( "./files/line.txt", { encoding: "utf-8" } );

// Let's create a User class
class User {
    constructor ( name, line ) {
        this.name = name;
        this.line = line
        // Let's use the Third-Party Module `slugify` to create a URL from the name
        this.url = `https://github.com/${ slugify( name, "" ) }`;
    }

    // Let's now use `geet()` function that we required from the Local Module
    sayHi () {
        return greet( this.name, this.line, this.url );
    }
}

// Creating user1 an instance of User class
const user1 = new User( "abdo achhoubi", line );

// Testing our code
console.log( user1.sayHi() );

// Output:

/*
    Hi, I'm abdo achhoubi.
    Learning Node.js while drinking Atay is amazing!
    You can visit me on: https://github.com/abdoachhoubi
*/