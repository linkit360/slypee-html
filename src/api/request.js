import axios from 'axios';

const BASE_URL = '/api';
const STUB_DELAY = 1000;
const METHODS = ['GET', 'DELETE', 'HEAD', 'POST', 'PUT', 'PATCH'];

const sidedRequest = opts => axios({ baseURL: BASE_URL, ...opts });

const stubRequest = opts => {
  const { stubData, stubDelay = STUB_DELAY } = opts;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: stubData });
    }, stubDelay);
  });
};

const doRequest = opts => {
  if (opts.stubData) {
    return stubRequest(opts);
  }

  return sidedRequest(opts);
};

const request = METHODS.reduce((req, method) => {
  req[method] = opts => doRequest({ ...opts, method });
  return req;
}, {});

export default request;

export const externalRequest = (externalUrl, opts) =>
  axios({ url: externalUrl, ...opts });
