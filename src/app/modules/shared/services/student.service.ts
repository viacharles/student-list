import { EPage } from 'src/app/utilities/enums/page.enum';
import { Admin, Class, Student } from './../models/student.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {
  }

  public students: Student[] = [];
  public classes: Class[] = [
    new Class('classA', [new Student('萬汰', 100)], [new Admin('總管Ａ', 1), new Admin('管理員Ａ', 0)]),
    new Class('classB', [new Student('千尋', 80)], [new Admin('總管Ｂ', 1), new Admin('管理員B', 0)]),
  ];
  public currentClass: Class|undefined;
  public page: EPage = EPage.default;

  public addCurrentStudent(name: string, score: number) {
    this.currentClass?.admins[0].addStudent(
      this.currentClass?.students,
      new Student(name, score)
    );
  }
}
