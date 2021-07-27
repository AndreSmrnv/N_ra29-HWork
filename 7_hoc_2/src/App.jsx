import React, {useState} from 'react';
import { INIT_DATA } from './utils/initData';



function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

const withHOC = (Component) => (
    (props) => {
        return (props.views < 100) ? (<New><Component {...props} /></New>) :
            (props.views > 1000) ? (<Popular><Component {...props} /></Popular>) :
                (<Component {...props} />)
        
    }
);
const VideoOverlay = withHOC(Video);
const ArticleOverlay = withHOC(Article);
  

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoOverlay {...item} />
                );

            case 'article':
                return (
                    <ArticleOverlay {...item} />
                );
        }
    });
};

export default function App() {
    const [list, setList] = useState(INIT_DATA);

    return (
        <List list={list} />
    );
}
