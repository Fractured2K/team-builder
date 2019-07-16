import React from 'react';

// Components
import TeamMember from '../components/TeamMember';

export default function TeamMemberList(props) {
	return (
		<ul>
			{props.members.sort((a,b) => a.id - b.id).map(member => (
				<TeamMember
					key={member.id}
					member={member}
					setEditMember={props.setEditMember}
					setIsEditing={props.setIsEditing}
				/>
			))}
		</ul>
	);
}
