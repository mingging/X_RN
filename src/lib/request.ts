import {getBuildNumber} from 'react-native-device-info';

const testBuildNumber = 101;

export const APP_MODE = __DEV__
  ? testBuildNumber % 2 === 1
    ? 'test'
    : 'prod'
  : parseInt(getBuildNumber()) % 2 === 1
  ? 'test'
  : 'prod';

console.log('APP_MODE : ', APP_MODE);

export const origin = __DEV__
  ? 'https://us-central1-greenish-client-app.cloudfunctions.net/tapi/v1/app'
  : APP_MODE === 'test'
  ? 'https://us-central1-greenish-client-app.cloudfunctions.net/tapi/v1/app'
  : 'https://us-central1-greenish-client-app.cloudfunctions.net/api/v1/app';

export const firebaseDatabaseOrigin =
  APP_MODE === 'test'
    ? 'https://greenish-client-app-test.asia-southeast1.firebasedatabase.app/'
    : 'https://greenish-client-app-default-rtdb.asia-southeast1.firebasedatabase.app/';

export function requestGet<T>(url: string) {
  return new Promise<T>((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function requestPost<T, Q>(url: string, body: T, headers?: object) {
  return new Promise<Q>((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
      .then(res => res.json())
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export const API = {
  feed: {
    list: '/feed/list',
    view: {
      update: '/feed/view/update',
    },
    specific: '/feed/view/specific',
  },
  feedback: '/feedback/create',
};
