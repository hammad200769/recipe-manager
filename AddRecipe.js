import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function AddRecipe({ setRecipes }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    image: '',
    description: '',
    ingredients: [''],
    instructions: '',
    prepTime: '',
    author: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes((prev) => [...prev, { ...form, id: uuidv4() }]);
    navigate('/recipes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <div>
        <label>Ingredients:</label>
        {form.ingredients.map((ing, idx) => (
          <input
            key={idx}
            name="ingredient"
            value={ing}
            onChange={(e) => handleChange(e, idx)}
            placeholder={`Ingredient ${idx + 1}`}
          />
        ))}
        <button type="button" onClick={addIngredientField}>+ Add Ingredient</button>
      </div>
      <textarea name="instructions" placeholder="Instructions" value={form.instructions} onChange={handleChange} />
      <input name="prepTime" placeholder="Prep Time" value={form.prepTime} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
