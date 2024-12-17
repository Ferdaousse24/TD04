import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  param  = "truc"
constructor(private monActRoute: ActivatedRoute){
  if (monActRoute.snapshot.params['toto'] ){
    this.param = monActRoute.snapshot.params['toto']
  }
}



}
