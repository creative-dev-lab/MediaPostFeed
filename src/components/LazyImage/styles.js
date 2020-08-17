/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/14/2020
 */

import styled from 'styled-components/native';

export const Small = styled.ImageBackground`
  width: 100%;
  background: #eee;
  aspect-ratio: ${props => props.aspect};
`;

export const Original = styled.Image`
  width: 100%;
  aspect-ratio: ${props => props.aspect};
`;
