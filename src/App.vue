<template>
  <div class="modal-container" v-if="currentModal !== ''" v-on:keydown.esc="triggerModal()"
       v-on:click.self="triggerModal()">
    <Positions class="modal"
               v-on:add-position="addPosition"
               v-on:remove-position="removePosition"
               v-bind:positions="positionStore.data"
               v-bind:class="currentModal === 'positions' ? '' : 'hidden'"
               v-on:close="triggerModal"/>

    <AddItem class="modal"
             v-bind:positions="positionStore.data"
             v-bind:class="currentModal === 'addItem' ? '' : 'hidden'"
             v-on:add-income="handleIncomeForms"
             v-on:close="triggerModal"/>
  </div>
  <Header class="header" v-on:call-window="triggerModal"/>
  <Main class="main" v-on:call-window="triggerModal"/>
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
import AddItem from './components/windows/AddItem.vue';
import { IncomeAddFormInterface } from './lib/income/IncomeAddFormInterface';

export default defineComponent({
  name: 'App',
  components: {
    AddItem,
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
    positionStore: {} as PositionStore,
    positions: [] as Array<PositionInterface>,
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

    this.latestPositionId = positionsData.latestId as number;
    this.positionStore = new PositionStore(positionsData.elements as Array<PositionInterface>);
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
        elements: this.positionStore.data
      });
      this.storage.saveData();
    },
    removePosition(id: number) {
      this.positionStore.remove(id);

      this.storage.setElement('positions', {
        latestId: this.latestPositionId,
        elements: this.positionStore.data
      });
      this.storage.saveData();
    },
    handleIncomeForms(forms: Array<IncomeAddFormInterface>) {
      this.storage.setElement('income', {})
      console.log(forms);
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
  border-radius: 4px;
}

.header {
  width: calc(100vw - 20px);
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
