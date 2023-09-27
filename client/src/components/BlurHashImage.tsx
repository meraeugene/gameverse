import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { useMediaQuery } from "react-responsive";

type BlurHashImageProps = {
  src: string;
  className?: string;
  hash: string;
  alt: string;
  height: number[];
  width?: number;
};

const BlurHashImage = (props: BlurHashImageProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [height, setHeight] = useState<number | undefined>();

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const isDesktopOrLaptop = useMediaQuery({ maxWidth: 1536 });

  const width = props.width || "100%";

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = props.src;
  }, [props.src]);

  useEffect(() => {
    if (isMobile) {
      setHeight(props.height[0]);
    } else if (isTablet) {
      setHeight(props.height[1]);
    } else if (isDesktopOrLaptop) {
      setHeight(props.height[2]);
    }
  }, [isMobile, isDesktopOrLaptop, isTablet]);
  return (
    <>
      <div className={`${imageLoaded ? "hidden" : "flex"} `}>
        <Blurhash
          hash={props.hash}
          width={width}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          height={height}
        />
      </div>
      <img
        className={`${props.className} ${imageLoaded ? "block" : "hidden"} `}
        src={props.src}
        alt={props.alt}
      />
    </>
  );
};

export default BlurHashImage;
