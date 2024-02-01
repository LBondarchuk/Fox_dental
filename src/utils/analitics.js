import { analytics } from '@/firebase';
import { logEvent } from 'firebase/analytics';

export const logButtonClickEvent = (name) => {
  logEvent(analytics, name);
};
