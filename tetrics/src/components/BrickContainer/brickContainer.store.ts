

export interface BrickContainerState{
    brickConfigs: any[],
}

export default {
  state: {
    brickConfigs: [{
        brickId: 'bl0',
        xLocation: 0,
        yLocation: -100,
      },
      {
        brickId: 'bl1',
        xLocation: 0,
        yLocation: -150,
      },
      {
        brickId: 'bl2',
        xLocation: 0,
        yLocation: 50,
      },
      {
        brickId: 'bl3',
        xLocation: 100,
        yLocation: 50,
      }], 
  },
  getters: {
    getBrickConfig(state: any) {
        return state.brickConfigs;
    },
  },
}