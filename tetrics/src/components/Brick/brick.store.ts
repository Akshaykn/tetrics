import { RootStoreState } from '../../store/index';
import { ActionContext } from 'vuex';
export interface  BrickStoreState {
    selectedBrickId:string;
}

export default {
   state: {
    selectedBrickId : '', 
   },
   getters: {
   },
   mutations:{
     setBrickId(state :any,payload:any){
       state.selectedBrickId = payload; 
     }
   },
   actions:{
   },
};
