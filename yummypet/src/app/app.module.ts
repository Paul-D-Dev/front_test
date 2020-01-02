import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { PetsComponent } from './pages/pets/pets.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    ListPetsComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
