import React, { useState } from 'react';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container reveal">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item" onClick={() => toggleFAQ(0)}>
        <div className="faq-question"> <span>What is Immerse?</span> <span className='arrow'>&#9662;</span> </div>
        <div className={`faq-answer ${activeIndex === 0 ? 'active' : ''}`}>
          Immerse is an innovative interactive learning platform that allows users to explore a wide variety of subjects through immersive 3D environments.
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(1)}>
        <div className="faq-question"><span>What courses are available on Immerse?</span> <span className='arrow'>&#9662;</span></div>
        <div className={`faq-answer ${activeIndex === 1 ? 'active' : ''}`}>
          Immerse offers courses in subjects like Mathematics, Biological Science, Rocket Science, Architecture, Electronics, Physics, and more.
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(2)}>
        <div className="faq-question"><span>How does the Immerse subscription work?</span><span className='arrow'>&#9662;</span>  </div>
        <div className={`faq-answer ${activeIndex === 2 ? 'active' : ''}`}>
          A subscription to Immerse gives you unlimited access to a library of immersive 3D courses, allowing you to learn at your own pace while exploring interactive environments.
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-question"><span>What technologies are used in Immerse?</span><span className='arrow'>&#9662;</span> </div>
        <div className={`faq-answer ${activeIndex === 3 ? 'active' : ''}`}>
          Immerse utilizes advanced technologies such as Virtual Reality (VR), Augmented Reality (AR), and interactive 3D graphics to provide an engaging learning experience.
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(4)}>
        <div className="faq-question"><span>Can I create my own courses on Immerse?</span> <span className='arrow'>&#9662;</span> </div>
        <div className={`faq-answer ${activeIndex === 4 ? 'active' : ''}`}>
          Yes, Immerse allows teachers and experts to create their own interactive courses using 3D creation tools to deliver a more engaging learning experience.
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
