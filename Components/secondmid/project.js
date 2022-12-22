import './projects.css'
import netflix from '../../assets/netflix.jpg';
import lucky from '../../assets/luck.jpg';
import todo from '../../assets/list.jpg';
const pro = () => {
  return (
    
      <section class="project-overall">
        <h1 class="project-head">PROJECTS</h1>

        <div class="project-container">

          <div className='first-project'>
            <h1 className='project-title'>Netflix Clone</h1>
            <img className="project-img" src={netflix} alt="p1"></img>
            <div className='para-button'>
              <p className='common-project-para'> A simplified front end clone of Netflix Web Application using React,HTML and CSS.<br />
              <p>TMDB database an online api for movies</p>
              </p>

              <div className='project-buttons'>
                <a className='button-1' href='https://cheery-kulfi-7048f5.netlify.app/'>See Live</a>
                <a className='button-2' href='https://github.com/Gokulmazz/Netflix_Clone'>View Code</a>
              </div>
            </div>
          </div>

          <div className='first-project'>
            <h1 className='project-title'>How Lucky Are You </h1>
            <img className="project-img" src={lucky} alt="p1"></img>
            <div className='para-button'>
            <p className='common-project-para'>Test your Hard luck on this guessing game developed using Java script,HTML and CSS.</p>

            <div className='project-buttons'>
              <a className='button-1' href='https://unique-taffy-13f5de.netlify.app/'>See Live</a>
              <a className='button-2' href='https://github.com/Gokulmazz/How-lucky-you-are'>View Code</a>
            </div>
            </div>

          </div>

          <div>
            <h1 className='project-title'>To Do List</h1>
            <img className="project-img" src={todo} alt="p1"></img>
            <div className='para-button'>
            <p className='common-project-para'>Having Trouble on Oraganizing tasks ?<br />
            <p> Use this simple to do list to make it clean and simple  </p>
            </p>
            <div className='project-buttons'>
              <a className='button-1' href='https://gokulmazz.github.io/To-Do-List/'>See Live</a>
              <a className='button-2' href='https://github.com/Gokulmazz/To-Do-List'>View Code</a>
            </div>
          </div>
          </div>
        </div>

      </section>
    

  );
}

export default pro;