<template>
  <div class="home">
      <game-container></game-container>
  </div>
</template>

<script>
// @ is an alias to /src
import GameContainer from '@/components/GameContainer.vue';

export default {
  name: 'Home',
  components: {
    GameContainer,
  },
};
</script>
