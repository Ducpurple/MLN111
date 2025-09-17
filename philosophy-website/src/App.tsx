import React from 'react';
import './App.css';

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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Proin sed enim sed lorem cursus volutpat. </p>
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
                Metaphysics
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Metaphysics is the branch of philosophy that examines the fundamental nature of reality, including the relationship between mind and matter, between substance and attribute, and between potentiality and actuality.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Epistemology
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Epistemology is the branch of philosophy concerned with the theory of knowledge. It questions what knowledge is and how it can be acquired, and the extent to which knowledge of any given subject or entity can be acquired.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Ethics
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Ethics, or moral philosophy, is a branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong conduct. It is often divided into three subject areas: meta-ethics, normative ethics, and applied ethics.
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
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Plato</h5>
                <p className="card-text">An Athenian philosopher during the Classical period in Ancient Greece, founder of the Platonist school of thought, and the Academy, the first institution of higher learning in the Western world.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Aristotle</h5>
                <p className="card-text">A Greek philosopher and polymath during the Classical period in Ancient Greece. Taught by Plato, he was the founder of the Lyceum, the Peripatetic school of philosophy, and the Aristotelian tradition.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Immanuel Kant</h5>
                <p className="card-text">A German philosopher and one of the central Enlightenment thinkers. Kant's comprehensive and systematic works in epistemology, metaphysics, ethics, and aesthetics have made him one of the most influential figures in modern Western philosophy.</p>
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
        <Contact />
      </main>
      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2025 Philosophy 101</p>
      </footer>
    </div>
  );
}

export default App;