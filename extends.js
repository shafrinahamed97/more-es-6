

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

    provideFeedBack() {
        console.log(`${this.name} thank for your feedback.`)
    }
}

class Developer {
    name;
    designation = 'Web Course Instructor'
    team = 'Web Tem'
    location;
    constructor(name, location, tech) {
        this.name = name;
        this.location = location;
        this.tech = tech;


    }
    developFeature(feature) {
        console.log(`Please develop the ${feature} `)
    }
    release(version) {
        console.log(`Please release the ${version}`)
    }

    provideFeedBack() {
        console.log(`${this.name} thank for your feedback.`)
    }
}

class JobPlacement {
    name;
    designation = 'Job Placement Commandos'
    team = 'Job Placement '
    location;
    constructor(name, location, tech) {
        this.name = name;
        this.location = location;
        this.tech = tech;


    }
    provideResume(feature) {
        console.log(`Please develop the ${feature} `)
    }
    prepareResume(version) {
        console.log(`Please release the ${version}`)
    }

    provideFeedBack() {
        console.log(`${this.name} thank for your feedback.`)
    }
}