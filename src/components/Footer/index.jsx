import React from 'react';
import { FooterInfor, FooterTitle, FooterContainer } from './styles';
function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>
        <h3>Padre Cicero - T.I.C </h3>
      </FooterTitle>
      <FooterInfor>
        <div>
          <p>Suporte TI - Ramal</p>
          <span>9034</span>
        </div>
        <div>
          <p>E-mail</p>
          <span>suporte.ti@pecicero.com.br</span>
        </div>
      </FooterInfor>
    </FooterContainer>
  );
}

export default Footer;
