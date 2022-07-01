import {apiClient} from '../../api/APIClient';
import API_METHOD from '../../constants/api';

const homePageApi = {
  getListUser(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      apiClient
        .get(API_METHOD.USER.List_User)
        .then(response => {
          const data = response;
          resolve(data);
        })
        .catch(err => reject(err));
    });
  },
};

export default homePageApi;
