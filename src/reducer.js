export default (oldState = {value: 0}, action) => {
	switch(action.type){
		case "INCREMENT":
			return {value: value+1};
		case "DECREMENT":
			return {value: value-1};
		default:
			return oldState;
	}
}