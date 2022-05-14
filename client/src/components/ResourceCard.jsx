import React from "react";
import placeholder from "../images/laptop-colorful-stock-photo.jpg"
import { Link } from "react-router-dom";

const ResourceCard = ({ id, name, description, type, level }) => {
  return (
    <div className="resource-card column is-4-tablet is-3-desktop">
      <div className="card">
        <div className="card-image has-text-centered">
          <figure className="image is-2by1">
            <img
              src={placeholder}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <Link to={`/resources/${id}`}>
                <p className="title is-5 mb-2">{name.toUpperCase()}</p>
              </Link>
              <div>
                <button className="button is-danger mr-2">{type.toUpperCase()}</button>
                <button className="button is-success mr-2">{level.toUpperCase()}</button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="media-content">
              <p className="is-success">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
