import Card from './components/Card';
import GlobalStyle from './styles/GlobalStyled.jsx';
import Banner from './components/Banner';
import { AppStyled } from './styles/styles';

function App() {
  return (
    <>
      <Banner></Banner>
      <AppStyled>
        <Card
          cor={'green'}
          link={'www.google.com'}
          param={'Sistema de Chat.'}
          title={'RocketChat'}
          icone={
            'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-rocketchat-is-the-leading-open-source-team-chat-software-solution-logo-color-tal-revivo.png'
          }
        />
        <Card
          cor={'red'}
          link={'www.google.com'}
          param={'Sistema de Chat.'}
          title={'RocketChat'}
          icone={
            'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-rocketchat-is-the-leading-open-source-team-chat-software-solution-logo-color-tal-revivo.png'
          }
        />
        <GlobalStyle />
      </AppStyled>
    </>
  );
}

export default App;
