import GlobalStyle from 'style/globalStyle';
import StyledTheme from 'style/theme';
import VendingMachine from 'components/VendingMachine';
import Layout from 'style/Layout';

const App = () => {
  return (
    <StyledTheme>
      <GlobalStyle />
      <Layout>
        <VendingMachine />
      </Layout>
    </StyledTheme>
  );
};

export default App;
