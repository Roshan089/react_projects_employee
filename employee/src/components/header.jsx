const Header= (props) =>{

    return(
   <header>
    <h1>Team Allocation</h1>
    <h3> {props.selectedTeam} is {props.teamCount}</h3>
   </header>
    )
 }
 export default Header
 
 