import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  template: `
  <div style="display: flex;">
  <app-drawflow></app-drawflow>
    </div>
  `,
  providers: [SharedService]
})
export class AppComponent { }
