<template>
  <div class="container" tabindex="-1">
    <div class="position-add" v-show="openAddBlock">
      <form v-on:submit.prevent="$emit('add-position', positionForm)">
        <input type="text" v-model.trim="positionForm.name" class="input position-add__input" required>
        <input type="text" step="any" v-model.number="positionForm.cost" class="input position-add__input">
        <input type="text" v-model.trim="positionForm.unit" class="input position-add__input" placeholder="шт.">
        <button class="button">+</button>
      </form>
    </div>
    <section>
      <table>
        <caption>Позиции для расчётов</caption>
        <thead>
        <tr>
          <th>Наименование</th>
          <th>Стоимость</th>
          <th>Единица</th>
        </tr>
        </thead>
        <tbody v-memo="positions">
        <tr v-for="position of positions" :key="position.id">
          <td>{{ position.name }}</td>
          <td class="cell-centered">{{ position.cost }}</td>
          <td class="cell-centered">{{ position.unit }}</td>
          <td class="cell-centered"><button class="button" @click="$emit('remove-position', position.id)">-</button></td>
        </tr>
        </tbody>
      </table>
    </section>
    <footer>
      <button class="button" @click="openAddBlock = !openAddBlock" v-text="openAddBlock ? 'Отмена' : 'Добавить'"></button>
      <button class="button" @click="$emit('close')">Закрыть</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PositionInterface } from '../../lib/positions/PositionInterface';
import { PositionAddFormInterface } from '../../lib/positions/PositionAddFormInterface';

export default defineComponent({
  name: 'Positions',
  props: {
    positions: Array as () => Array<PositionInterface>
  },
  data: () => ({
    openAddBlock: false,
    positionForm: {
      name: '',
      cost: 0.0,
      unit: ''
    } as PositionAddFormInterface
  })
});
</script>

<style scoped>
.container {
  position: relative;
  width: 600px;
  height: 80%;
}

section {
  width: 100%;
  height: calc(100% - 52px);
  overflow-x: hidden;
  overflow-y: auto;
}

footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 2px solid #207583;
}

footer button {
  margin: 0 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table caption {
  margin: 1em 0;
}

table thead tr {
  border-top: 2px solid #207583;
  border-bottom: 2px solid #207583;
}

table thead th {
  padding: 5px 0;
  height: 1em;
  max-height: 1em;
}

table tbody tr td {
  cursor: pointer;
}

table tbody tr:hover td {
  background-color: #207583;
}

table tbody td {
  padding: 0.5em 1em;
  height: 1em;
  word-break: break-all;
}

table tbody td:nth-of-type(1) {
  width: 60%;
}

table tbody td:nth-of-type(2) {
  width: 20%;
}

table tbody td:nth-of-type(3) {
  width: 20%;
}

.position-add {
  position: absolute;
  bottom: 52px;
  width: 100%;
  padding: 10px 0;
}

.position-add form {
  display: flex;
}

.position-add__input {
  display: block;
  margin-left: 5px;
}

.position-add__input:nth-of-type(1) {
  width: calc(60% - 10px);
  margin-right: 0;
}

.position-add__input:nth-of-type(2),
.position-add__input:nth-of-type(3) {
  width: calc(20% - 10px);
}

.position-add button {
  display: inline-block;
  width: 32px;
  text-align: center;
  padding: 7px 2px;
  margin: 0 5px;
}

.cell-centered {
  text-align: center;
}
</style>
