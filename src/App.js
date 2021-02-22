import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import SearchAppBar from './components/navbar';
import CarouselImages from './components/carousal';
function App() {
  return (
    <Container style={{ padding: '0px' }}>
      <SearchAppBar />
      <CarouselImages />
    </Container>
  );
}

export default App;
