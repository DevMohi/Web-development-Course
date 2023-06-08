//common objects 
class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name}, thank you for feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "web team";
  constructor(name, location) {
    //super hocce parent er constructor ke bole
    //Aikane inherit kortese
    super(name, location);
  }

  startSupportSession(time) {
    console.log(`start the support session ar ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = "Web Course Instructor";
  team = "web team";
  tech;

  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }

  developFeature(feature) {
    console.log(`Please develop the ${feature}`);
  }

  startSupportSession(time) {
    console.log(`start the support session ar ${time}`);
  }
  release(version) {
    console.log(`Please relase the version ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "Job PLacement Commandos";
  team = "Job Placement";
  region;

  constructor(name, location, tech) {
    super(name, location);
    this.region = region;
  }

  provideResume(feature) {
    console.log(`Please develop the ${feature}`);
  }

  prepeareStudent(time) {
    console.log(`start the support session ar ${time}`);
  }
  release(version) {
    console.log(`Please relase the version ${version}`);
  }
}

const alia = new Developer("Alia", "Dhaka", "React");
console.log(alia);
alia.provideFeedback();
