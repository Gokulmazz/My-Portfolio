import uparrow from '../../assets/arrow.png';
import github from '../../assets/github.png';
import linked from '../../assets/linkdin.png';
import twit from '../../assets/twitter.png'
import './media.css'
const last = () => {
  
    const scrollTop=()=>
    {
        window.scroll({
            top:0,
            behavior:'smooth',
     });

    }
    return (

       
        <footer className='footer-top'>
            <div className='footer-container'>
                <div className='footer-top-div'>
                    <a onClick={scrollTop}><img className='arrow' src={uparrow}></img></a>
                </div>
                <hr />
                <div className='footer-bottom-div'>
                    <a href="https://github.com/Gokulmazz"><img id='git' className='links' src={github}></img></a>
                    <a href='https://www.linkedin.com/in/gokul-sivakumar-a04222196/'><img id='link' className='links' src={linked}></img></a>
                    <a href='https://twitter.com/GokulSivakumar_'><img id='twit' className='links' src={twit}></img></a>
                </div>
            </div>
        </footer>
    );
}

export default last;