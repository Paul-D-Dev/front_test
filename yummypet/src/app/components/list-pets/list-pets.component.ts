import { Pets } from './../../shared/models/pets';
import { ApiService } from './../../shared/services/api.service';
import { Pet } from './../../shared/models/pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  listPets;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPets().subscribe((data) => {
      this.listPets = data.collection;
  });

}
}
