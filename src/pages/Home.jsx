import React from 'react';
import poepleLearning from '../assets/images/peopleLearning.webp';

import CreativeLearning from "../components/CreativeLearning";
import CourseList from "../components/CourseList";
import Carousel from "../components/Carousel.jsx";
import FAQComponent from '../components/FAQComponent.jsx';
import Opinions from "../components/Opinions.jsx";
import VR from "../assets/VR2.jpg";
import VRLab from "../assets/VR_lab.jpg";
import Headset from "../assets/images/headset.avif";

import splineModel from "../assets/images/splineModel.jpg";

function Home() {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <div className="hero bg-black">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="hero-content "  style={{width:"100%",objectFit:"cover", marginTop:"20%"}}>
                            <h1>Transform Your Learning Experience with 3D Education</h1>
                            <p>Explore immersive 3D courses designed to take your skills to the next level.</p>
                            <a href="#" className="btn btn-primary btn-lg fw-bolder">Start Learning Now!</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <img src={splineModel} className='hero-spline' style={{width:"100%",objectFit:"cover"}} alt="3D model" />
                    </div>
                <div>
            </div>
                </div>
                {/*}
                <iframe
                    src="https://my.spline.design/roomrelaxingcopy-c45fff99ad0b96314bb2a73295782561/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="hero-spline"
                    allow="fullscreen"
                    title="3D Model"
                ></iframe>
                */}
            </div>


            <CreativeLearning />
            <div className='bg-black'><CourseList /></div>
            
            <div className='bg-black'><Carousel /></div>

            <div className="bg-black">
                <img src={VR} style={{width:"100%", maxHeight:"300px", objectFit:"cover"}} alt="" />
            </div>

            <div className='bg-black' id='faq'><FAQComponent /></div>

            <div className='bg-black'><Opinions /></div>
            <div className="bg-black">
            <div className='groupes'>
                    <div>
                        <div className="pour-groupes reveal">
                            <h1>Immerse for Teams</h1>
                            <p>Elevate your team to new heights with immersive learning experiences designed to enhance both personal and professional development.</p>
                            <p>With a wide range of captivating courses covering leadership, business fundamentals, wellness, and more, Immerse gives your team access to expert knowledge and enriching learning experiences.</p>
                            <a href="#" className='learn-more'>Learn more</a>
                        </div>
                        <div>
                            <img className='reveal' src={poepleLearning} alt="People Learning" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black">
                <div className='groupes lab'>
                    <div>
                        <div>
                            <img className='reveal' src={VRLab} alt="Virtual Reality Lab" />
                        </div>
                        <div className="pour-groupes reveal ps-5">
                            <h1>Immerse for Groups</h1>
                            <p>Empower your group with immersive learning experiences, designed to unlock personal growth and collective potential.</p>
                            <p>From interpersonal skills to business strategies and mental wellness, Immerse provides your group with direct access to transformative education and cutting-edge expertise.</p>
                            <a href="#" className='learn-more'>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black">
                <div className='groupes'>
                    <div>
                        <div className="pour-groupes reveal">
                            <h1>Are you ready to transform the way you learn?</h1>
                            <p>Take the next step in revolutionizing your team's learning with immersive 3D courses that foster deep engagement and knowledge retention.</p>
                            <p>Immerse offers personalized learning paths in areas such as soft skills, professional development, and well-being, helping your team reach its full potential.</p>
                            <a href="#" className='learn-more'>Learn more</a>
                        </div>
                        <div>
                            <img className='reveal hover-up-down' src={Headset} alt="Virtual Reality Headset" />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Home;
