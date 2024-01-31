import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {ModalComponent} from "./layout/modal/modal.component";
import {FormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ModalComponent, FormsModule, NgxMaskDirective, NgOptimizedImage],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
