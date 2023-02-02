import femaleProfile from './assets/femaleProfile.jpg'
import maleProfile from './assets/maleProfile.jpg'

const Employees = ({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}) =>{
    
    return (
        <main className="container">

            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>

            <div className="row justify-content-center mt-3 mb-3">
                {
                    employees.map((emp) => 
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
            </div>
        </main>
    )
}

export default Employees