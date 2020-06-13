<template>
      <div :class="[`${cssPrefix}`]">
          <ak-brickContainer></ak-brickContainer>
      </div>
</template>

<script lang="tsx">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BrickContainer from '@/components/BrickContainer/BrickContainer.vue';
const cssPrefix = 'gameContainer';
@Component({
     components: {
        'ak-brickContainer': BrickContainer,
     },
 })
export default class GameContainer extends Vue {
  public cssPrefix = cssPrefix;
}
</script>

<style lang="scss">
.gameContainer{
  background-color: rgb(11, 33, 34);
  width:50%;
  height:500px;
  margin:auto;
  position:relative;
}
</style>