import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EditRecipe({ recipes, setRecipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const existing = recipes.find(r => r.id.toString() === id);
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (existing) setForm({ ...existing });
  }, [existing]);

  const handleChange = (e, index) => {
    if (e.target.name === 'ingredient') {
      const updated = [...form.ingredients];
      updated[index] = e.target.value;
      setForm({ ...form, ingredients: updated });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const addIngredientField = () => {
    setForm({ ...form, ingredients: [...form.ingredients, ''] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updated = recipes.map(r => r.id.toString() === id ? form : r);
    setRecipes(updated);
    navigate(`/recipes/${id}`);
  };

  if (!form) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} />
      <input name="image" value={form.image} onChange={handleChange} />
      <textarea name="description" value={form.description} onChange={handleChange} />
      <div>
        <label>Ingredients:</label>
        {form.ingredients.map((ing, idx) => (
          <input
            key={idx}
            name="ingredient"
            value={ing}
            onChange={(e) => handleChange(e, idx)}
          />
        ))}
        <button type="button" onClick={addIngredientField}>+ Add Ingredient</button>
      </div>
      <textarea name="instructions" value={form.instructions} onChange={handleChange} />
      <input name="prepTime" value={form.prepTime} onChange={handleChange} />
      <input name="author" value={form.author} onChange={handleChange} />
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default EditRecipe;
