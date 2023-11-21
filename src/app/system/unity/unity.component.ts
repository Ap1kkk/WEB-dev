import { AfterViewInit, Component, OnInit } from '@angular/core';

import { integrate } from './unityIntegration'

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit, AfterViewInit {
    gameInstance: any;
    progress = 0;
    isReady = false;
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    ngAfterViewInit(): void {
      integrate();
    }
}
