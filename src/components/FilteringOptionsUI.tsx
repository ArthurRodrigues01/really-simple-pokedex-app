import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { VALID_GENS, VALID_TYPES } from "../constants/pokemon-related-constants";
import { sanitizeTypes } from "../functions/poke-functions";
import useURLSearchParams from "../hooks/useURLSearchParams";
import ArrayToJSXTransformer from "./ArrayToJSXTransformer";
import { CenteredFlexCol } from "./main-components";
import { CenteredFlexColGap, CenteredFlexRowGap, FeedbackedButton, Filter, FilterType, FiltersWrapper } from "./styles";

function FilteringOptionsUI() {
  const searchParams = useURLSearchParams()
  const types = sanitizeTypes([searchParams.type1, searchParams.type2])
  const gen = searchParams.gen
  const [filters, setFilters] = useState<{name: string, type: string}[]>(
    [
      {name: types[0], type: 'type'}, 
      {name: types[1], type: 'type'}, 
      {name: gen, type: 'gen'}
    ].filter(item => item.name)
  )
  
  const navigate = useNavigate()

  return (
    <CenteredFlexColGap>
      <CenteredFlexColGap>
        <CenteredFlexCol>
          <h1>Gens</h1>
          <FiltersWrapper>
            <ArrayToJSXTransformer
              dataArray={VALID_GENS}
              transformer={(gen) => {
                return (
                  <Filter 
                    onClick={() => {
                      const activeGens = filters.filter(item => item.type === 'gen') 
                      
                      if (activeGens.length < 1) {
                        setFilters(prev => [...prev, {name: `${gen}`, type: 'gen'}])}  
                      }
                    }
                    key={`filter-gen-${gen}`}
                  >
                    { `Gen ${gen}` }
                  </Filter>
                )
              }}
            />
          </FiltersWrapper>
        </CenteredFlexCol> 
        <CenteredFlexCol>
          <h1>Types</h1>
          <FiltersWrapper>
            <ArrayToJSXTransformer
              dataArray={VALID_TYPES}
              transformer={(type) => {
                return (
                  <FilterType 
                    type={type} 
                    onClick={() => {
                      const activeTypes = filters.filter(item => item.type === 'type')
                      
                      if (activeTypes.length < 2 && !activeTypes.find(item => item.name === type)) {
                        setFilters(prev => [...prev, {name: `${type}`, type: 'type'}])}  
                      }
                    }
                    key={`filter-type-${type}`}
                  >
                    { type }
                  </FilterType>
                )
              }}
            />
          </FiltersWrapper>
        </CenteredFlexCol>
      </CenteredFlexColGap>
      <CenteredFlexCol> 
        <h1 hidden={filters.length === 0}>Filters</h1>
        <FiltersWrapper>
          <ArrayToJSXTransformer
            dataArray={filters}
            transformer={(active) => {
              return active.type === 'type' ? (
                <FilterType type={active.name} key={`option-${active.type}-${active.name}`} onClick={() => setFilters(prev => prev.filter(item => item !== active))}>
                  {active.name} 
                </FilterType>
              ) : (
                <Filter key={`option-${active.type}-${active.name}`} onClick={() => setFilters(prev => prev.filter(item => item !== active))}>
                  {`Gen ${active.name}`} 
                </Filter>
              )
            }}
          />
        </FiltersWrapper>
      </CenteredFlexCol>
      <CenteredFlexRowGap>
        <FeedbackedButton hidden={filters.length === 0} onClick={navigateHandler}>Search</FeedbackedButton>
        <FeedbackedButton hidden={filters.length === 0} onClick={() => setFilters([])} >Reset</FeedbackedButton>
      </CenteredFlexRowGap>
    </CenteredFlexColGap>
  )

  function navigateHandler() {
    let navlink = ['/filtered?']
    const gen = filters.find(item => item.type === 'gen')
    const activeTypes = filters.filter(item => item.type === 'type')

    if (gen) {
      navlink.push(`gen=${gen.name}`)
    }
    activeTypes.forEach((item, index) => {
      if (item) navlink.push(`type${index + 1}=${item.name}`)
    })

    if (navlink.length !== 1) navigate(navlink.join('&'))

  }
}

export default FilteringOptionsUI