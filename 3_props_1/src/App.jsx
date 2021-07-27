import logo from './logo.svg';
import './App.css';

import Stars from './сomponents/Stars';

function App() {
  const count = 3;
  return (
    <div className="App">
      {between(count) && <Stars count={count} />}
    </div>
  );
}

function between(x) {
  const min = 1;
  const max = 5;
  return x >= min && x <= max;
}

export default App;
