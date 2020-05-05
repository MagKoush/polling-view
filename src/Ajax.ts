import { Cookies } from 'react-cookie';
import { AjaxRequest } from 'rxjs/ajax';

/**
 * @private
 *
 * @interface Headers interface
 *
 * @property {string} Authorization  - token place holder
 * @property {string} 'Content-Type' - Object type to send in the request
 */
interface Headers {
  Authorization: string;
  'Content-Type': string;
}

/**
 * create a custom headers to attach to AJAX request type
 *
 * @returns {Headers} Headers object to attach to the request
 */
const createHeaders = (): Headers => {
  const cookie = new Cookies();
  const token = cookie.get('token');

  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

/**
 * @public
 * @class Request implements AjaxRequest interface
 *
 * @property {string}  url     - Url to send the request with
 * @property {any}     body    - Body to send the request with
 * @property {string}  method  - method to send the request with, POST, GET, UPDATE, DELETE
 * @property {Headers} headers - headers object to send the request with
 */
export class Request implements AjaxRequest {
  url: string;
  body: any;
  method: string;
  headers: any;

  constructor(url: string, body?: any, method = 'GET', headers = createHeaders()) {
    this.url = url;
    this.body = body;
    this.method = method;
    this.headers = headers;
  }
}
