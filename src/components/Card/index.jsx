import React from 'react';

import {
  CardContainer,
  CardLink,
  CardTitle,
  LinkImg,
  LinkUrl,
  CardDes,
} from './style.jsx';

function Card({ cor, title, param, link, icone }) {
  const handleRedirect = (l) => {
    console.log(link);
    window.open(`http://${link}`, '_blank');
  };
  return (
    <CardContainer color={cor}>
      <CardTitle>
        <h3>{title}</h3>
      </CardTitle>
      <CardDes>
        <p>{param}</p>
      </CardDes>
      <CardLink>
        <LinkImg>
          <img src={icone} alt="icone" />
        </LinkImg>
        <LinkUrl color={cor}>
          <button onClick={handleRedirect}>{title}</button>
          <i className="bx bx-link-external"></i>
        </LinkUrl>
      </CardLink>
    </CardContainer>
  );
}

export default Card;
