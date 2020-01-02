import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  listPets = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPets().subscribe((data) => {
      this.listPets = data.collection;
    });
  }

  delete(pet, i) {
    if (pet.resource.id === this.listPets[i].resource.id) {
      this.listPets.splice(i, 1);
    } else {
      console.log('KO');
    }
  }
}


