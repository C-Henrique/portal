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
  const handleClick = (links) => {
    window.open(
      links,
      'Rocket.Chat',
      '_blank',
      'noopener,noreferrer',
      'width=1558',
      'height=913'
    );
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
          <a href="#" onClick={() => handleClick(link)}>
            Link
          </a>
          <i className="bx bx-link-external"></i>
        </LinkUrl>
      </CardLink>
    </CardContainer>
  );
}

export default Card;
