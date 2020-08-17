/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/17/2020
 */

import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Post = styled.View`
    margin-top: 10px;
`;

export const Header = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
`;

export const Name = styled.Text`
    font-weight: 600;
    flex-grow: 1;
`;

export const LikeIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-right: 5px;
`;

export const ViewsIcon = styled.Image`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;

export const LikeText = styled.Text`
    font-size: 12px;
    margin-right: 10px;
`;

export const ViewsText = styled.Text`
    font-size: 12px;
`;

export const Description = styled.Text`
    padding: 15px;
    line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;
`;