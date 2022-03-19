import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';
  form: FormGroup
  result
  ngOnInit(): void {
    this.createForm();
    console.log(this.form.value)
    console.log(this.form, "form")
    console.log(this.formControls, "formControls")
  }

  constructor(private fb: FormBuilder) {

  }

  createForm() {
    this.form = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      addresses: this.addressForm(),//assigning a new formGroup addressForm . Now in ui you can fetch entire address form using addresses
      contacts: this.fb.array([this.contactForm()])

    })
  }

  addressForm() {
    return this.fb.group({
      address1: [''],
      address2: [''],
      country: ['', Validators.required],
      state: ['', Validators.required]
    })
  }

  contactForm() {
    return this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  get addresses() {
    return this.form.get('addresses') as FormGroup
  }
  get contacts() {
    return this.form.get('contacts') as FormArray
  }
  //returning controls of main  form
  get formControls() {
    return this.form.controls;
  }
  get addressFormControl() {
    return this.form.controls.addresses['controls'];
  }

  addNewContacts() {
    this.contacts.push(this.contactForm())
  }

  removeContact(i) {
    this.contacts.removeAt(i)
  }

  onSubmit() {

    this.result = this.form.value
  }
}
