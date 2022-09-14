import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const style = {
    justifyContent: "initial"
}

export default function Navbar(propsNav) {
    console.log(propsNav.mode)
    return (
        <>
            <nav className={`navbar bg-${propsNav.mode === 'light' ? 'info' : 'dark'} navbar-dark`} id='navbar'>
                <div className="container-fluid" style={style}>
                    <span className="navbar-brand mb-0 h1">{propsNav.name}</span>
                    <span className="navbar-brand mb-0 h1">{propsNav.base}</span>
                    <Link className="navbar-brand mb-0 h1" to="/First-React-App/about">About</Link>
                    <Link className="navbar-brand mb-0 h1" to="/First-React-App/textarea">TextArea</Link>
                    <div id="colors">
                        <p>Dark modes</p>
                        <div className="form-check">
                            <input className="form-check-input green radio" type="radio" id="purpleSwitch" onClick={() => { propsNav.toggleColor('rgb(58,59,60)') }} name='radio' />
                            <label className="form-check-label" htmlFor="purpleSwitch" >Black</label>
                        </div>
                        <div className="form-check mx-4">
                            <input className="form-check-input radio" type="radio" id="blueSwitch" onClick={() => { propsNav.toggleColor('rgb(3,48,93)') }} name='radio' />
                            <label className="form-check-label " htmlFor="blueSwitch">blue</label>
                        </div>
                        <div className="form-check mx-1">
                            <input className="form-check-input radio" type="radio" id="blueSwitch" onClick={() => { propsNav.toggleColor('rgb(12,68,41)') }} name='radio' />
                            <label className="form-check-label " htmlFor="blueSwitch">Green</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

// PropTypes is setting data-types for props.

// isRequired means it is must and cannot be blank.
Navbar.propTypes = {
    name: PropTypes.string.isRequired,
    base: PropTypes.string,
    mode: PropTypes.string.isRequired
};

// Default values of props in-case no props are passed.
Navbar.defaultProps = {
    name: 'This is the default value of name.',
    base: 'This is the default value of base.',

}
