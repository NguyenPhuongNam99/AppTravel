// import translations from

import {RequestTransform, ResponseTransform} from 'apisauce';

// const PROBLEM_MESSAGE = {
//     CLIENT_ERROR: translations.API_ERROR.CLIENT_ERROR,
//     SERVER_ERROR: translations.API_ERROR.SERVER_ERROR,
//     TIMEOUT_ERROR: translations.API_ERROR.TIMEOUT_ERROR,
//     CONNECTION_ERROR: translations.API_ERROR.CONNECTION_ERROR,
//     NETWORK_ERROR: translations.API_ERROR.NETWORK_ERROR,
//     CANCEL_ERROR: translations.API_ERROR.CANCEL_ERROR,
// };

export const transformRequest: RequestTransform = request => {
  // this.instance.setHeader('clientMessageId', `${uuid.v4}`);
  // if (!request.headers.isAuthorization) {
  //     request.headers.Authorization = undefined;
  // }
};

export const transformResponse: ResponseTransform = response => {
  // if (response.problem || !response.ok) {
  //     if (response.problem === 'CANCEL_ERROR' && response.originalError.message === 'manual') {
  //         response.message = '';
  //     } else if (response.data?.description) {
  //         response.message = response.data?.description;
  //     } else if (response.data?.errorDesc) {
  //         response.message = response.data.errorDesc[0];
  //     } else if (PROBLEM_MESSAGE[response.problem]) {
  //         response.message = PROBLEM_MESSAGE[response.problem];
  //     } else {
  //         response.message = 'Có lỗi ngoại lệ xảy ra. Vui lòng thử lại!';
  //     }
};
