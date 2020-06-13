<template>
      <div
           :class="[`${cssPrefix}`]"
           :style="{ left:`${xloc}px`,top:`${yloc}px`,width:`50px`,height:`50px` }">
      </div> 
</template>

<script lang="tsx">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
const cssPrefix = 'brick';
export default class Brick extends Vue {
  public cssPrefix = cssPrefix;
  @Prop()
  public xLocation: number = 0;
  @Prop()
  public yLocation: number = 0;
  @Prop()
  public brickId: string = '';
  get xloc(){
    return this.xLocation;
  }
  get yloc(){
    return this.yLocation;
  }
  public mounted() {
    debugger;
    // tslint:disable-next-line
    this.$store.commit('setBrickId', this.brickId);
    let brick = this.$store.getters.getLocations;
  }
}
</script>

<style lang="scss">
.brick{
   position:absolute;
   background: linear-gradient(to left, #6c97a5 0%, #ff99cc 100%);
}
</style>