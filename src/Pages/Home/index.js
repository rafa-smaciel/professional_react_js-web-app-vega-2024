import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Video from '../../components/Video';
import Footer from '../../components/Footer';

function Home() {
  return (
    <S.Container>
        <Header/>
        <Video/>
        <Footer/>
    </S.Container>
  );
}

export default Home;