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
    <main>
    
      <Home />
      <About />
      <RecipeList />
      <RecipeDetail />
      <Navbar />
      <AddRecipe />
      <EditRecipe />
      
    </main>
   );
 }

export default App;