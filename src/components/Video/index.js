import React from 'react';
import VideoS from '../../assets/videohome.mp4';
import * as S from './styles';

function Video() {
    return (
        <S.Container>
            <S.Background />
            <S.Text>
                <h1>Sua indústria conectada ao futuro</h1>
                <h3>A Vega Robotics está pronta para auxiliar sua empresa a alcançar novos patamares. Conecte-se conosco para descobrir como podemos impulsionar o seu negócio.</h3>
            </S.Text>
            <S.Video>
                <video id="videoBanner" className="Video" autoPlay muted loop>
                    <source src={VideoS} type='video/mp4'></source>
                </video>
            </S.Video>
        </S.Container>
    );
}
export default Video;