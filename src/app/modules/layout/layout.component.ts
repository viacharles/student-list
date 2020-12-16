import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { EPage } from '../../utilities/enums/page.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public $student:StudentService,
  ) { }



  get EPage(): typeof EPage {
    return EPage;
  }

  ngOnInit(): void {
  }

}
