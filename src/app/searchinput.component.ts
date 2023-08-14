import { Component } from "@angular/core";
import { SharedService } from "./shared.service";

@Component({
    selector: "app-sibling1",
    template: `
    <p>
      Child-1:
      <input
        placeholder="Search text .."
        (input)="passData($event)"
      />
      <br />
      <br />
      Selected Data: {{ selectedUser }}
    </p>
  `
})
export class SearchInputComponent {
    // Declarations
    selectedUser: Object;

    constructor(private shared: SharedService) {
        this.selectedUser = this.shared.passSelectedCast;
    }

    passData(data: any) {
        this.shared.changeState(data);
    }
}
