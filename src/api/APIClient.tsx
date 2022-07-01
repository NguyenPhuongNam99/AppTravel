import {ApisauceConfig, ApisauceInstance, create, CancelToken} from 'apisauce';
import axios, {AxiosInstance} from 'axios';
import {logResponseMonitor} from './extension/ApiMonitor';
import {transformRequest, transformResponse} from './extension/ApiTranforms';
import {AxiosRequestConfig} from 'axios';
import {apiServiceConfig} from '../constants/config';

import {config} from '../constants/config';
import uuid from 'react-native-uuid';
import {createAppError, handleException} from '../Utils';
import API_METHOD from '../constants/api';
import {appConstants} from '../constants/const';
import BackgroundTimer from 'react-native-background-timer';

export type AppApiRequestConfig = AxiosRequestConfig;

export type AppApiParams = any;

export interface GetTokenResponse {
  access_token: string;
  refresh_token: string;
  refresh_token_expires_in: string;
  expires_in: number;
  scope: string;
  issued_at: string;
  token_type: string;
}

const DEFAULT_TIMEOUT = apiServiceConfig.TIME_OUT; //milisecond
const DEFAULT_NUMBER_RETRY_REFRESH_TOKEN =
  apiServiceConfig.NUMBER_RETRY_REFRESH_TOKEN; //milisecond

const createAxiosApiInstance = (_baseURL: string): ApisauceInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: _baseURL,
  });
  axiosInstance.interceptors.request.use((axiosConfig: AxiosRequestConfig) => {
    let newHeader = {};
    if (axiosConfig.headers) {
      newHeader = {
        ...axiosConfig.headers,
        clientMessageId: uuid.v4(),
      };
    }
    axiosConfig.headers = newHeader;
    return axiosConfig;
  });
  const apiSauceConfig: ApisauceConfig = {
    baseURL: _baseURL,
    axiosInstance,
    timeout: DEFAULT_TIMEOUT,
  };

  return create(apiSauceConfig);
};

class ApiClient {
  instance: ApisauceInstance;
  token_expires_in: number;
  refresh_token: string;
  token_type: string;
  token: string;
  //Các biến sử dụng để xử lý việc refresh token
  refeshTokenInterval?: ReturnType<typeof BackgroundTimer.setInterval>;
  tokenTimeRemaining: number;
  isRefreshingToken: boolean; //Trạng thái đang refresh token hay không.
  numberRefreshToken: number; //Số lần refresh token. Mặc định đến 5 lần sẽ dừng
  // setInterval(()=>{});

  init() {
    this.token_expires_in = 0;
  }

  constructor(baseURL: string) {
    this.instance = createAxiosApiInstance(baseURL);
    this.instance.addMonitor(logResponseMonitor);
    this.instance.addRequestTransform(transformRequest);
    this.instance.addResponseTransform(transformResponse);
    this.token_expires_in = 0;
    this.refresh_token = '';
    this.token_type = '';
    this.token = '';
    //Init refresh token action
    this.refeshTokenInterval = undefined;
    this.tokenTimeRemaining = 0;
    this.isRefreshingToken = false;
    this.numberRefreshToken = 0;
  }

  setAuthorization(
    token: string,
    tokenType: string,
    token_expires_in: number,
    refresh_token: string,
  ) {
    console.log('da log');
    console.log('token new', token);
    console.log('beare new', tokenType);
    console.log('token expre new', token_expires_in);
    console.log('refesh token new', refresh_token);
    this.instance.setHeader('authorization', `${tokenType} ${token}`);
    this.token_expires_in = token_expires_in;
    this.refresh_token = refresh_token;
    this.token_type = tokenType;
    this.token = token;
    //Init refresh token action
    this.tokenTimeRemaining = token_expires_in;
    this.isRefreshingToken = false;
    this.numberRefreshToken = 0;
    // if (this.token_expires_in > this.countTokenExpired) {
    //   this.refeshTokenInterval = setInterval(() => {}, 1000);
    // }
  }

  //Bắt đầu action refresh token
  //Chỗ này gọi sau khi lấy token xong.
  startActionRefreshToken() {
    if (!this.refeshTokenInterval) {
      this.refeshTokenInterval = BackgroundTimer.setInterval(() => {
        this.actionRefreshToken();
      }, 1000);
    }
  }

  //Dừng action refresh token
  //Chỗ này gọi sau khi lấy token thất bại hoặc logout
  stopActionRefreshToken() {
    if (this.refeshTokenInterval) {
      BackgroundTimer.clearInterval(this.refeshTokenInterval);
      this.refeshTokenInterval = undefined;
    }
  }

  getToken() {
    return `${this.token_type} ${this.token}`;
  }

  actionRefreshToken() {
    //Thời gian bắt đầu gọi refresh token là còn 20% thời gian hết hạn của token tính bằng giây
    const timeToRefresh = this.token_expires_in * 0.9;
    if (this.tokenTimeRemaining > timeToRefresh) {
      //Chưa đến lúc refresh
      //Giảm thời gian còn lại của token đi 1
      this.tokenTimeRemaining--;
      // console.log('//Chưa đến lúc refresh, Giảm thời gian còn lại của token đi 1', this.tokenTimeRemaining);
    } else if (this.tokenTimeRemaining === 0) {
      //Kiểm tra token hết hạn
      console.log('Token đã hết hạn thực hiện action stop');
      this.stopActionRefreshToken();
    } else if (this.isRefreshingToken === true) {
      //Kiểm tra có đang refresh token hay không
      this.tokenTimeRemaining--;
      console.log('//Đang refresh tọken', this.tokenTimeRemaining);
    } else if (this.numberRefreshToken > DEFAULT_NUMBER_RETRY_REFRESH_TOKEN) {
      //Kiểm tra vượt quá số lần refresh token
      console.log('Vượt quá số lần retry thực hiện action stop');
      this.stopActionRefreshToken();
    } else {
      this.tokenTimeRemaining--;
      this.isRefreshingToken = true;

      console.log(
        'Thực hiện retry refresh token lần ',
        this.numberRefreshToken,
      );
      //   const body = {
      //     refresh_token: this.refresh_token,
      //     grant_type: keycloakConfig.GRANT_TYPE_REFRESH_TOKEN,
      //     client_id: keycloakConfig.CLIENT_ID,
      //   };
      //   const encodedBody = urlEncodedBody(body);
      //   const apiConfig: AppApiRequestConfig = {
      //     headers: {
      //       'Content-Type': authenConfig.APPLICATION_URL_ENCODED,
      //     },
      //     transformRequest: (data, headers) => {
      //       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //       delete headers.Authorization;
      //       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      //       return data;
      //     },
      //   };
      apiClient
        .post<GetTokenResponse>(
          API_METHOD.MS_AUTH.REFRESH_TOKEN,

          //   apiConfig,
        )
        .then(response => {
          this.isRefreshingToken = false;
          if (
            this.tokenTimeRemaining > 0 &&
            this.numberRefreshToken <= DEFAULT_NUMBER_RETRY_REFRESH_TOKEN
          ) {
            const {access_token, token_type, refresh_token, expires_in} =
              response;
            this.setAuthorization(
              access_token,
              token_type,
              expires_in,
              refresh_token,
            );
          } else {
            this.numberRefreshToken++;
          }
        })
        .catch((err: Error) => {
          handleException(err);
          this.isRefreshingToken = false;
          this.numberRefreshToken++;
        });
    }
  }

  get<T>(
    url: string,
    params?: AppApiParams,
    apiConfig?: AppApiRequestConfig,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const source = CancelToken.source();
      const timeoutValue = apiConfig?.timeout
        ? apiConfig.timeout
        : DEFAULT_TIMEOUT;
      const timeout = setTimeout(() => {
        source.cancel();
        // Timeout Logic
        reject(
          createAppError(
            'API_ERROR',
            'request_timeout',
            appConstants.API_STATUS_CODE.REQUEST_TIMEOUT,
          ),
        );
      }, timeoutValue);
      this.instance
        .get<T>(url, params, apiConfig)
        .then(response => {
          clearInterval(timeout);
          const {ok} = response;
          if (ok) {
            //success
            resolve(response.data as T);
          } else {
            //problem
            reject('API_ERROR');
          }
        })
        .catch(error => {
          clearInterval(timeout);
          reject('API_ERROR');
        });
    });
  }

  post<T>(
    url: string,
    data?: AppApiParams,
    apiConfig?: AppApiRequestConfig,
  ): Promise<T> {
    // return this.instance.post(url, data, apiConfig);
    return new Promise((resolve, reject) => {
      const source = CancelToken.source();
      const timeoutValue = apiConfig?.timeout
        ? apiConfig.timeout
        : DEFAULT_TIMEOUT;
      const timeout = setTimeout(() => {
        source.cancel();
        // Timeout Logic
        reject(
          createAppError(
            'API_ERROR',
            Error('request_timeout'),
            appConstants.API_STATUS_CODE.REQUEST_TIMEOUT,
          ),
        );
      }, timeoutValue);
      this.instance
        .post<T>(url, data, apiConfig)
        .then(response => {
          clearInterval(timeout);
          const {ok} = response;
          if (ok) {
            //success
            resolve(response.data as T);
          } else {
            //problem
            reject('API_ERROR');
          }
        })
        .catch(error => {
          clearInterval(timeout);
          reject('API_ERROR');
        });
    });
  }

  put<T>(
    url: string,
    data?: AppApiParams,
    apiConfig?: AppApiRequestConfig,
  ): Promise<T> {
    // return this.instance.put(url, data, apiConfig);
    return new Promise((resolve, reject) => {
      const source = CancelToken.source();
      const timeoutValue = apiConfig?.timeout
        ? apiConfig.timeout
        : DEFAULT_TIMEOUT;
      const timeout = setTimeout(() => {
        source.cancel();
        // Timeout Logic
        reject(
          createAppError(
            'API_ERROR',
            Error('request_timeout'),
            appConstants.API_STATUS_CODE.REQUEST_TIMEOUT,
          ),
        );
      }, timeoutValue);
      this.instance
        .put<T>(url, data, apiConfig)
        .then(response => {
          clearInterval(timeout);
          const {ok} = response;
          if (ok) {
            //success
            resolve(response.data as T);
          } else {
            //problem
            reject('API_ERROR');
          }
        })
        .catch(error => {
          clearInterval(timeout);
          reject('API_ERROR');
        });
    });
  }

  delete<T>(
    url: string,
    params?: AppApiParams,
    apiConfig?: AppApiRequestConfig,
  ): Promise<T> {
    // return this.instance.delete(url, params, apiConfig);
    return new Promise((resolve, reject) => {
      const source = CancelToken.source();
      const timeoutValue = apiConfig?.timeout
        ? apiConfig.timeout
        : DEFAULT_TIMEOUT;
      const timeout = setTimeout(() => {
        source.cancel();
        // Timeout Logic
        reject(
          createAppError(
            'API_ERROR',
            Error('request_timeout'),
            appConstants.API_STATUS_CODE.REQUEST_TIMEOUT,
          ),
        );
      }, timeoutValue);
      this.instance
        .delete<T>(url, params, apiConfig)
        .then(response => {
          clearInterval(timeout);
          const {ok} = response;
          if (ok) {
            //success
            resolve(response.data as T);
          } else {
            //problem
            reject('API_ERROR');
          }
        })
        .catch(error => {
          clearInterval(timeout);
          reject('API_ERROR');
        });
    });
  }
}

export const apiClient = new ApiClient(config.BASE_URL);
