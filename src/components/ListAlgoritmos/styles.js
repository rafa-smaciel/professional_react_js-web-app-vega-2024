import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background: #FFFF;
    display: flex;
`

export const Buttons = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    
button, link {
    background: #FFFFFF;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    text-decoration: none;

    &:hover{
    color: #891A14;
    transition: 0.25s;
    }
}
`
