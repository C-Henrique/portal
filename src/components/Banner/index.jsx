import React from 'react';
import { BannerContainer, BannerTitle, Autenticar } from './style';

function Banner() {
  return (
    <BannerContainer>
      <BannerTitle>
        <h1>Auto Peça </h1>
        <div>
          <span>Padre Cícero</span>
          <i
            className="bx bx-car"
            style={{
              color: 'wheat',
              fontSize: 30,
              padding: 5,
              position: 'absolute',
            }}
          ></i>
        </div>
      </BannerTitle>
      <Autenticar>
        <a href="http://192.168.0.12:4100" target="_blank">
          Autenticar
        </a>
      </Autenticar>
    </BannerContainer>
  );
}

export default Banner;
