<template>
  <input>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
});
</script>

<style scoped>
  input {
    border-radius: 4px;
    outline: none;
    border: 2px solid #207583;
    padding: 5px 5px;
    font-size: 14px;
    color: ghostwhite;
    font-family: 'Open Sans', sans-serif;
    background-color: #207583;
    transition: ease-in-out .1s;
  }

  input:focus {
    border: 2px solid #209783;
  }
</style>
