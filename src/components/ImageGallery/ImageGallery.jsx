import { GalleryItem } from 'components/ImageGalleryItem/GalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ array }) => {
  return (
    <ul className={css.gallery}>
      {array.map(el => {
        return <GalleryItem url={el.previewURL} desc={el.tags} key={el.id} />;
      })}
    </ul>
  );
};
