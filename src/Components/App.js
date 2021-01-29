import '../css/App.css'
import RightPart from './Contents'


function App(props) {
  return (
    <div className='principalContainer'>
      <div className='smallContainer'>
        <NavMenu />
        <Content />
      </div>
    </div>
  )
}

function Content(props) {


  return (
    <div className='content'>
      <LeftPart />
      <RightPart />
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

function LeftPart(props) {
  return (
    <div className='leftPart'>
     <List  title='Pharmacie' id='home'>
        <li><a href='#dash'>DashBoard</a></li>
        <li><a href='#list'>List Medicament</a></li>
        <li><a href='#admin'>Administration</a></li>
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

export default App