import './Midpart.css';
import photo from '../../assets/photo.jpeg';
import cv from '../../assets/Gokul sivakumar CV.pdf';

const Mid = () => {
  
    

    return (

        <section class="mid-out-container">
            <div class="mid-container">
                <div>
                    <h1 class="about-title" >ABOUT ME</h1>
                </div>
                <div>
                    <img class="profilepic" src={photo} alt='image' ></img>
                </div>
                <div class="mid-para font-effect-emboss">
                        <p> Passionate fullstack developer,who likes to play in developing scalable websites <br />
                            using wide range of front-end and back-end skills like HTML,CSS,Java and Java script etc.
                            <br /> 
                            Looking further to enhance React js as the future fullstack developer.
                            <br/>
                            
                            With each line of code, I strive to make the web a beautifull place.

                    </p>
                    <a class="mid-button" href={cv} target='_blank'>View Resume</a>
                </div>
            </div>
        </section>
    );
}

export default Mid;