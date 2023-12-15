import React, { useEffect } from 'react';
import './main.css';
import { classStuffA } from './mainScript';

function load(){
    classStuffA.loadPopup();
    classStuffA.quote();
    classStuffA.loadRLRecipes();
}
function close(){
    classStuffA.closePopup();
}
export function Main() {
    useEffect(() => {
        load();
    })
  return (
    <main className=''>
            <div className="popup-container" id="welcomePopup">
            <h2 id="welcome_text">Welcome!</h2>
            <p id="welcome_quote"></p>
            <p id="quote_author"></p>
            <button onClick={() => close}>Close</button>
            </div>

            <div className="overlay" id="overlay" onClick={() => close} ></div>
        <div className="card bg-dark text-white">
            <img src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="Image 0"/>
            <div className="card-img-overlay d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <div className="text-center">
                    <h1 className="card-title"> Keep your family food connected</h1>
                    <p className="card-text d-none d-sm-block">
                        Together food always tastes better. Ready to discover your family food?
                    </p>
                    {/* <a href="groups.html"><button type="button" className="btn btn-primary">Let's do this</button></a> */}
                </div>
            </div>
        </div>


      
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3 h-100">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-a-bowl-of-ramen-with-chopsticks-and-eggs.jpeg"
                                    alt="Image 1"
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <h5 className="card-title" id="leftRecipeTitle">Food title</h5>
                                    <p className="card-text" id="leftRecipeInstructions">
                                        This will show the description of the recipe.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="col-md-6">
                <div className="card mb-3 h-100">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Image 2"
                                className="img-fluid rounded-start"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" id="rightRecipeTitle">Food title</h5>
                                <p className="card-text" id="rightRecipeInstructions">
                                    This will show the description of the recipe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
  );
}