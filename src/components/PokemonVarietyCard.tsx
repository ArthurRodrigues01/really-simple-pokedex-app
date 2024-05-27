import { useState } from "react";

import { getPokemonTypeColor } from "../functions/poke-functions";
import useImagePreloader from "../hooks/useImagePreloader";
import usePokemonVariety from "../hooks/usePokemonVariety"
import useSinglePokemonData from "../hooks/useSinglePokemonData";
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback";
import PokemonVarietyCardLoadingFeedback from "./feedbacks/PokemonVarietyCardLoadingFeedback";
import {
  SubTitle,
  Text,
  Title
} from "./main-components";
import { Modal } from "./main-modal-components";
import { PokemonSprite, PokemonSpriteWrapper } from "./main-poke-components";
import {
  DivGap,
  PokemonModalStatsWrapper,
  PokemonType,
  PokemonTypesWrapper
} from "./styles";

function PokemonVarietyCard({ id, name }: { id: number, name: string }) {
  const { data: varietyData, isLoading: varietyIsLoading } = usePokemonVariety(id)
  const { 
    data: singlePokemonData, 
    isLoading: singlePokemonIsLoading
   } = useSinglePokemonData(varietyData ? varietyData.id : 1)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { hasLoaded: varietyHasLoaded } = useImagePreloader(varietyData ? varietyData.spriteSrc : '')
  const { hasLoaded: singlePokemonHasLoaded } = useImagePreloader(singlePokemonData ? singlePokemonData.spriteSrc : '')

  if (
    varietyData === null || 
    singlePokemonData === null ||
    varietyIsLoading || 
    singlePokemonIsLoading || 
    (varietyHasLoaded === false && varietyData.spriteSrc !== null) ||
    singlePokemonHasLoaded === false
  ) {
    return <PokemonVarietyCardLoadingFeedback name={name}/>
  }


  return (
    <div>
      {
        isModalOpen &&
        <Modal setIsModalOpen={setIsModalOpen}>
          <PokemonModalStatsWrapper 
            $backgroundColor={getPokemonTypeColor(singlePokemonData.types[0])}
            > 
            <Title $color="#fff">{singlePokemonData.name}</Title>
            <PokemonSpriteWrapper>
              <PokemonSprite 
                src={`${singlePokemonData.spriteSrc}`} 
                alt={`pokemon ${singlePokemonData.id}`} 
                width={250} 
                height={250}
              />
            </PokemonSpriteWrapper>
            <SubTitle $color="#fff">ID: <Text>{singlePokemonData.id}</Text></SubTitle>
            <SubTitle $color="#fff">Gen: <Text>{singlePokemonData.gen}</Text></SubTitle>
            <SubTitle $color="#fff">Height: <Text>{singlePokemonData.height}m</Text></SubTitle>
            <SubTitle $color="#fff">Weight: <Text>{singlePokemonData.weight}kg</Text></SubTitle>
            <PokemonTypesWrapper>
              {singlePokemonData.types.map(
                type => <PokemonType key={`pokemon-type-${type}-2`} type={type}/>
              )}
            </PokemonTypesWrapper>
          </PokemonModalStatsWrapper>
          <DivGap $width={'6rem'} onClick={() => setIsModalOpen(!isModalOpen)}/>
          <PokemonModalStatsWrapper 
            $backgroundColor={getPokemonTypeColor(varietyData.types[0])}
            >
            <Title $color="#fff">{varietyData.name}</Title>
            <PokemonSpriteWrapper>
              <PokemonSprite 
                src={`${varietyData.spriteSrc}`} 
                alt={`pokemon ${varietyData.name}`} width={250} height={250}/>
            </PokemonSpriteWrapper>
            <SubTitle $color="#fff">ID: <Text>{varietyData.id}</Text></SubTitle>
            <SubTitle $color="#fff">Gen: <Text>{varietyData.gen}</Text></SubTitle>
            <SubTitle $color="#fff">Height: <Text>{varietyData.height}m</Text></SubTitle>
            <SubTitle $color="#fff">Weight: <Text>{varietyData.weight}kg</Text></SubTitle>
            <PokemonTypesWrapper>
              {varietyData.types.map(
                type => <PokemonType key={`pokemon-type-${type}-1`} type={type}/>
              )}
            </PokemonTypesWrapper>
          </PokemonModalStatsWrapper>
        </Modal>
      }
      <HoverableGrowthFeedback $pointingCursor onClick={() => setIsModalOpen(!isModalOpen)}>
        <PokemonSpriteWrapper>
          <PokemonSprite src={varietyData.spriteSrc} alt={`pokemon ${varietyData.name}`}/>
        </PokemonSpriteWrapper> 
      </HoverableGrowthFeedback>
    </div>
  )
}

export default PokemonVarietyCard