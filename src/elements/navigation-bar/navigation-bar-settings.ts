export class NavigationBarSettings {
    public position: 'top' | 'bottom';
    public items: NavigationItem[];
}

export class NavigationItem {
    title: string;
    route: string;
    iconName: string;
}
