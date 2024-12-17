import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations : [ trigger('toto' ,[
    transition ( '*=>*' ,[
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms',[ animate ( '.9s ease-in' , keyframes ([
    style({opacity: 0, transform: 'translateX(-75%)', offset: 0, backgroundColor: "lightblue",}), 
    style({opacity: .5, transform: 'translateY(35px)', offset: .3,  backgroundColor: "red",}),
    style({opacity: 1, transform: 'translateX(0)', offset: 1,  backgroundColor: "airsuperiorityblue",}), ]))]),{optional: true})
    ]) ])]
})
export class HomeComponent {
  objectifsHome: String[] = ['f','f'];
  nbItemHome: number = 4;
  btnTextHome: string = ""; // Type 'string'
  test: String  = "coucou";

  constructor(private toto: Router, private monTestService: TestServiceService){
      this.test = monTestService.getInfo();
      this.objectifsHome = this.monTestService.objectifs; // Récupérer les objectifs du service
      this.nbItemHome = this.monTestService.nbItems;
  }
  ngOnInit(){
    this.nbItemHome = 0;
  }
  ajoutItem(): void {
    if (this.btnTextHome.trim()) { // Vérifie que l'input n'est pas vide
      this.monTestService.setBtnText(this.btnTextHome);  // Met à jour le texte du bouton dans le service
      this.objectifsHome = [...this.monTestService.ajoutItem()];  // Ajoute l'élément et met à jour la liste
      this.btnTextHome = '';  // Vide l'input après l'ajout
    }  }

  getExplicitClass(): string {
    return (this.btnTextHome === "..." || this.btnTextHome === "") ? 'btn' : 'btnok';
  }

  
}
