import {apiClient} from '../../api/APIClient';
import API_METHOD from '../../constants/api';

const registerApi = {
  _onRegister(params: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      apiClient
        .post(API_METHOD.MS_AUTH.Register, params)
        .then(response => {
          const data = response;
          resolve(data);
        })
        .catch(err => reject(err));
    });
  },
};

export default registerApi;
