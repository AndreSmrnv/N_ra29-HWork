import React from "react";
import useJsonFetch from '../utils/hooks/useJsonFetch';
const loadingUrl = `${process.env.REACT_APP_URL}/loading`;
  const dataUrl = `${process.env.REACT_APP_URL}/data`;
const errorUrl = `${process.env.REACT_APP_URL}/error`;
  
function Request({url}) {
  const [data, loading, error] = useJsonFetch(url)
  console.log(url);
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <div >
      <h5>{url}</h5>
      <p>
        {loading && "Loading..."}
      </p>
      <p>{error && error}</p>
        <p>
          {data && ' Data: ' + JSON.stringify(data)}
          </p>  
    </div>
  )
}




export default function Data() {
  
  

  return (
    <>
      <div className="row" >
        <div className="col-3">
          <Request url={loadingUrl }/>
        </div>  
        <div className="col-3">
        <Request url={dataUrl }/>
        </div>   
        <div className="col-3">
        <Request url={errorUrl }/>
        </div>  
      </div>
    </>
  );
}

