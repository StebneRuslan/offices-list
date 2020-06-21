import { animate, state, style, transition, trigger } from '@angular/animations';

export const ButtonHoverStateTrigger = trigger('buttonHoverTrigger', [
  state('inactive', style({
    backgroundColor: '{{startBackground}}',
    borderRadius: '100%',
  }), {params: {startBackground: 'rgb(255, 255, 255)'}}),
  state('active', style({
    backgroundColor: '{{endBackground}}',
    width: '100%',
    height: '100%',
    borderRadius: '0%'
  }), {params: {endBackground: 'rgb(23, 87, 134)'}}),
  transition('active => inactive', [
    animate('0.1s'),
  ]),
  transition('inactive => active', [
    animate('0.2s'),
  ]),
]);
