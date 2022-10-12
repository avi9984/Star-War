import Container from 'react-bootstrap/Container'
import "bootswatch/dist/lux/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import CharacterDetailsPage from './pages/CharacterDetailsPage'
import FilmsPage from './pages/FilmsPage'
import FilmDetailsPage from './pages/FilmDetailsPage'
import NotFound from './pages/NotFound'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Container className="py-3">
				<Routes>
					<Route path="/" end element={<HomePage />} />
          <Route path="/characters/" element={<CharactersPage />} />
          <Route path="/films/" element={<FilmsPage />} />
          <Route path="/films/:id" element={<FilmDetailsPage />} />
          <Route path="/characters/:id" element={<CharacterDetailsPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
    </div>
  );
}

export default App;
