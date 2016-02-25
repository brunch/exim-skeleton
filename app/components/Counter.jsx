import React from 'React';
import Exim from 'exim';
import CounterStore from 'stores/counter';

export default Exim.createView({
  mixins: [CounterStore.connect('count')],

  onPlusClick() {
    CounterStore.actions.increment();
  },

  onMinusClick() {
    CounterStore.actions.decrement();
  },

  render() {
    return (
      <div>
        <h2>Exim Counter:</h2>
        <p>
          <button onClick={this.onMinusClick}>-</button>
          {this.state && this.state.count}
          <button onClick={this.onPlusClick}>+</button>
        </p>
      </div>
    );
  }
})
