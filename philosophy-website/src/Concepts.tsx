import React from 'react';

interface ConceptsProps {
  concepts: {
    name: string;
    description: string;
  }[];
}

const Concepts: React.FC<ConceptsProps> = ({ concepts }) => {
  return (
    <section id="concepts" className="p-5 bg-light">
      <div className="container">
        <h2>Key Philosophical Concepts</h2>
        <ul className="list-group">
          {concepts.map((concept, index) => (
            <li className="list-group-item" key={index}>
              <h5>{concept.name}</h5>
              <p>{concept.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Concepts;