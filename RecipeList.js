import { Link } from 'react-router-dom';
import { useState } from 'react';

function RecipeList({ recipes }) {
  const [search, setSearch] = useState('');
  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>All Recipes</h1>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width="100" />
            <p>{recipe.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
