import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import whatsapp from '../../assets/whats.svg';
import logoVega from '../../assets/logovega190224.svg';
import acessar from '../../assets/acessar.svg';

function Header() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 90);
    });
  }

  useEffect(() => {
    handleScroll();
    // Limpa o event listener quando o componente for desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <S.Container scroll={scroll}>
      <S.Logo href="/">
        <img src={logoVega} alt="Vega Robotics" id="logo"/>
      </S.Logo>

      <S.Center>
        <Link to="/">Início</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Soluções</Link>
        <Link to="/">Contato</Link>
      </S.Center>
      <S.Acessar>
        <img src={acessar} alt="Vega Robotics" id="acess"/>
      </S.Acessar>

      <S.WhatsApp href="https://wa.me/+5511950091919" target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="WhatsApp" />
      </S.WhatsApp>
    </S.Container>
  );
}

export default Header;
