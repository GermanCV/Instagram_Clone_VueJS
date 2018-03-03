import Vuex from "vuex";

import { actions } from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const createStore = () => {
 return new Vuex.Store({
   state: {
     pro: 'jajjajajajajajajjaj',
     userRegister: { 
       username: 'ss',
       password: 'sss',
       email: 'ss',
       fullname: 'ss'
      },
   },
   actions,
   mutations,
   getters,
   modules: {}
 });
}

export default createStore;
