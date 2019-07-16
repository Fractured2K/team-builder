import React, { useEffect } from 'react';

// Hooks
import { useForm } from '../hooks/useForm';

export default function Form(props) {
	const [state, handleChanges, handleSubmit, setState] = useForm(
		{
			name: '',
			email: '',
			role: ''
		},
		handleTeamMember
	);

	function handleTeamMember() {
		if(!props.isEditing) {
			const id = props.members[props.members.length - 1].id + 1;
			props.addMember([...props.members, { id, ...state }]);
		} else {
			const filteredTeamMembers = props.members.filter(member => member.id !== state.id)
			props.addMember([...filteredTeamMembers, state])
			props.setIsEditing(false)
		}
	}
	console.log(state)

	useEffect(() => {
		return props.editMember && setState(props.editMember)
	}, [props.editMember]);

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="name"
				placeholder="Name"
				value={state.name}
				onChange={handleChanges}
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={state.email}
				onChange={handleChanges}
			/>
			<input
				name="role"
				placeholder="Role"
				value={state.role}
				onChange={handleChanges}
			/>
			<button>{ props.isEditing ? 'Edit member' : 'Add member'}</button>
		</form>
	);
}
