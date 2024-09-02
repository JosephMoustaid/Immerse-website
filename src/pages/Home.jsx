import React from 'react';
import poepleLearning from '../assets/images/peopleLearning.webp';

import CreativeLearning from "../components/CreativeLearning";
import CourseList from "../components/CourseList";
import Carousel from "../components/Carousel.jsx";
import FAQComponent from '../components/FAQComponent.jsx';
import Opinions from "../components/Opinions.jsx";
function Home() {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <div className="hero bg-black">
                <div className="hero-content">
                    <h1>Transform Your Learning Experience with 3D Education</h1>
                    <p>Explore immersive 3D courses designed to take your skills to the next level.</p>
                    <a href="#" className="btn btn-primary btn-lg fw-bolder">Start Learning Now!</a>
                </div>
                <iframe
                    src="https://my.spline.design/roomrelaxingcopy-c45fff99ad0b96314bb2a73295782561/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="hero-spline"
                    allow="fullscreen"
                    title="3D Model"
                ></iframe>
            </div>


            <CreativeLearning />
            <div className='bg-black'><CourseList /></div>
            
            <div className='bg-black'><Carousel /></div>

            <div className='bg-black'><FAQComponent /></div>

            <div className='bg-black'><Opinions /></div>

            <div className="bg-black ">
                <div className='groupes'>
                    <div >
                        <div className="pour-groupes" >
                            <h1>Immerse pour les groupes</h1>
                            <p>Propulsez votre équipe vers de nouveaux sommets avec un apprentissage immersif, conçu pour stimuler le développement personnel et professionnel de chacun.</p>
                            <p>Avec une variété de cours captivants sur les compétences interpersonnelles, les fondamentaux du business, le bien-être, et bien plus encore, Immerse offre à votre équipe un accès direct à une expertise approfondie et des connaissances enrichissantes. </p>
                            <a href="#" className='learn-more'>Learn more                            </a>
                        </div>
                        <div ><img src={poepleLearning} alt="perople Learning" /></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
