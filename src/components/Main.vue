<template>
  <div class="main-component">
    <div class="main-component__content">
      <div v-for="(data, index) of income" :key="index">
        <div class="content-head">
          <h2 class="content-head__header">{{ index }} год</h2>
          <span>{{ data.sum }}</span>
        </div>

        <div v-for="(month, monthNumber) of data.child" :key="monthNumber">
          <div class="content-head">
            <h3 class="content-head__header">{{ baseMonths[monthNumber] }}</h3>
          </div>

          <div class="card-container">
            <article class="income-card" v-for="(day, index) of month.child" :key="index">
              <h3 class="income-card__title">{{ index + ' ' + months[monthNumber] }}</h3>
              <div class="income-card__info">Сумма: {{ day.sum }}</div>
              <span style="text-decoration: underline whitesmoke dotted;cursor: help">Подробнее</span>
              <div class="income-card__detail" style="display: none;">
                <ul>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Excepturi exercitationem quam tempora!</li>
                  <li>Adipisci temporibus totam velit.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import { IncomeIndex } from '../lib/income/IncomeStore';
import { MonthFormat } from '../lib/MonthFormat';

export default defineComponent({
  name: 'Main',
  components: {
    Datepicker
  },
  props: {
    income: {} as () => Record<number, IncomeIndex>
  },
  data: () => ({
    months: MonthFormat.months,
    baseMonths: MonthFormat.baseMonths
  })
});
</script>

<style scoped>

.main-component {
  border: 2px solid #207583;
  border-radius: 4px;
  height: 100%;
}

.main-component__content {
  height: 100%;
  overflow-y: auto;
}

.content-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(1em + 24px);
  border-top: 2px solid #207583;
  border-bottom: 2px solid #207583;
  padding: 0 10px;
}

.content-head:first-child {
  border-top: none;
}

.card-container {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.income-card {
  width: 250px;
  padding: 10px;
  border: 2px solid #207583;
  border-radius: 4px;
  user-select: all !important;
  position: relative;
}

.income-card__title {
  font-size: 24px;
}

.income-card__info {
  font-size: 16px;
}

.income-card__detail {
  position: absolute;
  top: 0;
}

.income-card__detail ul {
  list-style-type: none;
}

</style>
