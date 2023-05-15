import React, { useEffect, useState } from 'react';
import Card from '../components/Card/index.jsx';
import GlobalStyle from '../styles/GlobalStyled.jsx';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { AppStyled } from '../styles/styles';
import db from '../assets/db/dado.json';
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(db);
  }, []);
  return (
    <>
      <Banner></Banner>
      <AppStyled>
        {data.map((element) => (
          <Card
            key={element.id}
            cor={element.cor}
            link={element.link}
            icone={element.icone}
            param={element.param}
            title={element.title}
            history={element.link}
          />
        ))}
        <GlobalStyle />
      </AppStyled>
      <Footer />
    </>
  );
}

export default Home;
