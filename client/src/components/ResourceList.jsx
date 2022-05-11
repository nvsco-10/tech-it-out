import React from 'react'
import ResourceCard from "../components/ResourceCard";

const ResourceList = ({resources}) => {
  return (
    <>
        {resources.map(resource => {
            return <ResourceCard 
                        key={resource._id} 
                        id={resource._id} 
                        name={resource.name} 
                        description={resource.description} 
                        type={resource.type}
                        level={resource.level} 
                        link={resource.link} 
                    />
            }) 
        }   
    </>
  )
}

export default ResourceList