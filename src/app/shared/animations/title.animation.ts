import { animate, state, style, transition, trigger } from '@angular/animations';

export const TitleHoverTitleStateTrigger = trigger('titleTitleTrigger', [
  state('active', style({ color: '{{startColor}}' }), {params: {startColor: 'rgb(255, 255, 255)'}}),
  state('inactive', style({ color: '{{endColor}}' }), {params: {endColor: 'rgb(83, 104, 126)'}}),
  transition('active => inactive', [
    animate('0.5s'),
  ]),
  transition('inactive => active', [
    animate('0.2s'),
  ]),
]);
