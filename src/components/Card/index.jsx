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
          <a href={link} target="_blank">
            {title}
          </a>
          <i className="bx bx-link-external"></i>
        </LinkUrl>
      </CardLink>
    </CardContainer>
  );
}

export default Card;
