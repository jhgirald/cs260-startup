import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Index } from './index/index';
import { Main } from './main/main';
import { Login } from './login/login';
import { Createaccount } from './createaccount/createaccount';
import { Chats } from './chats/chats';
import { Groups } from './groups/groups';
// import { Notifications } from './notifications/notifications';
// import { Profile } from './profile/profile';
import { Chat } from './chat/chat';
import { useLocation } from 'react-router-dom';

let isLandingPage = false;
function CheckLocation(){
    // const location = useLocation();
    if(location.pathname == '/'){

        isLandingPage = true;
        // console.log(isLandingPage);

    }
    // useEffect(()=>{
    //     const isInSpecialRoutes =
    //     location.pathname === '/' ||
    //     location.pathname === '/login' ||
    //     location.pathname === '/createaccount';
    //     if (isInSpecialRoutes == true) {
    //         isLandingPage = false;
    //     }
    //     else{
    //         isLandingPage = true;
    //     }});
    return Header(isLandingPage);
}
const Header = ({ isLandingPage }) => {
    const location = useLocation();
    console.log(isLandingPage);
    console.log(location.pathname);

    if(location.pathname == '/' || location.pathname == '/login' || location.pathname == '/createaccount'){
        return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="container-fluid">
                <NavLink className='nav-link' to='main'>
                    <span className="navbar-brand mb-0 h1">FamilyMade</span>
                </NavLink>
                </div>
            </div>
    
            <div className="d-flex align-items-center">
                <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart"></i>
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className='nav-link' to='login'>
                    Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link text-nowrap' to='createaccount'>
                    Create Account
                    </NavLink>
                </li>
                </ul>
            </div>
            </nav>
        </header>
        );
    }
    else{
        return (
            
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">
          <div className="container-fluid">
            <NavLink className='nav-link' to='main'>
                <span className="navbar-brand mb-0 h1">FamilyMade</span>
            </NavLink>
          </div>
          </div>

      

          <div className="d-flex align-items-center">

            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="groups">Groups</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="chats">Chats</NavLink>
                </li>
              </ul>

            <div className="container-fluid">
              <NavLink
                className="d-flex align-items-center"
                to="profile"
                id="Avatar"
                role="button"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="35"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </NavLink>
            </div>
          </div>
      </nav>
      </header>
      );
    }
  };
export default function App() {
    
    
    
  return (
    <BrowserRouter>

    <div>
        <Helmet>
            <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.8/js/brands.js"
            crossorigin="anonymous"
            />
            <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js"
            crossorigin="anonymous"
            />
        </Helmet>
        <CheckLocation/>
        <Routes>
            <Route path='/' element={<Index />} exact />
            <Route path='/chats' element={<Chats />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/createaccount' element={<Createaccount />} />
            <Route path='/login' element={<Login />} />
            <Route path='/main' element={<Main />} />
            <Route path='/groups' element={<Groups />} />

            {/* <
            
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Index />} /> */}
        </Routes>
        <footer className="bg-dark text-center text-white">

            <div className="container p-4 pb-0">

                <section className="mb-4">    

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/jose-humberto-giraldez-69b45528a/" role="button">
                    <i className="fab fa-linkedin-in"></i>
                    </a>
    

                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/jhgirald/cs260-startup" role="button">
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>
            <div className="text-center p-3" style={{'backgroundColor' : 'rgba(0, 0, 0, 0.2)'}}>
                © 2023 Copyright:
                <a className="text-white">Humberto Giraldez</a>
            </div>

        </footer>
        
    </div>
    </BrowserRouter>
  );
}