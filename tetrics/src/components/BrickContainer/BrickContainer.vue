<template>
      <div :class="[`${cssPrefix}`]"> 
        <div :class="[`${cssPrefix}__inner`]"> 
             <ak-brick  v-for="(brickConfig,index) of brickConfigs" 
                        :key="index"
                        :brickId="`brick${index}`"
                        :xLocation="brickConfig.xLocation"
                        :yLocation="brickConfig.yLocation">
             </ak-brick> 
        </div>
        <button > modify store </button>
      </div>
</template>

<script lang="tsx">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Brick from '@/components/Brick/Brick.vue';
const cssPrefix = 'brickContainer';
@Component({
     components: {
        'ak-brick': Brick,
     },
 })
export default class BrickContainer extends Vue {
  public cssPrefix = cssPrefix;
  public brickConfigs = [];
  public mounted() {
    this.brickConfigs = this.$store.getters['getBrickConfig'];
  }
  public createBricks(){
     
  }
}
</script>

<style lang="scss">
.brickContainer{  
 position: fixed;
 &__inner{
  display: block;
  position: relative;
 }
}
</style>