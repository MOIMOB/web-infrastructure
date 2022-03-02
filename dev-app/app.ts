import { NavigationBarSettings } from 'elements/navigation-bar/navigation-bar-settings';

export class App {
    public settings: NavigationBarSettings = {
        position: 'bottom',
        items: [
            { route: 'explore', title: 'Explore', iconName: 'telescope' },
            { route: 'favorite', title: 'Favorites', iconName: 'heart' },
            { route: 'create', title: 'Create', iconName: 'create' },
            { route: 'settings', title: 'Settings', iconName: 'settings' },
            { route: 'home', title: 'Home', iconName: 'home' },
        ],
    };

    someHandler = (route: string) => {
        console.log('Route returned: ' + route);
    };
}
