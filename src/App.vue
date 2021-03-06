<template>
  <div class="modal-container" v-if="currentModal !== ''" @keydown.esc="triggerModal()"
       @click.self="triggerModal()">
    <Positions class="modal"
               :positions="positionStore.data"
               :class="currentModal === 'positions' ? '' : 'hidden'"
               @add-position="addPosition"
               @remove-position="removePosition"
               @close="triggerModal" />
  </div>
  <Header class="header" @call-window="triggerModal"/>
  <div class="main">
    <Main :income="incomeStore.data"/>
    <AddItemForm ref="addItemForm" @add-income="handleIncomeForm" :positions="positionStore.data" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import LocalStorage from './lib/storage/LocalStorage';
import { StorageData, StorageInterface } from './lib/storage/StorageInterface';
import Positions from './components/windows/Positions.vue';
import { PositionInterface } from './lib/positions/PositionInterface';
import { PositionAddFormInterface } from './lib/positions/PositionAddFormInterface';
import { PositionStore } from './lib/positions/PositionStore';
import { IncomeAddFormInterface } from './lib/income/IncomeAddFormInterface';
import { IncomeStore } from './lib/income/IncomeStore';
import { IncomeInterface, IncomeStatus } from './lib/income/IncomeInterface';
import AddItemForm from './components/elements/AddItemForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    AddItemForm,
    Positions,
    Header,
    Main,
  },
  data: () => ({
    currentModal: '',
    modals: [
      'positions',
      'addItem'
    ] as Array<string>,
    storage: {} as StorageInterface,

    incomeStore: {} as IncomeStore,
    positionStore: {} as PositionStore,

    latestIncomeId: 0,
    latestPositionId: 0
  }),
  created() {
    this.storage = new LocalStorage();
  },
  beforeMount() {
    const positionsData = this.storage.getElement('positions') as StorageData || {
      latestId: 0,
      elements: []
    };

    const incomeData = this.storage.getElement('income') as StorageData || {
      latestId: 0,
      elements: []
    };

    this.latestIncomeId = incomeData.latestId as number;
    this.latestPositionId = positionsData.latestId as number;

    this.positionStore = new PositionStore(positionsData.elements as Array<PositionInterface>);
    this.incomeStore = new IncomeStore(incomeData.elements as Array<IncomeInterface>, this.positionStore as PositionStore);
  },
  methods: {
    triggerModal(name?: string) {
      if (!name) {
        this.currentModal = '';
        return;
      }

      if (!this.modals.includes(name)) {
        return;
      }

      if (this.currentModal === name) {
        this.currentModal = '';
        return;
      }

      this.currentModal = name;
    },
    addPosition(form: PositionAddFormInterface) {
      ++this.latestPositionId;
      this.positionStore.add(this.latestPositionId, form);

      this.storage.setElement('positions', {
        latestId: this.latestPositionId,
        elements: this.positionStore.fullData
      });
      this.storage.saveData();
    },
    removePosition(id: number) {
      this.positionStore.remove(id);

      this.storage.setElement('positions', {
        latestId: this.latestPositionId,
        elements: this.positionStore.fullData
      });
      this.storage.saveData();
    },
    handleIncomeForm(form: IncomeAddFormInterface) {
      ++this.latestIncomeId;
      this.incomeStore.add(this.latestIncomeId, form);

      // @ts-ignore
      this.$refs.addItemForm.reinitForm();

      this.storage.setElement('income', {
        latestId: this.latestIncomeId,
        elements: this.incomeStore.fullData
      });
      this.storage.saveData();
    }
  }
});
</script>

<style>
@import './style/main.css';

.main {
  box-sizing: border-box;
  width: calc(100vw - 40px);
  height: calc(100vh - 90px);
  margin: 20px;
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 10px;
}

.header {
  width: 100vw;
  height: 50px;
  padding: 0 10px;
}

.modal-container {
  background-color: var(--mainBackgroundTransparent);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}

.modal {
  background-color: var(--mainBackground);
  border: 2px solid var(--mainBorderColor);
  border-radius: 4px;
}

.modal.hidden {
  display: none;
}
</style>
