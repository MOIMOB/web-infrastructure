import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export * from './elements/navigation-bar/index';

export function configure(config: FrameworkConfiguration): void {
    config.globalResources([PLATFORM.moduleName('./elements/navigation-bar/navigation-bar')]);
}
