import { EAdminAuth } from "src/app/utilities/enums/admin.enums"

export class Student {
    constructor(
        public name: string,
        public score: number,
    ) { 
        if (this.score > 96) {
            this.scoreClass = 'A+';
        }
        else if (this.score > 89 &&  this.score <= 96) {
            this.scoreClass = 'A'
        }
        else if (this.score > 79 && this.score <= 89) {
            this.scoreClass = 'B'
        }
        else if (this.score > 69 && this.score <= 79) {
            this.scoreClass = 'C'
        }
        else if (this.score > 60 && this.score <= 69) {
            this.scoreClass = 'D'
        }
        else {
            this.scoreClass = 'D-'
        }
    }
    public scoreClass: string = '-'
}

export class Admin {
    constructor(
        public name:string,
        public auth:EAdminAuth,
    ) { }
   public addStudent (list: Student[], student: Student) {
        list.push(student);
      }
}

export class Class {
    constructor(
        public id: string,
        public students:Student[],
        public admins:Admin[],
    ) { }
    
}

// classA.admins[0].addStudent(classA.students, new Student())