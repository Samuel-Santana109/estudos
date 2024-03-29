import styled from "styled-components";
//Todos do styled-components tem que ter o nome de "styled"

export const HeaderContainer = styled.header`

        display: flex;
        align-items: center;
        justify-content: space-between;

        nav{
            display: flex;
            gap: 0.5rem;

            a {
                width: 3rem;
                height: 3rem;

                display: flex;
                justify-content: center;
                align-items: center;

                color: ${props => props.theme['white']};

                //Opcional
                border-top: 3px solid transparent;
                border-bottom: 3px solid transparent;

                &:hover{
                    border-bottom: 3px solid ${props => props.theme['green-500']};
                }

                //Esse active foi pegado no console.log quando é clicado no icone para trocar de pagina
                &.active{
                   color: ${props => props.theme['green-500']};
                }

            }
        }
`

