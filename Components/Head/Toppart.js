import React from 'react';
import './Toppart.css';

const Top = () => {

    const handleScroll=()=> {
        window.scroll({
            top: 800,
            left: 0,
            behavior: 'smooth',
        });
    }
    return (
        <section class="toppart">
            <div class ="top-box">
                <div class="container">
                    <h1 class="headtag">
                        Hello, my name is <span class="top-name">Gokul</span><span>👨🏻‍💻</span>
                        <br />
                        I'm a Full Stack Developer.
                    </h1>
                </div>
                <p class="head-para">
                    <button class=" head-ancor" type="button" onClick={handleScroll} >Know More</button>
                </p>
            </div>
        </section>
    );
};

export default Top;