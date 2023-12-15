import React from 'react';
import { createA } from './script';
import { redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

 export function Createaccount() {
    const navigate = useNavigate();
    let a = false;

    function B(aa){
        console.log(aa);
    if(aa == true){
        navigate('/main');
        // return (<NavLink to='/main'><button className='btn btn-primary' type='button'>Success Click To Enter</button></NavLink>);
    }
    else{
        return;
    }
}
    async function Create() {
        console.log("increate");
        a = await createA.createAccount();
        if (a == true){
            a =true;
            B(a);

        } 
     }
  return (
    <main>
      <div className="container mt-5">
      <div className="row justify-content-center">
          <div className="col-md-6">
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title text-center">Create account</h5>
                      <form>
                          <div className="mb-3">
                              <label htmlFor="username" className="form-label">Username</label>
                              <input type="text" className="form-control" id="username" name="username" required></input>
                          </div>
                          <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password</label>
                              <input type="password" className="form-control" id="password" name="password" required></input>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="repassword" className="form-label">Type password again</label>
                            <input type="password" className="form-control" id="repassword" name="repassword" required></input>
                        </div>
                          <a><button type="button" onClick={() => Create()} className="btn btn-primary">Create</button></a>
                          {/* <B aa={a}/> */}
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </main>
  );
}
