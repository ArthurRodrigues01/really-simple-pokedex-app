import useImagePreloader from "../hooks/useImagePreloader";
import usePokemonVariety from "../hooks/usePokemonVariety"
import PokemonVarietyCardLoadingFeedback from "./feedbacks/PokemonVarietyCardLoadingFeedback";
import { CenteredFlexCol, Title } from "./main-components";
import { PokemonSpriteChainLink, PokemonSpriteWrapperChainLink } from "./styles";

function PokemonVarietyCard({ link, name }: { link: string, name: string, }) {
  const { data, isLoading } = usePokemonVariety(link)
  const { hasLoaded } = useImagePreloader(data ? data.spriteSrc : '')

  if (data === null || isLoading || hasLoaded === false) {
    return <PokemonVarietyCardLoadingFeedback name={name}/>
  }


  return (
    <CenteredFlexCol $gap={'1rem'}>
      <PokemonSpriteWrapperChainLink>
        <PokemonSpriteChainLink src={data.spriteSrc} alt={`pokemon ${data.name}`}/>
      </PokemonSpriteWrapperChainLink> 
      <Title $color="#fff">{data.name}</Title>
    </CenteredFlexCol>
  )
}

export default PokemonVarietyCard