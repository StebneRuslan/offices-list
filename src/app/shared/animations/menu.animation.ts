import { animate, group, state, style, transition, trigger } from '@angular/animations';

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

