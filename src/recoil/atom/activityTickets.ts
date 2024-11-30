import { atom } from 'recoil';
import {  ActivityTicketsState} from './types';

export const  activityTicketsState = atom< ActivityTicketsState[]>({
  key: 'activityTickets',
  default: []
});

