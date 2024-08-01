/*
poly is a browser fall back. 
where interviewers are looking to see if you can implement the bind function.
*/

let myname = {
    firstName: 'david',
    lastName: 'yim'
}

let printName = function (hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ', ' + hometown + ', ' + state);
}

// traditional bind method use
let printMyName = printName.bind(myname, 'woodside', 'ny');
printMyName('ny');

// now task is implement own bind method
// lets call it mybind
Function.prototype.mybind = function (...args) {
    let obj = this;
    let params = args.slice(1)
    return function (...t) {
        obj.apply(args[0], [...params, ...t])
    }
}

let printMyName2 = printName.mybind(myname, 'woodside');
printMyName2('ny');