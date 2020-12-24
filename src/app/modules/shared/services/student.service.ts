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
  // public toggle: boolean = true;
  public page: EPage = EPage.AdminPage;
  public averageScore: number = 0;

  get EPage(): typeof EPage {
    return EPage;
  }

public setAverageScore() {
    this.averageScore = this.students.reduce( 
      (total, student) => total + student.score
      ,0
    )/this.students.length;
}

  public addStudent(name: string, score: number) {
    this.students.push(new Student(name, score));
    this.setAverageScore();
    console.log(this.averageScore);
  }

  // public setStudent(name: string, score: number) {
  //   this.name = name;
  //   this.score = score;
  //   this.toggle = false;
  //   this.page = EPage.StudentPage;
  // }


  public isAdminPage() {
    this.page = EPage.AdminPage;
  }




}



