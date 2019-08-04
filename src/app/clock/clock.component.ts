import { Component } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.less']
})
export class ClockComponent {
    public hours = 0;
    public minutes = 0;
    public secounds = 0;

    constructor() {
        this.getDate();
    }

    public getDate(): void {
        const date = new Date(Date.now());

        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.secounds = date.getSeconds();
    }
}
