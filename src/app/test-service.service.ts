import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  varTest = "Salut, service marche !";
  objectifs: String[] = [];
  nbItems: number = 4;
  btnText: String = "";
  navigate: any;

  
  constructor() {}
  getInfo(): String{
    return this.varTest;
  }

  ajoutItem(): String[] {
    this.objectifs.push(this.btnText);
    this.nbItems = this.objectifs.length;
    setTimeout(()=> {this.navigate(['about'])}, 3000);
    return this.objectifs;
  }

  setBtnText(text: string): void {
    this.btnText = text; // Mise à jour de la propriété btnText
  }
}
