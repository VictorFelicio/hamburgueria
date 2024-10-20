import styled from 'styled-components';

export const Title = styled.h1`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-bottom: 3rem;

    font-size: ${(props) => props.theme.fontSize['4xl']};

    letter-spacing: 0.2rem;

    &::before {
        content: '';
        background: ${(props) => props.theme.colors.white};
        width: 42px;
        height: 5px;
        flex-shrink: 0;
        border-radius: 4px;
    }

    @media (max-width: 720px) {
        font-size: ${(props) => props.theme.fontSize['3xl']};
        justify-content: center;

        &::before {
            display: none;
        }
    }
`;
