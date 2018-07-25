import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';

const query = (s, a, o = {optional: true}) => q(s, a, o);

export const appearOneByOne = trigger('appearOneByOne', [
  transition(':enter', [
    query('.appear', style({opacity: 0})),
    query('.appear', stagger(300, [
      style({transform: 'translateY(100px)'}),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.appear', stagger(300, [
      style({transform: 'translateY(0px)', opacity: 1}),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),
  ])
]);
