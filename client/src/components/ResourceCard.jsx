import React from 'react'
import { Link } from "react-router-dom";

const ResourceCard = ({id, name, description, type, level}) => {
  return (
        <div class="column is-4-tablet is-3-desktop">
            <div class="card">
                <div class="card-image has-text-centered">
                    <figure class="image is-2by1">
                        <img
                        src="http://placehold.jp/ff3860/ffffff/546x273.png"
                        alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <Link to={`/resources/${id}`}>
                                <p class="title is-5">{name.toUpperCase()}</p>
                            </Link>
                        <div>
                            <a class="button is-danger mr-2">{type.toUpperCase()}</a>
                            <a class="button is-success mr-2">{level.toUpperCase()}</a>
                        </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="media-content">
                            <p class="is-success">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ResourceCard