import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Ads from './сomponents/Ads';
import Widgets from './сomponents/Widgets';
import News from './сomponents/News';
import Search from './сomponents/Search';



function App() {
  return (
    <div className="App">
      { /**
            * Компонент новостей                   
            */ }
      <News />
      { /**
            * Компонент поиска                   
            */ }
      <Search />
      { /**
            * Компонент рекламной информации                   
            */ }
      <Ads />
      { /**
            * Компонент виджетов                   
            */ }
      <Widgets />

    </div>
  );
}




export default App;
