import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  public loading: boolean = true;
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  public send() {
    console.log(this.form.value);

  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      topic: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
    this.loading = false;
  }

}
