const STORAGE_KEY = 'recipes';

export const getRecipes = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : []; // Default to an empty array if no data is found
};

export const saveRecipes = (recipes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  } catch (e) {
    console.error('Failed to save recipes:', e);
  }
};
