import useImagePreloader from "../hooks/useImagePreloader";
import usePokemonVariety from "../hooks/usePokemonVariety"
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback";
import PokemonVarietyCardLoadingFeedback from "./feedbacks/PokemonVarietyCardLoadingFeedback";
import { CenteredFlexCol, NoDecorationLink, Title } from "./main-components";
import { PokemonSpriteChainLink, PokemonSpriteWrapperChainLink } from "./styles";

function PokemonVarietyCard({ id, name }: { id: number, name: string }) {
  const { data, isLoading } = usePokemonVariety(id)
  const { hasLoaded } = useImagePreloader(data ? data.spriteSrc : '')

  
  if (data === null || isLoading || hasLoaded === false) {
    return <PokemonVarietyCardLoadingFeedback id={id} name={name}/>
  }


  return (
    <HoverableGrowthFeedback>
      <NoDecorationLink to={`/pokemon/${data.id}`}>
        <CenteredFlexCol $gap={'1rem'}>
          <PokemonSpriteWrapperChainLink>
            <PokemonSpriteChainLink src={data.spriteSrc} alt={`pokemon ${data.name}`}/>
          </PokemonSpriteWrapperChainLink> 
          <Title $color="#fff">{data.name}</Title>
        </CenteredFlexCol>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
}

export default PokemonVarietyCard