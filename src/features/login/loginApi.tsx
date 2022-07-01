import {apiClient} from '../../api/APIClient';
import API_METHOD from '../../constants/api';

interface TypeResponse {
  accesToken: string;
  refreshToken: string;
}

const loginAPI = {
  login(params: any): Promise<TypeResponse> {
    return new Promise<TypeResponse>((resolve, reject) => {
      apiClient
        .post<TypeResponse>(API_METHOD.MS_AUTH.Login, params)
        .then(response => {
          const {accesToken, refreshToken} = response;
          const expires_in = 36000;
          const token_type = 'Bearer';

          apiClient.setAuthorization(
            accesToken,
            token_type,
            expires_in,
            refreshToken,
          );
          resolve(response);
        })
        .catch(err => reject(err));
    });
  },
};

export default loginAPI;
