interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img style={{ width: "100%" }} src={src} alt={alt} />;
};

export default Image;
