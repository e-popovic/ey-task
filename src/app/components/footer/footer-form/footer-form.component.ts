import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-footer-form',
  templateUrl: './footer-form.component.html',
  styleUrls: ['./footer-form.component.css']
})
export class FooterFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          pet: ['', Validators.required],
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
      });
  }

  onSubmit() {
      this.submitted = true;

      // stop if validation is not successful
      if (this.registerForm.invalid) {
          return;
      }

      // display message on success
      // alert('Login successful!');

      this.dialog.open(DialogElementsExampleDialog);
  }

}

@Component({
  selector: 'app-success-dialog',
  templateUrl: 'success-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogElementsExampleDialog {}
