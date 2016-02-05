import React from 'React';
import Exim from 'exim';
import counterStore from 'stores/counter';

export default Exim.createView({
  mixins: [counterStore.connect('count')],

  onPlusClick() {
    counterStore.actions.increment();
  },

  onMinusClick() {
    counterStore.actions.decrement();
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
