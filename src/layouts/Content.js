import '../css/content.css';
import '../css/rightPart.css';
import '../css/leftPart.css';
import { Link } from "react-router-dom";


function Content(props) {
  return (
    <div className='principalContainer'>
      <div className='smallContainer'>
        <NavMenu />
        <PrincipalContent>
          {props.children}
        </PrincipalContent>
      </div>
    </div>
  )
}

function NavMenu(props) {
  return (
    <div className='navMenu'>
      <div className="logo"><p>magnificat</p></div>
      <div className='search'> 
        <form>
          <input type='text' className='form-search' placeholder='Search' color='#ffffff' />
          <button type='submit' className='btnSub'>Rechercher</button>
        </form>
      </div>
      <div className='user'>
        <div className='username'><p>@ Davin</p></div>
        <div className='logout'><div>Deconnexion</div></div>
      </div>

    </div>
  )
}

function PrincipalContent(props) {
  return (
    <div className='content'>
      <LeftPart />
      <RightPart>
        {props.children}
      </RightPart>
    </div>
  )
}

function LeftPart(props) {
  return (
      <div className='leftPart'>
     <List  title='Pharmacie' id='home'>
        <li>
          <Link to='/'>DashBoard</Link>
        </li>
        <li>
          <Link to='/listMedicament'>List Medicament</Link>
        </li>
        <li>
          <Link to='/ajout'>Stock</Link>
        </li>
        <li>
          <Link to='/pointDeVente'>point de vente</Link>
        </li>
        <li>
          <Link to='/admin'>Administration</Link>
        </li>
     </List>

     <List  title='Autre'/>

     <div className='footer'>
      <p>develope by hunumex</p>
      <p className='copyright'> 2021</p>
     </div>

     
    </div>


  )
}

function List (props) {
  return (
    <div className="list">
      <div className='index'><p>{props.title}</p></div>
        <ul>
          {props.children}
        </ul>

     </div>
  )
}

function RightPart(props) {
  return (
    <div className='rightPart'>
      {props.children}
    </div>
  )
}
export function Block (props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}


export default Content