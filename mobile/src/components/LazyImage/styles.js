import styled from 'styled-components/native';
import { Animated } from 'react-native'

export const Small = styled.ImageBackground`
  width: 100%;
  background: #eee;
  aspect-ratio: ${props => props.ratio};
`;


export const Original = styled.Image`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;