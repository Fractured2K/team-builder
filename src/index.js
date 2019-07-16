import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// Components
import TeamMemberList from './components/TeamMemberList';
import Form from './components/Form';

function Index() {
	const [members, addMember] = useState([
		{
			id: 1,
			name: 'John',
			email: 'john@dough.com',
			role: 'Front-end Developer'
		},
		{
			id: 2,
			name: 'Jane',
			email: 'jane@dough.com',
			role: 'Back-end Developer'
		}
	]);

    const [isEditing, setIsEditing] = useState(false)
    const [editMember, setEditMember] = useState();

    console.log(members)

	return (
		<div className="App">
			<TeamMemberList
				members={members}
				setEditMember={setEditMember}
                setIsEditing={setIsEditing}
			/>
			<Form
				members={members}
				addMember={addMember}
				editMember={editMember}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
			/>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);
