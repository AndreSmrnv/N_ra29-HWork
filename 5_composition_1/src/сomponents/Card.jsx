import React from 'react'

export default function Card({card, children}) {
  
  return (
    <div className="card" style={{ width: "18rem" }}>
          
      {children}

      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">
          {card.description}
        </p>
        <a href="/" className="btn btn-primary">
          go click
        </a>
      </div>

    </div>
  );
}
