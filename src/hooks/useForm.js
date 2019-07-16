import { useState } from 'react';

export function useForm(initialState, callback) {
	const [state, setState] = useState(initialState);

	function handleChanges(e) {
		setState({ ...state, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		callback();
		setState(initialState);
	}

	return [state, handleChanges, handleSubmit, setState];
}
