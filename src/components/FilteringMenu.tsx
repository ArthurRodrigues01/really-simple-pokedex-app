import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { VALID_GENS, VALID_TYPES } from "../constants/pokemon-related-constants"
import { sanitizeTypes } from "../functions/poke-functions"
import useURLSearchParams from "../hooks/useURLSearchParams"
import { SubTitle, Title } from "./main-components"
import { FeedbackedButton } from "./styles"
import {
  ActiveFilters,
  Filter,
  FilterType,
  FilteringMenuContent,
  FilteringMenuTitleWrapper,
  FilteringMenuWrapper,
  HideFilteringMenuButton,
  OtherFilters
} from "./styles/filteringMenu-styles"

function FilteringMenu() {
  const navigate = useNavigate()
  const [isFilteringMenuOpen, setIsFilteringMenuOpen] = useState(true);
  const searchParams = useURLSearchParams()
  const types = sanitizeTypes([searchParams.type1, searchParams.type2])
  const gen = searchParams.gen
  const [activeFilters, setActiveFilters] = useState<{name: string, type: string}[]>(
    [
      {name: types[0], type: 'type'}, 
      {name: types[1], type: 'type'}, 
      {name: gen, type: 'gen'}
    ].filter(item => item.name)
  )

  return (
    <FilteringMenuWrapper className="wrapper">
      <FilteringMenuTitleWrapper onClick={openFilteringMenuHandler}>
        <Title>Filters</Title>
        <HideFilteringMenuButton 
          onClick={closeFilteringMenuHandler} 
          $show={isFilteringMenuOpen} 
          alt="hide filtering menu button"
        />
      </FilteringMenuTitleWrapper>
      <FilteringMenuContent className="content-wrapper">
        <SubTitle>Active Filters</SubTitle>
        <ActiveFilters>
          {activeFilters.map((activeFilter) => (
            activeFilter.type === 'type' ?
            <FilterType
              type={activeFilter.name}
              onClick={() => deactivateFilterHandler(activeFilter)}
              key={`active-filter-type-${activeFilter.name}`}
            /> : 
            <Filter
              onClick={() => deactivateFilterHandler(activeFilter)}
              key={`active-filter-gen-${activeFilter.name}`}
            >
              {`Gen ${activeFilter.name}`}
            </Filter>
          ))}
        </ActiveFilters>
        <SubTitle>Filters</SubTitle>
        <OtherFilters>
          {VALID_TYPES.map((type) => (
            <FilterType
              type={type}
              onClick={() => activateFilterHandler(type, 'type')}
              key={`filter-type-${type}`}
            />
          ))}
          {VALID_GENS.map((gen) => (
            <Filter
              onClick={() => activateFilterHandler(`${gen}`, 'gen')}
              key={`filter-gen-${gen}`}
            >
              {`Gen ${gen}`}
            </Filter>
          ))}
        </OtherFilters>
        <FeedbackedButton onClick={navigateHandler}>Search</FeedbackedButton>
      </FilteringMenuContent>
    </FilteringMenuWrapper>
  )

  function activateFilterHandler(filter: string, filterType: string) { 
    const isFilterUnactive = !activeFilters.find(item => item.name === filter)
    const pokemonTypeFilters = activeFilters.filter(item => item.type === 'type')
    const pokemonGenFilters = activeFilters.filter(item => item.type === 'gen')

    if (isFilterUnactive) {
      if ((filterType === 'gen' && pokemonGenFilters.length < 1) || (filterType === 'type' && pokemonTypeFilters.length < 2)) {
        setActiveFilters(prev => [...prev, { name: filter, type: filterType }])
      } 
    }
  }
  function deactivateFilterHandler(filter: { name: string, type: string }) {
    setActiveFilters(prev => prev.filter(item2 => item2.name !== filter.name))
  }
  function openFilteringMenuHandler() {
    const wrapper = document.querySelector<HTMLDivElement>('.wrapper')!
    
    if (isFilteringMenuOpen === false) {
      wrapper.style.bottom = '0px'
      setIsFilteringMenuOpen(true) 
    }
  }
  function closeFilteringMenuHandler() {
    const wrapper = document.querySelector<HTMLDivElement>('.wrapper')!
    const contentWrapper = document.querySelector<HTMLDivElement>('.content-wrapper')!
    const contentWrapperStyle = getComputedStyle(contentWrapper)
    const contentWrapperTrueHeight = `(${contentWrapperStyle.height} + ${contentWrapperStyle.paddingTop} + ${contentWrapperStyle.paddingBottom})`

    if (isFilteringMenuOpen) {
      wrapper.style.bottom = `calc(${contentWrapperTrueHeight} - ${contentWrapperTrueHeight} - ${contentWrapperTrueHeight})`
      setIsFilteringMenuOpen(false)
    }
  }
  function navigateHandler() {
    let navlink = ['/filtered?']
    const gen = activeFilters.find(item => item.type === 'gen')
    const activeTypes = activeFilters.filter(item => item.type === 'type')

    if (gen) {
      navlink.push(`gen=${gen.name}`)
    }
    activeTypes.forEach((item, index) => {
      if (item) navlink.push(`type${index + 1}=${item.name}`)
    })

    if (navlink.length !== 1) {
      navigate(navlink.join('&'))
      closeFilteringMenuHandler()
    }
  }
}

export default FilteringMenu