import { useParams, Link, useNavigate } from 'react-router-dom';

function RecipeDetail({ recipes, setRecipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id.toString() === id);

  const handleDelete = () => {
    setRecipes(recipes.filter((r) => r.id.toString() !== id));
    navigate('/recipes');
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} width="200" />
      <p><b>Description:</b> {recipe.description}</p>
      <p><b>Ingredients:</b> {recipe.ingredients.join(', ')}</p>
      <p><b>Instructions:</b> {recipe.instructions}</p>
      <p><b>Prep Time:</b> {recipe.prepTime}</p>
      <p><b>Author:</b> {recipe.author}</p>
      <Link to={`/recipes/${id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default RecipeDetail;
