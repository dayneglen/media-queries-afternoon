import React from 'react';
import './Main.css';

const Main = () => {
    return(
        <section className='welcome-section'>
            <section className='welcome-container container'>
                <h2 className='welcome'>Welcome To Our Studio!</h2>
                <h1 className='welcome-greeting'>It's nice to meet you</h1>
                <button className='yellow-btn'>Tell Me More</button>
            </section>
        </section>
    )
}

export default Main;