import { Injectable } from '@angular/core';
import { EPage } from 'src/app/utilities/enums/page.enum';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  public name: string = '';
  public score: number = 0;
  public class: string = '-';
  public students: Student[] = [];
  public toggle: boolean = true;
  public page: EPage= EPage.AdminPage;

  public addStudent(name: string, score: number) {
    this.students.push(new Student(name, score));
  }

  public setStudent(name: string, score: number) {
    this.name = name;
    this.score = score;
    this.toggle = false;
    this.page = EPage.StudentPage;
  }

  
  public setAdmin() {
    // this.toggle = true;

  }


}



