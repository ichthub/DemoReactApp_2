import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//setting default configs
//axios.defaults.baseURL ='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorisation'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//intercept erorrs with axios
axios.interceptors.request.use(request =>{
	//we are intercepting requests before they are handled by then or catch in our app.
	console.log(request);
	return request; //you should return it though if you want to continue and pass it to then and catch through out ur app
}, err =>{
	//intercept errors
	console.log(err);
	return Promise.reject(err); 
});

axios.interceptors.response.use(response =>{
	//we are intercepting responses before they are handled by then or catch in our app.
	console.log(response);
	return response; //you should return it though if you want to continue and pass it to then and catch through out ur app
}, err =>{
	//intercept errors
	console.log(err);
	return Promise.reject(err); 
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
