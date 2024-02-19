import styled from 'styled-components';

export const Container = styled.div`
    position: relative; // O contêiner deve ter posição relativa para que os filhos absolutos se posicionem em relação a ele
    width: 100%;
    height: 150vh; // Isso parece muito grande, certifique-se de que está correto para o seu design
`;

export const Background = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1; // O fundo está atrás do texto e do vídeo
    background-color: rgba(0, 0, 0, 0.1); // Isso escurece um pouco o vídeo
`;

export const Video = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; // Isso deve corresponder à altura do contêiner, não necessariamente 150vh
    z-index: 2; // O vídeo está acima do fundo, mas abaixo do texto
    overflow: hidden; // Isso evita que o vídeo exceda o tamanho do contêiner

    video {
        width: 100%;
        height: auto; // Mantém a proporção e cobre a largura do contêiner
    }
`;

export const Text = styled.div`
    position: absolute;
    top: 33%; // Centraliza verticalmente
    left: 50%; // Centraliza horizontalmente
    transform: translate(-50%, -50%); // Ajusta a centralização exata
    z-index: 3; // O texto está acima do vídeo e do fundo
    color: #FFF;
    text-align: center; // Centraliza o texto horizontalmente
    width: 100%; // O texto pode ter a largura total do contêiner

    h1 {
    font-size: 3rem; // Aumenta o tamanho da fonte do h1
    background: rgba(0, 0, 0, 0.5); // Fundo escuro para aumentar o contraste
    display: inline-block; // Faz com que o fundo se ajuste ao texto
    padding: 10px; // Espaço interno para separar o texto do fundo
    border-radius: 5px; // Bordas arredondadas para o fundo
    margin: 20px 0; // Margem vertical para separar o h1 do h3
  }

  h3 {
    font-size: 1.5rem; // Aumenta o tamanho da fonte do h3
    background: rgba(0, 0, 0, 0.5); // Fundo escuro para aumentar o contraste
    display: inline-block; // Faz com que o fundo se ajuste ao texto
    padding: 10px; // Espaço interno para separar o texto do fundo
  }
`;
