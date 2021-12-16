import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const globalState = {
  databerandawebsite : [],
  datawebsiteidentity:[],
  datayoutube:[],
  datakeahlian:[],
  datagaleri:[],
  databiodata:[],
  datapendidikan:[],
  datapekerjaan:[],
  dataportofolio:[],
  datasosmed:[],
}

const rootReducer = (state = globalState, action) => {
  
  if(action.type === 'UPDATEBERANDA'){
    return{
      ... state,
      databerandawebsite:action.databerandawebsite
    } 
  }

  if(action.type === 'UPDATEIDENTITY'){
    return{
      ... state,
      datawebsiteidentity:action.datawebsiteidentity
    } 
  }

  if(action.type === 'UPDATEYOUTUBE'){
    return{
      ... state,
      datayoutube:action.datayoutube
    } 
  }

  if(action.type === 'UPDATEKEAHLIAN'){
    return{
      ... state,
      datakeahlian:action.datakeahlian
    } 
  }

  if(action.type === 'UPDATEGALERI'){
    return{
      ... state,
      datagaleri:action.datagaleri
    } 
  }

  if(action.type === 'UPDATEBIODATA'){
    return{
      ... state,
      databiodata:action.databiodata
    } 
  }

  if(action.type === 'UPDATEPENDIDIKAN'){
    return{
      ... state,
      datapendidikan:action.datapendidikan
    } 
  }

  if(action.type === 'UPDATEPEKERJAAN'){
    return{
      ... state,
      datapekerjaan:action.datapekerjaan
    } 
  }

  if(action.type === 'UPDATEPORTOFOLIO'){
    return{
      ... state,
      dataportofolio:action.dataportofolio
    } 
  }

  if(action.type === 'UPDATESOSMED'){
    return{
      ... state,
      datasosmed:action.datasosmed
    } 
  }


  
  
  return state;

}

const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <Provider store={storeRedux}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA