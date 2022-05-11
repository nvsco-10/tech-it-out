import { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import "../css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResourceList from "../components/ResourceList";
import { getResources } from '../utils/API'
import { sort } from '../utils/helper'

export default function Resources() {
  const [ searchInput, setSearchInput ] = useState('');
  const [ resourceList, setResourceList ] = useState([]);
  const [ filteredResources, setFilteredResources ] = useState([]);

  const getAllResources = async() => {
    const query = await getResources();
    const result = await query.json();

    const sortedResults = sort(result)

    console.log(result)
    setResourceList(sortedResults)
    setFilteredResources(sortedResults)

  }

  useEffect(() => {
    getAllResources()
  }, [])

  const handleInputChange = async(e) => {
    console.log(e.target.value)
    setSearchInput(e.target.value)

    searchInput.length === 0 && setFilteredResources(...resourceList)

    const filtered = resourceList.filter(resource => {
      return resource.name.toLowerCase().includes(searchInput.toLowerCase())
    })

    setFilteredResources(filtered)
  }

  const filterByType = e => {
    const type = e.target.textContent
    console.log(type)


    const filtered = resourceList.filter(resource => {
      return resource.type.toLowerCase().includes(type.toLowerCase())
    })

    setFilteredResources(filtered)
  }


  return (
    <div className="Main">
      <div>
        <Header></Header>
      </div>

      <div className="resource-body">
        <h1 class="title has-text-centered">RESOURCES</h1>
        <input
          type="text"
          value={searchInput}
          placeholder="search"
          onChange={handleInputChange} 
        />
        <div class="has-text-centered">
          <p>FILTER:</p>
          <button onClick={filterByType} class="button m-4 is-info">PROJECTS</button>
          <button onClick={filterByType} class="button m-4 is-warning">GAMES</button>
          <button onClick={filterByType} class="button m-4 is-danger">TOOLS</button>
          <button onClick={filterByType} class="button m-4 is-success">MISC</button>
        </div>

        {/* hardcoded article cards */}
        <div class="columns mt-5 is-8 is-variable">
          <div class="container has-text-centered">
            <div class="columns is-mobile is-centered">
              {/* CARDS GO HERE */}
              {!filteredResources.length ? 
                <p>No results found..</p> : 
                <ResourceList resources={filteredResources} />
              }

            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
