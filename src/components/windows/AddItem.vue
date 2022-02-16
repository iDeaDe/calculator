<template>
  <div class="container" tabindex="-1">
    <section>
      <form class="add-income__form" v-on:submit.prevent="submitIncome">
        <div class="income-item" v-for="(item, i) in incomeItems" :key="i">
          <label class="income-item__field">
            <span>Позиция:</span>
            <select class="input" v-model="incomeItems[i].positionId" required>
              <option value="" disabled selected hidden>Выберите позицию</option>
              <option v-for="position of positions" :key="position.id" :value="position.id">
                {{ position.name }} ({{ position.cost }} за {{ position.unit }})
              </option>
            </select>
          </label>
          <label class="income-item__field">
            <span>Кол-во:</span>
            <input type="text" class="input" v-model.number="incomeItems[i].count">
          </label>
          <label class="income-item__field">
            <span>Дата:</span>
            <Datepicker dark format="dd.MM.yyyy"
                :model-value="incomeItems[i].date"
                :start-date="(new Date())"
                :hide-input-icon="true"
                :enable-time-picker="false"
                :month-change-on-scroll="false"
                :input-class-name="'input'"
                :menu-class-name="'datepicker__menu'"
                :cancel-text="'Отмена'"
                :select-text="'Выбрать'" />
          </label>
        </div>
      </form>
    </section>
    <footer>
      <div class="group">
        <button class="button" v-on:click="additionalItem">Ещё +</button>
        <button class="button">Сохранить</button>
      </div>
      <div class="group">
        <button class="button" v-on:click="$emit('close')">Закрыть</button>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IncomeAddFormInterface } from '../../lib/income/IncomeAddFormInterface';
import { PositionInterface } from '../../lib/positions/PositionInterface';

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

export default defineComponent({
  name: 'AddItem',
  components: {
    Datepicker
  },
  props: {
    positions: Array as () => Array<PositionInterface>
  },
  data: () => ({
    incomeItems: [] as Array<IncomeAddFormInterface>
  }),
  beforeMount() {
    this.additionalItem();
  },
  methods: {
    getIncomeForm() {
      return {
        positionId: 0,
        count: 0,
        date: ''
      } as IncomeAddFormInterface
    },
    additionalItem() {
      this.incomeItems.push(this.getIncomeForm());
    },
    submitIncome() {
      this.$emit('add-income', this.incomeItems);
      this.incomeItems.splice(0, this.incomeItems.length);
    }
  }
});
</script>

<style scoped>

.container {
  position: relative;
  width: 600px;
  height: 80%;
}

section {
  height: calc(100% - 52px);
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
  height: 50px;
  padding: 0 10px;
  border-top: 2px solid #207583;
}

footer button {
  margin: 0 5px;
}

.income-item__field {
  display: inline-block;
  margin: 10px;
}

.income-item__field span {
  display: block;
  margin-left: 5px;
  margin-bottom: 5px;
}
</style>