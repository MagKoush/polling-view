import { Cookies } from 'react-cookie';
import { AjaxRequest } from 'rxjs/ajax';

const createHeaders = (): any => {
  const cookie = new Cookies();
  const token = cookie.get('token');

  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

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
