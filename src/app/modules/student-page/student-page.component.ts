import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  constructor(
    public $student: StudentService,
  ) { }
  @Input() student: Student|undefined;

  ngOnInit(): void {
  }


  public scoreColor: string = 'average';




}
