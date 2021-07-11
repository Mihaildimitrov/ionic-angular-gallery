import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss'],
})
export class QAndAComponent implements OnInit {

  public question_1: boolean = false;
  public question_2: boolean = false;
  public question_3: boolean = false;
  public question_4: boolean = false;
  public question_5: boolean = false;

  constructor() { }

  ngOnInit() {}

}
