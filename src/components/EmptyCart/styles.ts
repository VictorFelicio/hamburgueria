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

export const Button = styled(Link)``;
