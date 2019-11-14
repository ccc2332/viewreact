import Immutable from 'Immutable'
let $$initialState = {
	data: []
};

let  reducer = ($$state = Immutable.fromJS($$initialState), action) => {
	switch (action.type) {

		case 'APP_GETTABLEDATA':
			return $$state.merge({
				data: action.content.data,
			})
		
		default:
			return $$state;
	}
};

export default  reducer;