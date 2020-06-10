import React from 'react'

const Card = (props) => {
  return (
    <div className="col-4">
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <a href={props.url} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default Card;
