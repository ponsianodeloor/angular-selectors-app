import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css'
})
export class SelectorPageComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      regions: ['', [Validators.required]],
      countries: ['', [Validators.required]],
      borders: ['', [Validators.required]]
    });

  }

}
