<template>
  <label>
    <input type="checkbox">
    <span></span>
    <slot />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Checkbox',
  props: {
    disable: Boolean
  }
});
</script>

<style scoped>

label {
  display: inline-block;
  padding-left: 1.7em;
  height: 1em;
  cursor: pointer;
}

input {
  appearance: none;
}

input:checked + span {
  background-image: url('../../assets/images/check.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

span {
  position: absolute;
  display: inline-block;
  margin-left: -1.7em;
  content: '';
  width: 1.2em;
  height: 1.2em;
  border: 2px solid #209783;
  background-color: #207583;
  border-radius: 4px;
}
</style>