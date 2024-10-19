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

    transition: width 0.4s;

    button {
        background: none;
        width: 100%;
        border: none;
    }

    nav {
        flex: 1;
        width: 100%;
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
                    transition: fill 0.4s;
                }

                span {
                    font-size: 1rem;
                    transition: color 0.4s;
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

    @media (max-width: 720px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;

        width: 100%;
        height: 5rem;
        padding: 0 0;
        overflow-y: auto;

        button {
            display: none;
        }

        nav {
            height: 100%;

            ul {
                flex-direction: row;
                align-items: center;
            }

            li {
                a {
                    flex-direction: column;
                    padding: 0rem;

                    svg {
                        width: 3.25rem;
                        height: 3.25rem;
                    }

                    span {
                        display: none;
                    }

                    &.active {
                        &::after {
                            display: none;
                        }
                    }
                }
            }
        }
    }
`;
