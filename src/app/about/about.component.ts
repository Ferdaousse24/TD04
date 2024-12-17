import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  param  = "truc";
  test: String  = "coucou";

constructor(private monActRoute: ActivatedRoute, private monTestService : TestServiceService){
  if (monActRoute.snapshot.params['toto'] ){
    this.param = monActRoute.snapshot.params['toto']
  }

  this.test = monTestService.getInfo();

}



}
