import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(
    public $student:StudentService,
  ) { }

  ngOnInit(): void {
  }

}
