import { Component, OnInit, Inject } from '@angular/core';
import { ConstantService, appConstants } from 'src/app/core/services/constant.service';
import { Random5, Random10, GeneratorFactory, GeneratorService } from 'src/app/core/services/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    GeneratorService,
    {provide: ConstantService, useValue: appConstants},
    {provide: Random5, useFactory: GeneratorFactory(5), deps: [GeneratorService]},
    {provide: Random10, useFactory: GeneratorFactory(10), deps: [GeneratorService]}
  ]
})
export class AboutComponent implements OnInit {

  constructor(public constants: ConstantService,
    @Inject(Random5) public random5: string,
    @Inject(Random10) public random10: string,) { }

  ngOnInit() {
  }

}
