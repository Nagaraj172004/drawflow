import { AfterViewInit, Component } from '@angular/core';
import Drawflow from 'drawflow';

@Component({
  selector: 'app-drawflow',
  templateUrl: './drawflow.component.html',
  styleUrls: ['./drawflow.component.css']
})
export class DrawflowComponent implements AfterViewInit {

  editor!: any;

  ngAfterViewInit() {
    const drawFlowHtmlElement = <HTMLElement>document.getElementById('drawflow');
    if(drawFlowHtmlElement) {
      this.editor = new Drawflow(drawFlowHtmlElement);

      this.editor.start();

      const data = {
        name: ''
      };

      this.editor.addNode('foo', 1, 1, 100, 200, 'foo', data, 'Foo');
      this.editor.addNode('bar', 1, 1, 400, 100, 'bar', data, 'Bar A');
      this.editor.addNode('bar', 1, 1, 400, 300, 'bar', data, 'Bar B');

      this.editor.addConnection(1, 2, "output_1", "input_1");
      this.editor.addConnection(1, 3, "output_1", "input_1");

    }

  }

}
