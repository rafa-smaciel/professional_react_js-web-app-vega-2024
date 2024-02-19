import styled from 'styled-components';

export const Container = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    width: 100%;
    height: 150vh;
    
    /* background-size: cover; */
`;

export const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    inset: 0px;
`;

export const Video = styled.div`
    /* width: 135vmin; */
    /* height: 90vmin; */
    /* opacity: 50%; */
    /* z-index: 2; */
    /* align-items: center;
    justify-content: center;
    align-content: center;
    align-self: center;
    border-image-slice: 100%;
    */
    #videoBanner {
        width: 100%;
    }

    /* @media (min-width: 1000px){
        #videoBanner {
            width: 100%;
        }
    } */

    /* @media (max-width: 700px){
        #videoBanner {
            width: 100%;
        }
    } */
`;

export const Text = styled.div`

    a {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 auto;
    }
`;