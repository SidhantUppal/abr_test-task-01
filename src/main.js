/* eslint-disable */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

// Json file imported from local folder assets/json
import sampleJson from './assets/json/abr_maching_name.json';

Vue.config.productionTip = false

// use vuex store
Vue.use(Vuex)

// use GUID
const GUID_KEY = process.env.GUID;

// configure store
const store = new Vuex.Store({
  state: {
    message:"",
    data:[],   
  },
  mutations: {

    // function to fetch data and update state in store
    getData(state, {name, numberOfRows}){

      if(GUID_KEY !== ""){
                        // fetch api used to get data from api endpoint 
                        fetch(process.env.API_URL+"?"+ new URLSearchParams({
                          name: name,
                          maxResults: numberOfRows,
                          callback:"nameCallback",
                          guid:process.env.GUID
                      }))
                        .then(res => res.text())
                        .then(data => {

                          // callback function to get api data and commit to store
                          function nameCallback (nameData){
                            if (nameData.Message.length > 0) {
                                                              state.message = nameData.Message
                            }
                            state.data = nameData.Names
                          }
                          
                          // function to convert string (string response - callback function from API) into javascript expression.
                          eval(data);

                          });  
        
        }else {
                state.message = "";
                state.data = ""; 

                // filter data according to name requested and number of records at a time
                let data = sampleJson.Names.filter(item => (item.Name.toLowerCase().includes(name.toLowerCase())));
                
                if(data.length){
                                // get number of records requested from form
                                data = data.slice(0,numberOfRows);
                                state.message = data.length + " entries found."
                                state.data = data
                }else{
                      state.message = "No Match Found."
                  }
        }
     
      }

    }
  })

// vue config
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:store
})
