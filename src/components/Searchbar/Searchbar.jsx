import css from './Searchbar.module.css';

export const Searchbar = ({ handleSubmit }) => {
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
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
