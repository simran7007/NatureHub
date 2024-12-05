import { Component } from '@angular/core';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent {
  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    pinCode: '',
    city: '',
    state: '',
    country: '',
    address: '',
  };
  formFields = [
    { label: 'First Name', placeholder: 'Enter your First Name', name: 'firstName' },
    { label: 'Last Name', placeholder: 'Enter your Last Name', name: 'lastName' },
    { label: 'Phone Number', placeholder: 'Enter your Number', name: 'phoneNumber' },
    { label: 'Pin Code', placeholder: 'Enter your Pin Code', name: 'pinCode' },
    { label: 'City', placeholder: 'Enter your City', name: 'city' },
    { label: 'State', placeholder: 'Enter your State', name: 'state' },
    { label: 'Country', placeholder: 'Enter your Country', name: 'country' },
    { label: 'Address', placeholder: 'Enter your Address', name: 'address' },
  ];

  onSubmit() {
    localStorage.setItem('addressFormData', JSON.stringify(this.formData));
    alert('Form data saved to local storage!');
  }
}