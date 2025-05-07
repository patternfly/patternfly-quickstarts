import { FC, ReactNode, useState } from 'react';

interface FallbackImgProps {
  src: string;
  alt?: string;
  className?: string;
  fallback?: ReactNode;
}

const FallbackImg: FC<FallbackImgProps> = ({ src, alt, className, fallback }) => {
  const [isSrcValid, setIsSrcValid] = useState<boolean>(true);

  if (src && isSrcValid) {
    return <img className={className} src={src} alt={alt} onError={() => setIsSrcValid(false)} />;
  }

  return <>{fallback}</>;
};

export default FallbackImg;
