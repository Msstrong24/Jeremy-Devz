import Calculator from './components/Calculator';
import './styles/index.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Just Tip It</h1>
        <h2 className="app-subtitle">Quick & easy tip calculator</h2>
      </header>
      <Calculator />
    </div>
  );
}

export default App; 