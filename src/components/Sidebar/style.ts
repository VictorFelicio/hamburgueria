import styled, { css } from 'styled-components';

interface ContainerProps {
    isMenuOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`
    background-color: ${(props) => props.theme.colors.red};
    ${({ isMenuOpen }) =>
        isMenuOpen
            ? css`
                  width: 16.3rem;
              `
            : css`
                  width: 7.75rem;
              `};
    padding: 2rem 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: width 0.5s;

    button {
        background: none;
        width: 100%;
        border: none;
    }

    nav {
        flex: 1;
        widows: 100%;
        height: 100%;

        ul {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
        }

        li {
            a {
                display: flex;
                align-items: center;
                gap: 2rem;
                width: fit-content;
                position: relative;
                padding-left: 1.875rem;
                padding-right: 1.875rem;

                svg {
                    fill: ${(props) => props.theme.colors.white};
                    width: 4rem;
                    height: 4rem;
                    transition: fill 0.5s;
                }

                span {
                    font-size: 1rem;
                    transition: color 0.5s;
                }

                &.active {
                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        bottom: 0;
                        transform: translateY(-50%);

                        background-color: ${(props) =>
                            props.theme.colors.yellow};

                        width: 5px;
                        height: calc(100%+10px);
                        border-radius: 0 5px 5px 0;
                    }

                    svg {
                        fill: ${(props) => props.theme.colors.yellow};
                    }

                    span {
                        color: ${(props) => props.theme.colors.yellow};
                    }
                }
            }
        }
    }
`;
