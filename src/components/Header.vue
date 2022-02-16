<template>
  <header>
    <div>
      <h3 class="header--item">Калькулятор заработка</h3>
      <button class="button header--item" v-on:click="$emit('call-window', 'positions')">Позиции</button>
    </div>
    <div>
      <!--      <Checkbox>Синхронизация с сервером</Checkbox>-->
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Checkbox from './elements/Checkbox.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Checkbox
  },
  methods: {},
});
</script>

<style scoped>
* {
  background-color: transparent;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #207583;
  color: ghostwhite;
}

header div {
  display: flex;
  align-items: center;
}

header h3 {
  margin: 0;
  padding: 0;
}

.header--item {
  display: block;
  margin: 0 5px;
}
</style>
