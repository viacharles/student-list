import { EPage } from 'src/app/utilities/enums/page.enum';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    public $student: StudentService,
  ) { }

  @Output() emit: EventEmitter<Student> = new EventEmitter();

  get EPage(): typeof EPage {
    return EPage;
  }

  ngOnInit(): void {
  }

  public isStudentPage(student: Student) {
    this.emit.emit(student);
    this.$student.page = EPage.StudentPage;
    this.$student.setAverageScore();
  }

}
