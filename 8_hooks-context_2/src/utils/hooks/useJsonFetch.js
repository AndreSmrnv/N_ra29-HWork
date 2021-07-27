import { useState, useEffect } from "react";
import { INIT_STORE } from '../initData';

export default function  useJsonFetch(url) {

  const [store, setStore] = useState(INIT_STORE);

  useEffect(() => {
    const getDataRequest = async () => {
      setStore((prev) => ({...prev, isFetching: true}));
      
      try {
        const response = await fetch(url)
        if (!response.ok) 
          throw new Error(`api err: ${response.statusText}`)
        const data = await response.json();
        setStore((prev) => ({ ...prev, data }));
      }
      catch(e) {
        setStore((prev) => ({...prev, errorText: e.toString(),fetchingFailed: true}));
      }
      finally {
        setStore((prev) => ({...prev, isFetching: false}));
      }
    }
    getDataRequest();
  }, [url])
console.log(store.data)
  return [store.data, store.isFetching, store.errorText]
}