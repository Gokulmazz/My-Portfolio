import './certify.css';
import htmlbadge from '../../assets/html.png';
import cssbadge from '../../assets/css.png';
import javascript from '../../assets/js.png';
import hacker from '../../assets/hacker rank.png';
import udemy from '../../assets/udemy-app.png';
import great from '../../assets/greatlearn.jpg';
import jscert from '../../assets/java script.pdf';
import html from '../../assets/Html and css.pdf';
import dscertify from '../../assets/data structure.pdf';
const certifys = () => {
    return (
        <section className='temp'>
            <h1 className='certify-head'>CERTIFICATIONS</h1>
            <div class='certify-container'>
                <div class="box-1">

                    <a href={html}><img class="cer-badge" src={htmlbadge} alt="none"></img></a>

                    <p className='certify-para'>Certified Html developer by Lets Upgrade</p>
                </div>

                <div class="box-2">
                    <a href={html}> <img class="cer-badge" src={cssbadge} alt="none"></img></a>

                    <p className='certify-para'>Certification on CSS by Lets Upgrade</p>

                </div>

                <div class="box-3">
                    <a href={jscert}>
                        <img class="cer-badge" src={javascript} alt="none"></img>
                    </a>

                    <p className='certify-para'>Certified Java script, react developer by Lets Upgrade</p>

                </div>
                <div class="box-3">
                    <a href='https://www.hackerrank.com/certificates/iframe/d96cfe9d6fbb'><img class="cer-badge" src={hacker} alt="none"></img></a>

                    <p className='certify-para'>Passed Java and Mysql skill assessment on HackerRank</p>

                </div>
                <div class="box-3">
                    <a href='https://udemy-certificate.s3.amazonaws.com/image/UC-5fef4d2a-1ba1-4b68-803e-2e016b836286.jpg'><img class="cer-badge" src={udemy} alt="none"></img></a>

                    <p className='certify-para'>Certified Fullstack developer by Udemy</p>

                </div>
                <div class="box-3">
                    <a href={dscertify}><img class="cer-badge" src={great} alt="none"></img></a>

                    <p className='certify-para'>Basic Data Structure and Algorithm by Great Learning</p>

                </div>
            </div>

        </section>
    );
}

export default certifys;