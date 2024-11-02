import styled, { css, keyframes } from 'styled-components';
import { SkeletonProps } from '.';

const waveEffect = keyframes`
0%{
    background-position: 0%
}
50%{
    background-position: -50%
}
75%{
    background-position: -125%
}
100%{
    background-position: -200%
}

`;

export const SkeletonElement = styled.div<SkeletonProps>`
    background: linear-gradient(
        90deg,
        ${(props) => props.theme.colors.gray900} 0%,
        #0a0a0a 40%,
        ${(props) => props.theme.colors.gray900} 100%
    );

    background-size: 200%;
    border-radius: 4px;

    animation: ${waveEffect} 1s linear infinite;

    ${(props) =>
        props.type === 'title' &&
        css`
            width: 100%;
            height: 32px;
        `}

    ${(props) =>
        props.type === 'thumbnail' &&
        css`
            width: 100%;
            height: 200px;
            margin: 0.1rem 0;
            border-radius: 10px;
        `}
`;
