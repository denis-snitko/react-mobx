import { makeAutoObservable } from 'mobx';

class CounterStore {
	constructor() {
		makeAutoObservable(this);
	}

	count = 0;

	increment = (value) => {
		this.count += value;
	};

	decrement = (value) => {
		this.count -= value;
	};
}

export const counterStore = new CounterStore();
