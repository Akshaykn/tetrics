import Vue from 'vue';
import Vuex from 'vuex';
import { BrickStoreModule, BrickStoreState } from '@/components/Brick';
import { BrickContainerStoreModule, BrickContainerState } from '@/components/BrickContainer';
Vue.use(Vuex);

export interface RootStoreState {
  SecondLevelStoreModule: BrickStoreState;
  BrickContainerStoreModule: BrickContainerState;
}



export default new Vuex.Store<RootStoreState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    BrickStoreModule,
    BrickContainerStoreModule,
  },
});
