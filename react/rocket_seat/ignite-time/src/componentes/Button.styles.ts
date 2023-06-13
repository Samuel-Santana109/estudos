import styled, {css} from 'styled-components';

//Armazenar o nome das cores
export type ButtonCores = 'primary' | 'secundary' | 'Danger' | 'sucess'

//Chamou as cores de fato e define elas junto com os nomes acima
const buttonCores = {
    primary: 'purple',
    secundary: 'orange',
    Danger: 'red',
    sucess: 'green'
}

//Guardou as cores e guarda as propriedasdes do botao
interface buttonPaiPropriedades  {

    //As cores do meu button ficam guardadas aqui
    cores: ButtonCores
}

//Esta exportandoo button
export const ButtonPai = styled.button<buttonPaiPropriedades>`

//Esta definindo os estilos do botao
    width: 90px;
    height: 90px;

    ${props => {
        return `background-color: ${buttonCores[props.cores]}`
    }}
    
`

//No caso no video é variante no meu é cores