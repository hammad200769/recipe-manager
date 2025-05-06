import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/recipes">Recipes</Link> |
      <Link to="/recipes/new">Add</Link> |
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;