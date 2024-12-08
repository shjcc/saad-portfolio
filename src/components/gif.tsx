import React from 'react';

interface GifProps {
    src: string;
    alt: string;
}

const Gif: React.FC<GifProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} />;
};

export default Gif;
