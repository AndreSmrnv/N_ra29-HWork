import React from 'react'
import { refreshPage } from './Functions';

export function Preloader() {
    return (
        <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>   
    )
}

export function TryAgain ({error}) {
    return (
        <>
            <div className="alert alert-danger" role="alert">
                <strong>Произошла ошибка! </strong> <p>{error}</p>
            </div>
             <button type='reset' onClick={refreshPage}  >Попробовать еще раз...</button>
      </>  
    )
}