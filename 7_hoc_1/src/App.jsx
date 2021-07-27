import React, {useState} from 'react';
import { INIT_DATA } from './utils/initData';

const nowDate = new Date();

function DateTime({date}) {
    return (
        <p className="date">{date}</p>
    )
}
const  withHOC = (Component) => (
   ({date}) => {
      const dateVideo = new Date(date);
      const diff = Math.floor((nowDate - dateVideo) / 3600000);
      const result = (diff < 1) ? "12 минут назад" :
        (diff > 24) ? `${Math.floor((diff / 24))} дней назад` :
        "5 часов назад"
        ;        
      return (
        <Component date={result}/>
      )
    }
)
  
  const DateTimePretty = withHOC(DateTime);
  
function Video(props) {
    return (
        <div className="video">
        <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        {/* <DateTime date={props.date} /> */}
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

function App() {
    const [list, setList] = useState(INIT_DATA);

    return (
        <VideoList list={list} />
    );
}


export default App;
