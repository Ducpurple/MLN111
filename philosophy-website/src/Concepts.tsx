
import React from 'react';

const Concepts: React.FC = () => {
  return (
    <section id="concepts" className="p-5 bg-light">
      <div className="container">
        <h2>Key Philosophical Concepts</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Idealism (Chủ nghĩa duy tâm)</h5>
            <p>The metaphysical view that reality is all in the mind, that everything that exists is in some way dependent on the mind or consciousness.</p>
          </li>
          <li className="list-group-item">
            <h5>Materialism (Chủ nghĩa duy vật)</h5>
            <p>The view that all that exists is matter or energy; that all things are composed of material and all phenomena (including consciousness) are the result of material interactions.</p>
          </li>
          <li className="list-group-item">
            <h5>Existentialism (Chủ nghĩa hiện sinh)</h5>
            <p>A philosophy that emphasizes individual freedom, responsibility, and subjectivity. Existentialists believe that every individual is solely responsible for giving meaning to life and living it passionately and sincerely.</p>
          </li>
          <li className="list-group-item">
            <h5>Rationalism (Chủ nghĩa duy lý)</h5>
            <p>The epistemological view that regards reason as the chief source and test of knowledge. Rationalists believe that reality itself has an inherently logical structure.</p>
          </li>
          <li className="list-group-item">
            <h5>Empiricism (Chủ nghĩa kinh nghiệm)</h5>
            <p>The epistemological view that knowledge comes only or primarily from sensory experience. It emphasizes the role of experience and evidence, especially sensory perception, in the formation of ideas.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Concepts;
