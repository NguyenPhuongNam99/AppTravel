/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-void */
import {ApiResponse} from 'apisauce';

export const logResponseMonitor = (response: ApiResponse<any>) => {
  console.log('RESPONSE = ', response);
  if (!response.ok) {
    console.log('RESPONSE PROBLEM = ', response.problem);
    console.log('RESPONSE ERROR = ', response.originalError);
  } else {
    console.log('RESPONSE DATA = ', response.data);
  }
  console.log('---------End Call API----------');
};
