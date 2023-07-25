import styled from "styled-components"

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
