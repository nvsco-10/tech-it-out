import React from "react";
import placeholder from "../images/laptop-colorful-stock-photo.jpg"
import { Link } from "react-router-dom";

const ResourceCard = ({ id, name, description, type, level }) => {
  return (
    <div class="resource-card column is-4-tablet is-3-desktop">
      <div class="card">
        <div class="card-image has-text-centered">
          <figure class="image is-2by1">
            <img
              src={placeholder}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <Link to={`/resources/${id}`}>
                <p class="title is-5 mb-2">{name.toUpperCase()}</p>
              </Link>
              <div>
                <a class="button is-danger mr-2">{type.toUpperCase()}</a>
                <a class="button is-success mr-2">{level.toUpperCase()}</a>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="media-content">
              <p class="is-success">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
