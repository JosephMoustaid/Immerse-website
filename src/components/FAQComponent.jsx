import React, { useState } from 'react';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container reveal">
      <h2>Questions fréquemment posées</h2>
      <div className="faq-item" onClick={() => toggleFAQ(0)}>
        <div className="faq-question"> <span>Qu'est-ce que Skillshare ?</span> <span className='arrow'>&#9662;</span> </div>
        <div className={`faq-answer ${activeIndex === 0 ? 'active' : ''}`}>
          Skillshare est une communauté d'apprentissage en ligne proposant des milliers de cours...
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(1)}>
        <div className="faq-question"><span>Qu'est-ce qui est inclus dans mon abonnement Skillshare ?</span> <span className='arrow'>&#9662;</span></div>
        <div className={`faq-answer ${activeIndex === 1 ? 'active' : ''}`}>
          Votre abonnement Skillshare inclut un accès illimité à tous les cours...
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(2)}>
        <div className="faq-question"><span>Que puis-je apprendre sur Skillshare ?</span><span className='arrow'>&#9662;</span>  </div>
        <div className={`faq-answer ${activeIndex === 2 ? 'active' : ''}`}>
          Skillshare propose des cours sur une variété de sujets...
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-question"><span>Que se passe-t-il une fois mon essai terminé ?</span><span className='arrow'>&#9662;</span> </div>
        <div className={`faq-answer ${activeIndex === 3 ? 'active' : ''}`}>
          Une fois votre essai terminé, vous devrez choisir un abonnement payant...
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(4)}>
        <div className="faq-question"><span>Puis-je enseigner sur Skillshare ?</span> <span className='arrow'>&#9662;</span> </div>
        <div className={`faq-answer ${activeIndex === 4 ? 'active' : ''}`}>
          Oui, Skillshare vous permet de partager vos compétences en tant qu'enseignant...
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
