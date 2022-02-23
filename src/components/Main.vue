<template>
  <div class="main-component">
    <div class="menu">
      <div>
        <button class="button" v-on:click="$emit('call-window', 'addItem')">Добавить</button>
        <button class="button" v-on:click="$emit('call-window', 'chart')">График</button>
      </div>
      <div>
        <label>
          <span class="menu__view-type--title">Вид данных:</span>
          <select class="input" v-model="viewType">
            <option value="year">Год</option>
            <option value="month">Месяц</option>
            <option value="day">День</option>
          </select>
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

export default defineComponent({
  name: 'Main',
  data: () => ({
    viewType: 'year'
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

.menu__view-type--title {
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
