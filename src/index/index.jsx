import React from 'react';
import { NavLink } from 'react-router-dom';

export function Index() {
  return (
    <main>
        <div className="card bg-dark text-white">
            <img src="https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="Image 0"/>
            <div className="card-img-overlay d-flex justify-content-center align-items-center" style={{'backgroundColor': 'rgba(0, 0, 0, 0.3)'}}>
                <div className="text-center">
                    <h1 className="card-title"> Find your Family</h1>
                    <p className="card-text d-none d-sm-block">
                    Discover your Food
                    </p>
                    <NavLink to="login"><button type="button" className="btn btn-primary">Get started</button></NavLink>
                </div>
            </div>
        </div>
        <div className="card-group">
            <div className="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
            <div className="card-body">
                <h5 className="card-title">Learn from your Family Group</h5>
                <p className="card-text">
                You can create a family to share your stories and food.
                </p>
            </div>
            </div>
            <div className="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road"/>
            <div className="card-body">
                <h5 className="card-title">Share the love</h5>
                <p className="card-text">We all know that grandma had the best food. Share the recipe with your family wherever they are.</p>
            </div>
            </div>
            <div className="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers"/>
            <div className="card-body">
                <h5 className="card-title">Friends and Family</h5>
                <p className="card-text">
                Your friends are family too. Create a family group with your friends and share food with each other.
                </p>
            </div>
            </div>
        </div>
            <div className="card text-center">
                <div className="card-header"></div>
                <div className="card-body">
                <h5 className="card-title">What are you waiting for?</h5>
                <p className="card-text">Your story begins now!</p>
                <NavLink to="createaccount" className="btn btn-primary">Create Account</NavLink>
                </div>
        </div>
    </main>
  );
}