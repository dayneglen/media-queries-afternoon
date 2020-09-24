import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            menu: false
        }
    }

    slide = () => {
        this.setState({menu: !this.state.menu});
    }


    render() {
        return(
            <header className='header-bar'>
                <nav className='nav-container container'>
                    <h1 className='header-title'>Start Bootstrap</h1>
                    <button onClick={this.slide}className='menu-btn'>
                        <p className='menu-title'>Menu</p>
                        <h2 className='hamburger-menu'>&#9776;</h2>
                    </button>
                    <section className='full-menu'>
                        <a href='https://www.google.com'>Services</a>
                        <a href='https://www.google.com'>Portfolio</a>
                        <a href='https://www.google.com'>About</a>
                        <a href='https://www.google.com'>Team</a>
                        <a href='https://www.google.com'>Contact</a>
                    </section>
                </nav>
                <section className={this.state.menu ? 'menu slide' : 'menu'}>
                    <nav className='menu-nav container'>
                        <a href='https://www.google.com'>Services</a>
                        <a href='https://www.google.com'>Portfolio</a>
                        <a href='https://www.google.com'>About</a>
                        <a href='https://www.google.com'>Team</a>
                        <a href='https://www.google.com'>Contact</a>
                    </nav>
                </section>
            </header>
        )
    }
}

export default Header;