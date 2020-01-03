import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';
import { Pet } from '../../shared/models/pet';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  @Input() listPets;

  constructor() { }

  ngOnInit() {

  }

  delete(pet, i) {
    if (pet.resource.id === this.listPets[i].resource.id) {
      this.listPets.splice(i, 1);
    } else {
      console.log('KO');
    }
  }
}


