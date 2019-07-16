import React from 'react';

export default function TeamMember(props) {

	function editMember() {
		props.setIsEditing(true)
		props.setEditMember(props.member)
	}

	return (
		<div className="card">
			<li>Name: {props.member.name}</li>
			<li>Email: {props.member.email}</li>
			<li>Role: {props.member.role}</li>
			<button
				onClick={editMember}
			>
				Edit
			</button>
		</div>
	);
}
