import css from './GalleryItem.module.css';

export const GalleryItem = ({ url, desc }) => {
  return (
    <li className={css.gallery_item}>
      <img src={url} alt={desc} />
    </li>
  );
};
