import { Component, OnInit, OnDestroy } from "@angular/core";
import { SharedService } from "./shared.service";
import { IData } from "./data.interface";
import { Observable } from "rxjs";
import { Meta } from "@angular/platform-browser";
import Drawflow from "drawflow";
// import styleDrawflow from "drawflow/dist/drawflow.min.css";

@Component({
    selector: "app-sibling2",
    template: `
    <div style="border-left :1px solid grey;padding-left:20px;">
      <h4>
        <b>Input Text: {{ searchtext }}</b>
      </h4>
      <div id="drawflow">test</div>
    </div>
  `
})
export class UserListComponent implements OnInit {
    // Declaration,
    userTable: any[] = [];
    actualData: IData[] = [];
    searchtext: string = "";

    constructor(private shared: SharedService, private meta: Meta) { }

    ngOnInit(): void {
        var id: any = document.getElementById("drawflow");
        const editor = new Drawflow(id);
        editor.start();
    }
}
