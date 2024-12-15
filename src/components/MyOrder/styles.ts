import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    position: absolute;
    right: 1.5rem;
    bottom: 0.5rem;

    background: ${(props) => props.theme.colors.red};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;

    transition: background 0.3s;

    &:hover {
        background: ${darken(0.1, '#AA2424')};
    }

    span:first-child {
        margin-right: 0.25rem;
        font-weight: 500;
        font-size: 1.2rem;
        letter-spacing: 0.05rem;
    }

    span:last-child {
        margin-left: 0.75rem;
        font-weight: 500;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.yellow};
    }

    @media (max-width: 720px) {
        top: 0.5rem;
        bottom: initial;

        span:first-child {
            display: none;
        }
    }
`;
