import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <div class="content">
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['app-layout.component.scss']
})
export class AppLayoutComponent {

}
