import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ImgCManDivingImageType = {
  className?: string;
  imgCManDivingImageImgCMan?: string;

  /** Style props */
  imgCManDivingIconWidth?: CSSProperties["width"];
  imgCManDivingIconHeight?: CSSProperties["height"];
  imgCManDivingIconPosition?: CSSProperties["position"];
  imgCManDivingIconTop?: CSSProperties["top"];
  imgCManDivingIconRight?: CSSProperties["right"];
  imgCManDivingIconBottom?: CSSProperties["bottom"];
  imgCManDivingIconLeft?: CSSProperties["left"];
  imgCManDivingIconMaxHeight?: CSSProperties["maxHeight"];
};

const ImgCManDivingImage: NextPage<ImgCManDivingImageType> = ({
  className = "",
  imgCManDivingImageImgCMan,
  imgCManDivingIconWidth,
  imgCManDivingIconHeight,
  imgCManDivingIconPosition,
  imgCManDivingIconTop,
  imgCManDivingIconRight,
  imgCManDivingIconBottom,
  imgCManDivingIconLeft,
  imgCManDivingIconMaxHeight,
}) => {
  const imgCManDivingIconStyle: CSSProperties = useMemo(() => {
    return {
      width: imgCManDivingIconWidth,
      height: imgCManDivingIconHeight,
      position: imgCManDivingIconPosition,
      top: imgCManDivingIconTop,
      right: imgCManDivingIconRight,
      bottom: imgCManDivingIconBottom,
      left: imgCManDivingIconLeft,
      maxHeight: imgCManDivingIconMaxHeight,
    };
  }, [
    imgCManDivingIconWidth,
    imgCManDivingIconHeight,
    imgCManDivingIconPosition,
    imgCManDivingIconTop,
    imgCManDivingIconRight,
    imgCManDivingIconBottom,
    imgCManDivingIconLeft,
    imgCManDivingIconMaxHeight,
  ]);

  return (
    <img
      className={`w-[1000px] max-w-full h-[1000px] overflow-hidden shrink-0 object-cover ${className}`}
      alt=""
      src={imgCManDivingImageImgCMan}
      style={imgCManDivingIconStyle}
    />
  );
};

export default ImgCManDivingImage;
