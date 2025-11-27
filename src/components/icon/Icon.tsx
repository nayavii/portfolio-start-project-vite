import iconsSprite from '../../assets/images/icons_sprite.svg';
import styled from 'styled-components';

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

export const Icon = ({iconId, width, height, viewBox}:IconPropsType) => {
  return (
    <Svg width={width || "120px"} height={height || "120px"} viewBox={viewBox || "0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </Svg>
  )
}

const Svg = styled.svg`
  display: block;
  margin: 0 auto;
  
`