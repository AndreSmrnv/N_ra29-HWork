import React from "react";
import NewsTabs from './NewsTabs';
import NewsTitle from './NewsTitle';
const tabs = {};
const news = {};

function News() {
    return (
        <>
            <div class="card text-center">
                <div class="card-header">
                    { /**
                * Компонент Разделы новостей                   
                */ }
                    <NewsTabs tabs={ tabs }/>
                    
                </div>
                <div class="card-body">
                        { /**
                        * Компонент Заголовки новостей                   
                    */ }
                    <NewsTitle news={ news} />
                </div>
                </div>
           
            
            

        </>
    );
}

export default News;