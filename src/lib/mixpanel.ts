import {Mixpanel} from 'mixpanel-react-native';
import {APP_MODE} from './request';

const mixpanel = new Mixpanel('6fe1b06b9ce484ade4d0c6dbb8b9770f', true);
mixpanel.init();

export function checkMixpanelTrackingStatus() {
  if (APP_MODE === 'test') {
    console.log('테스트이므로 믹스패널 트래킹을 중지합니다.');
    mixpanel.optOutTracking();
    return;
  }
  console.log('프로덕션이므로 믹스패널 트래킹을 사용합니다.');
  mixpanel.optInTracking();
}

export async function sendMixpanelEvent(eventName: string, property?: object) {
  let hasOptedOut = await mixpanel.hasOptedOutTracking();
  // mixpanel.optInTracking();
  console.log(hasOptedOut);
  console.log('send event : ', eventName);
  mixpanel.track(eventName, property);
}

export async function setMixpanelUser(uid: string) {
  console.log('setMixpanelUser : ', uid);
  mixpanel.identify(uid);
}
