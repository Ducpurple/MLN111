import React from 'react';
import './App.css';
import Concepts from './Concepts';

const Header: React.FC = () => {
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
            <ul className="navbar-nav">
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

const Philosophers: React.FC = () => {
  return (
    <section id="philosophers" className="p-5">
      <div className="container">
        <h2>Key Philosophers</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Plato</h5>
                <p className="card-text">Plato (c. 428/427 or 424/423 – 348/347 BC) was an Athenian philosopher during the Classical period in Ancient Greece, founder of the Platonist school of thought, and the Academy, the first institution of higher learning in the Western world.</p>
                <ul className="list-group list-group-flush mt-auto">
                  <li className="list-group-item"><strong>Major Works:</strong> <em>The Republic</em>, <em>Phaedo</em>, <em>Symposium</em>, <em>Apology</em>.</li>
                  <li className="list-group-item"><strong>Core Ideas:</strong> Theory of Forms, the immortality of the soul, the ideal state ruled by philosopher-kings.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Aristotle</h5>
                <p className="card-text">Aristotle (384–322 BC) was a Greek philosopher and polymath during the Classical period in Ancient Greece. Taught by Plato, he was the founder of the Lyceum, the Peripatetic school of philosophy, and the Aristotelian tradition.</p>
                <ul className="list-group list-group-flush mt-auto">
                  <li className="list-group-item"><strong>Major Works:</strong> <em>Nicomachean Ethics</em>, <em>Politics</em>, <em>Metaphysics</em>, <em>Poetics</em>.</li>
                  <li className="list-group-item"><strong>Core Ideas:</strong> Virtue ethics, the four causes, the golden mean, logic and syllogism.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Immanuel Kant</h5>
                <p className="card-text">Immanuel Kant (1724–1804) was a German philosopher and one of the central Enlightenment thinkers. Kant's comprehensive and systematic works in epistemology, metaphysics, ethics, and aesthetics have made him one of the most influential figures in modern Western philosophy.</p>
                <ul className="list-group list-group-flush mt-auto">
                  <li className="list-group-item"><strong>Major Works:</strong> <em>Critique of Pure Reason</em>, <em>Groundwork of the Metaphysics of Morals</em>, <em>Critique of Practical Reason</em>.</li>
                  <li className="list-group-item"><strong>Core Ideas:</strong> Transcendental idealism, the categorical imperative, the distinction between phenomena and noumena.</li>
                </ul>
              </div>
            </div>
          </div>
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
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Branches />
        <Philosophers />
        <Concepts />
        <Contact />
      </main>
      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2025 Philosophy 101</p>
      </footer>
    </div>
  );
}

export default App;