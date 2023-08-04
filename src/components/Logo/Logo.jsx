import { LogoWrapper, LogoImg, LogoText } from './Logo.styled';
import logoImg from '../../images/logo-img.png';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={logoImg} alt="Site logo" height={32} width={32} />
      <LogoText>TaskPro</LogoText>
    </LogoWrapper>
  );
};
