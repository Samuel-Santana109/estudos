import styled from "styled-components";

export const HomeContainer = styled.main `
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-1500']};
    font-weight: bold;
    font-size:1.125rem;
    padding: 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus{
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};
    }

    &::placeholder{
        color: ${(props) => props.theme['gray-400']}
    }
`

export const Minutes = styled(BaseInput)`
    //O flex ele é um atalho para algumas propriedades do flex
    flex: 1;
`


export const TaskInput = styled(BaseInput)`
    // width: 4rem; no video esta assim mas no meu esta dando erro  
    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`



export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['green-700']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`

export const CouwtdowContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme["green-600"]};

    display: flex;
    gap: 1rem;

    span{
        background: ${(props) => props.theme['gray-1600']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`

export const Separator = styled.div`

    padding: 2rem 0;
    color: ${(props) => props.theme['green-800']};
`

export const StartButton = styled.button`

    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${(props) => props.theme['green-600']};
    color: ${(props) => props.theme['gray-1400']};

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background: ${(props) => props.theme['green-800']};
    }

`