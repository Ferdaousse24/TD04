import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-consult-activite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consult-activite.component.html',
  styleUrl: './consult-activite.component.scss'
})
export class ConsultActiviteComponent {
  param  = "parametre 1";
  param2 = "parametre 2";
  
  constructor(private monActRoute: ActivatedRoute){
    if (monActRoute.snapshot.params['bonjour'] ){
      this.param = monActRoute.snapshot.params['bonjour'];
    }
    if(monActRoute.snapshot.params['salut']){
      this.param2 = monActRoute.snapshot.params['salut'];
    }
  }

}
