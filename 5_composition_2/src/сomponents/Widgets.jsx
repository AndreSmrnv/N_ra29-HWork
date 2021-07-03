import React from "react";
import WidgetsItem from './WidgetsItem';
const widget = {};


function Widgets({ widgets }) {
    return (
        <>
            { /**
            * Компонент виджета                   
            */ }
            <WidgetsItem widget={ widget}/> 
            

        </>
    );
}

export default Widgets;