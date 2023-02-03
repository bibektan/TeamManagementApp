import femaleProfile from './assets/femaleProfile.jpg'
import maleProfile from './assets/maleProfile.jpg'

const TeamMemberCard = ({emp, selectedTeam, handleEmployeeCardClick})=>{
    return(
        <div key={emp.id} className="col-lg-3 col-md-4 col-sm-6">
            <div id={emp.id} className={(emp.teamName === selectedTeam) ? 'card m-2 standout': 'card m-2'} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                {
                    emp.gender === 'male' ? <img src={maleProfile} className="card-img-top" />
                    : <img src={femaleProfile} className="card-img-top" />
                }
                <div className="card-body">
                    <h5 className="card-title">Full Name: {emp.fullName}</h5>
                    <p className="card-text">Designation: {emp.designation}</p>
                </div>
            </div>
        </div>      
    )
}

export default TeamMemberCard