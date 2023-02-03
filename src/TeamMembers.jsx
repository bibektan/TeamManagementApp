import TeamMemberCard from './TeamMemberCard'

const TeamMembers = ({employees, selectedTeam, handleEmployeeCardClick}) => {
    return(
        employees.map((emp) => 
            <TeamMemberCard key={emp.id} emp={emp} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} />
        )
    )
}

export default TeamMembers