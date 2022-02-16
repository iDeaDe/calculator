<template>
  <div class="main-component">
    <div class="menu">
      <button class="button" v-on:click="$emit('call-window', 'addItem')">Добавить</button>
      <button class="button" v-on:click="$emit('call-window', 'chart')">График</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main',
});
</script>

<style scoped>

.main-component {
  border: 2px solid #207583;
  border-radius: 4px;
  display: flex;
}

.menu {
  display: flex;
  align-items: center;
  width: calc(100% - 20px);
  height: 50px;
  border-bottom: 2px solid #207583;
  padding: 0 10px;
}

.menu button {
  margin-right: 10px;
}

.menu button:last-child {
  margin-right: 0;
}

</style>
