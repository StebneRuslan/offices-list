import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const MenuHoverTitleStateTrigger = trigger('menuTitleTrigger', [
  state('active', style({ color: 'rgb(255, 255, 255)' })),
  state('inactive', style({ color: 'rgb(83, 104, 126)' })),
  transition('active => inactive', [
    animate('0.5s'),
  ]),
  transition('inactive => active', [
    animate('0.2s'),
  ]),
]);

export const MenuHoverContentStateTrigger = trigger('menuContentTrigger', [
  state('active', style({ width: '100%' })),
  state('inactive', style({ width: '0%' })),
  transition('active => inactive', [
    group([
      animate('0.5s'),
    ])
  ]),
  transition('inactive => active', [
    animate('0.2s'),
    style({ width: '100%' }),
    animate('0.2s', style({ width: '80%' })),
    animate('0.2s', style({ width: '100%' }))
  ]),
]);

