import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { getRecipes, saveRecipes } from './utils/localStorage';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import About from './pages/About';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(getRecipes());
  }, []);

  useEffect(() => {
    saveRecipes(recipes);
  }, [recipes]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipes/new" element={<AddRecipe setRecipes={setRecipes} />} />
        <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;