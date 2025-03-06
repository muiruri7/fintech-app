import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field'
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dateOfRegistration: [new Date().toISOString(), Validators.required],
      customerType: ['Individual', Validators.required],
      profilePicture: ['']
    });
  }

  submitForm(): void {
    if (this.customerForm.valid) {
      this.customerService.addCustomer(this.customerForm.value);
      this.router.navigate(['/customers']);
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.customerForm.patchValue({ profilePicture: reader.result as string });
      reader.readAsDataURL(file);
    }
  }
}
