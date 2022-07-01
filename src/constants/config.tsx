import RNConfig from 'react-native-config';

export const config = {
  BASE_URL: RNConfig.BASE_URL,
};

export const apiServiceConfig = {
  TIME_OUT: 15 * 1000,
  NUMBER_RETRY_REFRESH_TOKEN: 3,
};
