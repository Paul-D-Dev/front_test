import { ApiService } from './../../shared/services/api.service';
import { Pet } from './../../shared/models/pet';
import { Component, OnInit } from '@angular/core';
import { Pets } from '../../shared/models/pets';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  listPets: Pet[] = [
    {
      id : 1,
      pseudo : 'Sullie',
      breed : 'Beagle'
    },
    {
      id : 1,
      pseudo : 'Sullie',
      breed : 'Beagle'
    },
    {
      id : 1,
      pseudo : 'Sullie',
      breed : 'Beagle'
    },
    {
      id : 1,
      pseudo : 'Sullie',
      breed : 'Beagle'
    },
    {
      id : 1,
      pseudo : 'Sullie',
      breed : 'Beagle'
    }
  ];

  pets;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPets().subscribe((data) => {
      this.pets = data.collection;
      console.log(this.pets);
  });

}
}
