
import React, { useState } from 'react';
import './App.css';
import Concepts from './Concepts';
import Quiz from './Quiz';

// Data for the entire application
const philosophersData = [
  {
    name: 'Plato',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/800px-Plato_Silanion_Musei_Capitolini_MC1377.jpg',
    bio: 'Plato (c. 428/427 or 424/423 – 348/347 BC) was an Athenian philosopher during the Classical period in Ancient Greece, founder of the Platonist school of thought, and the Academy, the first institution of higher learning in the Western world.',
    majorWorks: 'The Republic, Phaedo, Symposium, Apology',
    coreIdeas: 'Theory of Forms, the immortality of the soul, the ideal state ruled by philosopher-kings.',
    quiz: [
      {
        question: "What is the name of the school founded by Plato?",
        options: ["The Lyceum", "The Academy", "The Garden", "The Stoa"],
        correctAnswer: "The Academy",
      },
      {
        question: "Which of these is a major work by Plato?",
        options: ["Nicomachean Ethics", "The Republic", "Meditations", "Leviathan"],
        correctAnswer: "The Republic",
      },
      {
        question: "What is Plato's theory of ideal forms?",
        options: [
          "The idea that all things are made of water",
          "The concept that there are perfect and unchanging forms of things in a higher reality",
          "The belief that happiness is the highest good",
          "The theory that knowledge comes only from sensory experience",
        ],
        correctAnswer: "The concept that there are perfect and unchanging forms of things in a higher reality",
      },
    ],
  },
  {
    name: 'Aristotle',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg',
    bio: 'Aristotle (384–322 BC) was a Greek philosopher and polymath during the Classical period in Ancient Greece. Taught by Plato, he was the founder of the Lyceum, the Peripatetic school of philosophy, and the Aristotelian tradition.',
    majorWorks: 'Nicomachean Ethics, Politics, Metaphysics, Poetics',
    coreIdeas: 'Virtue ethics, the four causes, the golden mean, logic and syllogism.',
    quiz: [],
  },
  {
    name: 'Immanuel Kant',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Immanuel_Kant_%28painted_portrait%29.jpg',
    bio: 'Immanuel Kant (1724–1804) was a German philosopher and one of the central Enlightenment thinkers. Kant\'s comprehensive and systematic works in epistemology, metaphysics, ethics, and aesthetics have made him one of the most influential figures in modern Western philosophy.',
    majorWorks: 'Critique of Pure Reason, Groundwork of the Metaphysics of Morals, Critique of Practical Reason',
    coreIdeas: 'Transcendental idealism, the categorical imperative, the distinction between phenomena and noumena.',
    quiz: [],
  },
];

const conceptsData = [
  {
    name: 'Idealism (Chủ nghĩa duy tâm)',
    description: 'The metaphysical view that reality is all in the mind, that everything that exists is in some way dependent on the mind or consciousness.',
  },
  {
    name: 'Materialism (Chủ nghĩa duy vật)',
    description: 'The view that all that exists is matter or energy; that all things are composed of material and all phenomena (including consciousness) are the result of material interactions.',
  },
  {
    name: 'Existentialism (Chủ nghĩa hiện sinh)',
    description: 'A philosophy that emphasizes individual freedom, responsibility, and subjectivity. Existentialists believe that every individual is solely responsible for giving meaning to life and living it passionately and sincerely.',
  },
  {
    name: 'Rationalism (Chủ nghĩa duy lý)',
    description: 'The epistemological view that regards reason as the chief source and test of knowledge. Rationalists believe that reality itself has an inherently logical structure.',
  },
  {
    name: 'Empiricism (Chủ nghĩa kinh nghiệm)',
    description: 'The epistemological view that knowledge comes only or primarily from sensory experience. It emphasizes the role of experience and evidence, especially sensory perception, in the formation of ideas.',
  },
];

const Header: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
  return (
    <header className="bg-dark text-white text-center p-3">
      <h1>Philosophy 101</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#branches">Branches</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#philosophers">Philosophers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#concepts">Concepts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => onSearch(e.target.value)} />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Home: React.FC = () => {
  return (
    <section id="home" className="p-5">
      <div className="container">
        <h2>Welcome to Philosophy 101</h2>
        <p>This website is dedicated to exploring the fascinating world of philosophy. From the ancient Greeks to modern thinkers, we'll cover the major ideas and figures that have shaped our understanding of the world.</p>
        <p>Use this website to review key concepts, learn about the most influential philosophers, and test your knowledge with our interactive quizzes.</p>
      </div>
    </section>
  );
}

const Branches: React.FC = () => {
  return (
    <section id="branches" className="p-5 bg-light">
      <div className="container">
        <h2>Branches of Philosophy</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Metaphysics (Siêu hình học)
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Metaphysics is the branch of philosophy that examines the fundamental nature of reality, including the relationship between mind and matter, between substance and attribute, and between potentiality and actuality.</p>
                <strong>Core Concepts:</strong> Being, existence, reality, substance, time, space.<br />
                <strong>Key Questions:</strong> What is reality? What is the nature of existence? What is the relationship between mind and body?<br />
                <strong>Representative Philosophers:</strong> Parmenides, Plato, Aristotle, Descartes, Leibniz, Spinoza.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Epistemology (Nhận thức luận)
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Epistemology is the branch of philosophy concerned with the theory of knowledge. It questions what knowledge is and how it can be acquired, and the extent to which knowledge of any given subject or entity can be acquired.</p>
                <strong>Core Concepts:</strong> Knowledge, belief, justification, truth, perception, reason.<br />
                <strong>Key Questions:</strong> What is knowledge? How do we acquire knowledge? What is the difference between belief and knowledge?<br />
                <strong>Representative Philosophers:</strong> Plato, Aristotle, Descartes, Locke, Hume, Kant.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Ethics (Đạo đức học)
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Ethics, or moral philosophy, is a branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong conduct. It is often divided into three subject areas: meta-ethics, normative ethics, and applied ethics.</p>
                <strong>Core Concepts:</strong> Good, evil, right, wrong, virtue, duty, happiness.<br />
                <strong>Key Questions:</strong> What is the good life? What is the right thing to do? What is justice?<br />
                <strong>Representative Philosophers:</strong> Socrates, Plato, Aristotle, Epicurus, Aquinas, Kant, Mill.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Philosophers: React.FC<{ philosophers: typeof philosophersData }> = ({ philosophers }) => {
  return (
    <section id="philosophers" className="p-5">
      <div className="container">
        <h2>Key Philosophers</h2>
        <div className="row">
          {philosophers.map((philosopher, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={philosopher.imageUrl} className="card-img-top" alt={philosopher.name} style={{height: '300px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{philosopher.name}</h5>
                  <p className="card-text">{philosopher.bio}</p>
                  <ul className="list-group list-group-flush mt-auto">
                    <li className="list-group-item"><strong>Major Works:</strong> <em>{philosopher.majorWorks}</em></li>
                    <li className="list-group-item"><strong>Core Ideas:</strong> {philosopher.coreIdeas}</li>
                  </ul>
                  {philosopher.quiz.length > 0 && <Quiz questions={philosopher.quiz} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-5 bg-light">
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows={3}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhilosophers = philosophersData.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredConcepts = conceptsData.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header onSearch={setSearchTerm} />
      <main>
        <Home />
        <Branches />
        <Philosophers philosophers={filteredPhilosophers} />
        <Concepts concepts={filteredConcepts} />
        <Contact />
      </main>
      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2025 Philosophy 101</p>
      </footer>
    </div>
  );
}

export default App;
