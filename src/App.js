import Pages from './pages/Pages';
import Categories from './components/Categories';
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork></GiKnifeFork>
          <Logo to={'/'}>delicious</Logo>
        </Nav>
        <Search/>
        <Categories/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 0rem;

  svg{
    font-size: 2rem;
  }
`;



export default App;
