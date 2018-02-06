import axios from 'axios';

const instance = axios.create();
instance.defaults.headers.common['Authorisation'] = 'AUTH TOKEN FROM INSTANCE';
/*you can also add interseptors here instance.interceptors.request...*/
export default instance;