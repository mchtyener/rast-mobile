import {AfterViewInit, Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {pageNavigation} from "../../core/model/pageNavigation";
import {socialMediaNavigation} from "../../core/model/socialMediaNavigation";
import {navbarLink, socialMedia} from "../../core/data/data";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgIf,
        NgClass
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, AfterViewInit {

    router: pageNavigation[] = navbarLink

    socialMediaNavigation: socialMediaNavigation[] = socialMedia
    innerWidth!: number
    mobilIcon = false;
    onOffMenu: boolean = false;
    showbtn: boolean = true;


    ngOnInit() {

    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.innerWidth = window.innerWidth;
        this.mobilController()
    }

    ngAfterViewInit() {
        this.mobilController()
    }

    constructor() {

    }


    mobilController() {
        this.innerWidth = window.innerWidth;

        if (this.innerWidth < 768) {
            this.mobilIcon = true;
        } else {
            this.mobilIcon = false;
        }
    }

    menuOnOff() {
        this.showbtn = !this.showbtn
    }

}
