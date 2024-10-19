import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, border-style, #root{
    min-height:100%;
}

body{
    background:${(props) => props.theme.colors.gray900};    
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
}
`;
