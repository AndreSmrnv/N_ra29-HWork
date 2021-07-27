import React from "react";
import SearchTabs from './SearchTabs';
import SearchForm from './SearchForm';
const tabs = {};
const onSubmit = {};
function Search() {
    return (
        <>
            { /**
            * Компонент Разделы поиска                   
            */ }
            <SearchTabs tabs={ tabs}/>
            { /**
                * Компонент Формы ввода текста запроса                   
            */ }
            <SearchForm onSubmit={onSubmit } />

        </>
    );
}

export default Search;