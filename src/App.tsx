import { useState } from 'react';
import './App.css';

function App() {
  const [activeMWA, setActiveMWA] = useState(1);

  return (
    <div className="App">
      {/* Header with title, course, name */}
      <header className="header">
        <h1 className="title">My Portfolio</h1>
        <p className="course">ENG 1110</p>
        <p className="name">Bryan Ruano Rivera</p>
      </header>

      {/* Updated quote */}
      <blockquote className="quote">
        "Writing is thinking on paper."
        <cite>— William Zinsser</cite>
      </blockquote>

      {/* Navigation - 3 MWA tabs only */}
      <nav className="nav">
        <div className="nav-container">
          <button 
            className={activeMWA === 1 ? 'nav-tab active' : 'nav-tab'}
            onClick={() => setActiveMWA(1)}
          >
            MWA 1
          </button>
          <button 
            className={activeMWA === 2 ? 'nav-tab active' : 'nav-tab'}
            onClick={() => setActiveMWA(2)}
          >
            MWA 2
          </button>
          <button 
            className={activeMWA === 3 ? 'nav-tab active' : 'nav-tab'}
            onClick={() => setActiveMWA(3)}
          >
            MWA 3
          </button>
        </div>
      </nav>

      <main className="main">
        {/* MWA 1 - 3 empty SLO sections */}
        <section className={`mwa ${activeMWA === 1 ? 'active' : ''}`}>
          <h1 className="mwa-title">MWA 1</h1>
          <div className="slo-grid">
            <div className="slo">
              <h2>SLO 1</h2>
            </div>
            <div className="slo">
              <h2>SLO 2</h2>
            </div>
            <div className="slo">
              <h2>SLO 3</h2>
            </div>
          </div>
        </section>

        {/* MWA 2 - 3 empty SLO sections */}
        <section className={`mwa ${activeMWA === 2 ? 'active' : ''}`}>
          <h1 className="mwa-title">MWA 2</h1>
          <div className="slo-grid">
            <div className="slo">
              <h2>SLO 1</h2>
            </div>
            <div className="slo">
              <h2>SLO 2</h2>
            </div>
            <div className="slo">
              <h2>SLO 3</h2>
            </div>
          </div>
        </section>

        {/* MWA 3 - 3 empty SLO sections */}
        <section className={`mwa ${activeMWA === 3 ? 'active' : ''}`}>
          <h1 className="mwa-title">MWA 3</h1>
          <div className="slo-grid">
            <div className="slo">
              <h2>SLO 1</h2>
            </div>
            <div className="slo">
              <h2>SLO 2</h2>
            </div>
            <div className="slo">
              <h2>SLO 3</h2>
            </div>
          </div>
        </section>
      </main>

      {/* Optional meta sections */}
      <footer className="meta">
        <div className="meta-grid">
          <div className="meta-section">
            <h3>Get in Touch</h3>
            <p><a href="mailto:ruanobry@unm.edu">ruanobry@unm.edu</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
