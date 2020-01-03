
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pet } from '../../shared/models/pet';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  @Output() addNewPet = new EventEmitter<Pet>();

petForm = this.fb.group({
  resource : this.fb.group({
    avatar: this.fb.group({
      thumb : ['']
    }),
    breed: this.fb.group({
      lib : ['', Validators.required],
    }),
    id: [''],
    pseudo: ['', Validators.required],
  })
});

get pseudo() {
  return this.petForm.get('pseudo');
}

get lib() {
  return this.petForm.get('breed.lib');
}


constructor(private fb: FormBuilder) { }

ngOnInit() {
  }

addPet() {
  this.petForm.patchValue({
    resource : {
      avatar : {
        thumb : 'https://camo.githubusercontent.com/b7782a6b1207d77f17af78cd994155de45142bea/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f796d702f756e6b6e6f776e5f3136302e6a7067'
      },
      id : Math.floor(Math.random() * (599999 - 500000 + 1)) + 500000
    }
  });
  this.addNewPet.emit(this.petForm.value);

  }
}
