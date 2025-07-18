import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 1.25rem 0.5rem;

    h2 {
        max-width: 500px;
        font-size: 2rem;
    }

    svg {
        width: 100%;
        max-width: 32rem;
    }
`;

export const Button = styled(Link)`
    background-color: ${({ theme }) => theme.colors.red};
    max-width: 13rem;
    height: 3rem;

    border-radius: 8px;
    margin: 1rem 0 3rem;
    padding: 0 1.5rem;

    font-weight: 500;
    font-size: 1.25rem;
    line-height: 3rem;

    transition: background 0.3s;

    &:hover {
        background: ${darken(0.1, '#AA2424')};
    }
`;
