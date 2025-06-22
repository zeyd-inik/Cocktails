import './SearchBar.scss';
import { Form } from 'react-router';

function SearchBar({ searchTerm }) {
  return (
    <div className="SearchBar">
      <Form>
        <div className="form_wrapper">
          <input
            type="search"
            name="search"
          />
          <button type="submit">Search</button>
        </div>
      </Form>
    </div>
  );
}

export default SearchBar;
