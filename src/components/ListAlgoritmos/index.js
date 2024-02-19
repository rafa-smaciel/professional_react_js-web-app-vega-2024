import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

function ListAlgoritmos() {
  return (
    <S.Container>
      <S.Buttons>
        <button>
          <Link to="/pesobruto">Gross Weight Carbon Steel</Link>
        </button>
      </S.Buttons>
    </S.Container>
  );
}

export default ListAlgoritmos;