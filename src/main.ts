import 'reflect-metadata';
import 'rxjs';

import { Component } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";

import { CircleComponent, RectComponent } from "shared-lib/core";

@Component({
    selector: 'shared-lib-test',
    template: `
       <shared-lib-circle size="260"></shared-lib-circle>
       <shared-lib-rect size="200"></shared-lib-rect>
    `,
    directives: [
        CircleComponent,
        RectComponent
    ],
    providers: [
        
    ]
})
class AppComponent {
    
}

bootstrap(AppComponent);