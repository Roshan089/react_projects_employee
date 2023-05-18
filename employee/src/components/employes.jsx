
import imag1 from "./femaleProfile.jpg";

import imag2 from "./maleProfile.jpg";

const Employes = ({handleteamSelection ,selectedTeam
  ,handleemployeeCardclick, employees}) => {
  

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg"  value={selectedTeam} onChange={handleteamSelection}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>

          <div className="card-collection" >
            {employees.map((employee) => (
              <div
                key={employee.id}
                
                id={employee.id}
                className={(employee.teamName===selectedTeam?'card m-2 standout': 'card m-2')}
                style={{ cursor: "pointer" }}
                onClick={(e) => handleemployeeCardclick(e)}
              
              >

                {employee.gender === "female" ? (
                  <img src={imag1} id={employee.id} />
                ) : (
                  <img src={imag2} id={employee.id}/>
                )}

                <div className="card-body">
                  <h5 className="card-title">{employee.fullName}</h5>
                  <p className="card-text">
                    degination is : {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Employes;
