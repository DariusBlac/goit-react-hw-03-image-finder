import css from './Searchbar.module.css';

export const SearchBar = ({ handleSubmit }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.button_label}>Search</span>
        </button>

        <input
          name="query"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          required
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
