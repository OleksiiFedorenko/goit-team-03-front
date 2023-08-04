import Icons from './sprite.svg'
import { IconStyled } from './Icon.styled';

export const Icon = ({id}) => {
    return (
        <IconStyled>
            <use href={Icons + "#icon-" + id}></use>
        </IconStyled>
    )
}