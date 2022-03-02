import { bindable } from 'aurelia-framework';
import { NavigationBarSettings, NavigationItem } from './navigation-bar-settings';

export class NavigationBar {
    @bindable public settings: NavigationBarSettings;
    @bindable callback: (data) => void;

    public position: string;
    public items: NavigationItem[];
    public activeRoute: number;

    public navigate(event, route: string) {
        const dom = event.currentTarget;
        const rippleDiv = document.createElement('div');
        const domTokenList = rippleDiv.classList;
        domTokenList.add('ripple');
        dom.appendChild(rippleDiv);

        setTimeout(() => {
            dom.removeChild(rippleDiv);
        }, 900);

        this.activeRoute = this.items.findIndex(x => x.route === route);

        this.callback({ data: route });
    }

    bind() {
        this.position = this.settings?.position ? this.settings.position : 'bottom';
        this.items = this.settings?.items ? this.settings.items : [];
        this.activeRoute = 0;
    }
}
