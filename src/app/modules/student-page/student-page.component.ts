import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  constructor(
    public $student:StudentService,
  ) { }

  ngOnInit(): void {
  }

}
