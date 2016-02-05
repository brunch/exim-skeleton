import Exim from 'exim';

export default Exim.createStore({
  actions: ['increment', 'decrement'],

  initial: { count: 0 },

  increment() {
    this.set({ count: this.get('count') + 1 });
  },

  decrement() {
    this.set({ count: this.get('count') - 1 });
  }
})
