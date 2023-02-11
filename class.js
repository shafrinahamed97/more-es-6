// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'Web Tem'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;


    }
    startSupportSession(time) {
        console.log(`start the support session session at ${time} PM`)
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`)
    }
}

const amir = new Instructor('amir', 'Dhaka');
console.log(amir);
amir.startSupportSession('9.00')
amir.createQuiz('60')

const solaiman = new Instructor('Shakib Khan', 'Noakhali');
console.log(solaiman);