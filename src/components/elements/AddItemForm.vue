<template>
  <div class="container">
    <h2 class="container__header">Добавить доход</h2>
    <form class="add-item-form" @submit.prevent="submitForm">
      <label class="add-item-form__field">
        <span class="add-item-form__field__title">Позиция:</span>
        <select class="input add-item-form__field__input" :disabled="positions.length === 0" v-model="addForm.positionId" required>
          <option value="-1" disabled selected hidden>Выберите позицию</option>
          <option v-for="position of positions" :key="position.id" :value="position.id">
            {{ position.name }} ({{ position.cost }} за {{ position.unit }})
          </option>
        </select>
      </label>
      <label class="add-item-form__field">
        <span class="add-item-form__field__title">Количество:</span>
        <input type="text" class="input add-item-form__field__input" v-model.number="addForm.count" min="1" required>
      </label>
      <label class="add-item-form__field">
        <span class="add-item-form__field__title">Дата:</span>
        <Datepicker dark format="dd.MM.yyyy"
                    :required="true"
                    v-model="addForm.date"
                    :hide-input-icon="true"
                    :enable-time-picker="false"
                    :month-change-on-scroll="false"
                    :input-class-name="'input add-item-form__field__input'"
                    :menu-class-name="'datepicker__menu'"
                    :cancel-text="'Отмена'"
                    :select-text="'Выбрать'"
                    :now-button-label="'Сегодня'"
                    :clearable="false"
                    :auto-apply="true"
                    :show-now-button="true"/>
      </label>

      <div class="add-item-form__field">
        <button class="button" :disabled="positions.length === 0">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { PositionInterface } from '../../lib/positions/PositionInterface';
import { IncomeAddFormInterface } from '../../lib/income/IncomeAddFormInterface';

import Datepicker from 'vue3-date-time-picker';

export default defineComponent({
  name: 'AddItemForm',
  components: {
    Datepicker
  },
  props: {
    positions: Array as () => Array<PositionInterface>
  },
  data: () => ({
    addForm: <IncomeAddFormInterface>{
      positionId: -1,
      count: 0,
      date: new Date()
    },
  }),
  methods: {
    reinitForm() {
      let test =
      this.addForm = <IncomeAddFormInterface>{
        positionId: -1,
        count: 0,
        date: new Date()
      };
    },
    validateForm() {
      const form = this.addForm;
      return form.positionId > 0 && form.count > 0;
    },
    submitForm() {
      if (this.validateForm()) {
        this.$emit('add-income', this.addForm);
      } else {
        return false;
      }
    }
  }
});
</script>

<style scoped>

.container {
  border: 2px solid #207583;
  border-radius: 4px;
}

.container__header {
  padding: 10px;
  margin: 0;
  width: 100%;
  border-bottom: 2px solid #207583;
}

.add-item-form {
  margin: 5px;
}

.add-item-form__field {
  display: block;
  margin: 10px;
}

.add-item-form__field__title {
  display: block;
  margin-left: .6em;
  margin-bottom: .3em;
}

.add-item-form__field__input {
  width: 100%;
}
</style>