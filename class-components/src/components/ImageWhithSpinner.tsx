import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const ImageWithSpinner = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
  }, [src]);

  return (
    <>
      {loading && <Spinner />}
      <img className="details__item_image" src={src} alt="Item image" />
    </>
  );
};

export default ImageWithSpinner;


