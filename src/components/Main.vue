<template>
  <div class="main-component">
    <div class="menu">
      <div>
        <button class="button" @click="$emit('call-window', 'addItem')">Добавить</button>
        <button class="button" @click="$emit('call-window', 'chart')">График</button>
      </div>
      <div class="menu__filters">
        <label>
          <span class="menu__filters__title">Вид данных:</span>
          <select class="input" v-model="viewType">
            <option value="year">Год</option>
            <option value="month">Месяц</option>
            <option value="day">День</option>
          </select>
        </label>
        <label>
          <span class="menu__filters__title">Промежуток времени:</span>
          <Datepicker dark format="dd.MM.yyyy"
            :range="true"
            :preset-ranges="viewRangePreset"
            :start-date="(new Date())"
            :hide-input-icon="true"
            :enable-time-picker="false"
            :month-change-on-scroll="false"
            :input-class-name="'input'"
            :menu-class-name="'datepicker__menu'"
            :cancel-text="'Отмена'"
            :select-text="'Выбрать'"
            :clearable="false" />
        </label>
      </div>
    </div>

    <div class="main-component__content">
      <div class="card-container">
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
        <article class="income-card">
          <h3 class="income-card__title">2022</h3>
          <div class="income-card__count">Кол-во: 200</div>
          <div class="income-card__income">Сумма: 200 200</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { subMonths, startOfMonth, endOfMonth } from 'date-fns';

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

export default defineComponent({
  name: 'Main',
  components: {
    Datepicker
  },
  data: () => ({
    viewType: 'year',
    viewRangePreset: [
      {
        label: 'Сегодня',
        range: [ new Date(), new Date() ]
      },
      {
        label: 'Этот месяц',
        range: [ startOfMonth(new Date()), endOfMonth(new Date()) ]
      },
      {
        label: 'Последние 30 дней',
        range: [ subMonths(new Date(), 1), new Date() ]
      }
    ]
  }),
  methods: {
    setView(name: string) {
      this.$emit('data-change', {name});
    }
  }
});
</script>

<style scoped>

.main-component {
  border: 2px solid #207583;
  border-radius: 4px;
}

.main-component__content {
  height: calc(100% - 52px);
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
  height: 50px;
  border-bottom: 2px solid #207583;
  padding: 0 10px;
}

.menu div {
  display: flex;
  align-items: center;
}

.menu button {
  margin-right: 10px;
}

.menu button:last-child {
  margin-right: 0;
}

.menu__filters {
  display: inline-grid;
  gap: 5px;
}

.menu__filters__title {
  display: inline-block;
  margin-right: 10px;
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
}

.income-card__title {
  font-size: 24px;
}

.income-card__count,
.income-card__income {
  font-size: 16px;
}

</style>
