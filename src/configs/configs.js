/**
 * .env 환경 설정 값
 */
const configs = {
  API_BASEURL: process.env.REACT_APP_API_BASEURL || '',
};
console.log(configs.API_BASEURL);
export default configs;
