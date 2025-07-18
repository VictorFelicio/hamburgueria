import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 58.75rem;
    padding: 2rem;
    margin: 0 auto;
`;

export const Inner = styled.main`
    background: ${({ theme }) => theme.colors.black};
    padding: 2rem 2.5rem;
    border-radius: 8px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    .error {
        color: ${({ theme }) => theme.colors.red};
        font-size: 0.85rem;
        letter-spacing: 0.025rem;
    }

    h4 {
        margin: 2.5rem 0 2rem;

        &:first-child {
            margin-top: 0;
        }
    }

    .grouped {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
    }

    .field {
        flex-grow: 1;
        margin-bottom: 1rem;
    }

    label {
        display: block;
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 0.5rem;
    }

    input[type='email'],
    input[type='text'],
    input[type='number'],
    input[type='tel'],
    select {
        flex-grow: 1;
        background-color: ${({ theme }) => theme.colors.gray800};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid transparent;
        border-radius: 4px;
        transition: all 0.2s;
        height: 43px;
        width: 100%;
        margin: 0 0 1rem;
        padding: 0.7rem;
        outline: none;
    }

    select {
        option {
            &:hover {
                background-color: ${({ theme }) => theme.colors.red};
            }
        }
    }

    @media (max-width: 540px) {
        .grouped {
            flex-direction: column;
        }
    }
`;
