import styled, { css } from 'styled-components';

// Preservando a fonte Inter que você já definiu
const interFont = css`
  font-family: "Inter", sans-serif;
`;

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 95px;
  background-color: #FFFFFF;
  padding: 0 20px; // O padding horizontal foi ajustado
  /* transition: all 300ms ease 0s; */
  /* background: ${props => props.scroll ? '#FFFFFF' : 'transparent'};
  border-bottom: ${props => props.scroll ? '2px solid #891A14' : 'none'};*/
  z-index: 10;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-left: 30px;
  img {
    height: 30px;
    max-height: 80px; // Ajuste conforme necessário
    transition: all .2s ease 0s;
  }
  &:hover {
    opacity: .8;
  }
`;

export const Acessar = styled.div`
    display: flex;
    margin-right: 30px;
    z-index: 1000; /* Garante que fique acima dos outros elementos */
    img {
    width: 100%;
    height: auto;
    transition: opacity 0.2s ease; /* Transição suave para a opacidade */
    
    &:hover {
      /* opacity: 0.8; Reduz ligeiramente a opacidade para indicar interatividade */
    }
  }
`;

export const Center = styled.div`
  ${interFont}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px; // Tamanho da fonte dos links
  font-weight: 600;
  color: #000000; // Cor do texto dos links
  margin-left: -80px;

  a {
    position: relative; // Posicionamento relativo para o pseudoelemento
    text-decoration: none;
    color: inherit;
    margin: 0 30px; // Aumenta o espaçamento entre os links do menu
    padding-bottom: 5px; // Ajuste conforme necessário para aumentar a distância vertical do sublinhado
    transition: color .2s ease 0s;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px; // Altura do sublinhado
      left: 0;
      bottom: -30px; // Ajuste negativo para mover para baixo, afastando do texto
      background-color: #FF69B4; // Cor do sublinhado
      transform: scaleX(0); // Inicia sem sublinhado
      transition: transform .2s ease-in-out;
      transform-origin: bottom right; // Animação começa da direita
    }

    &:hover {
      color: #FF69B4; // A cor de hover foi alterada para um rosa mais claro

      &::after {
        transform: scaleX(1); // Expande o sublinhado durante o hover
        transform-origin: bottom left; // Animação termina na esquerda
      }
    }
  }
`;

export const WhatsApp = styled.a`
  position: fixed; /* Posição fixa na tela */
  right: 20px; /* 20 pixels da borda direita */
  bottom: 20px; /* 20 pixels da borda inferior */
  width: 80px; /* Largura do ícone do WhatsApp */
  height: 80px; /* Altura do ícone do WhatsApp */
  z-index: 1000; /* Garante que fique acima dos outros elementos */
  
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: filter 0.3s ease, transform 0.3s ease; /* Adiciona transição suave para o filter e transform */
  
  &:hover {
    filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.3)); /* Aumenta a sombra para dar a sensação de elevação */
    transform: translateY(-5px); /* Move o botão 5 pixels para cima */
  }
  
  img {
    width: 100%;
    height: auto;
    transition: opacity 0.2s ease; /* Transição suave para a opacidade */
    
    &:hover {
      /* opacity: 0.8; Reduz ligeiramente a opacidade para indicar interatividade */
    }
  }
`;
