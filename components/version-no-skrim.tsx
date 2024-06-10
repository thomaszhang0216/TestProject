import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type VersionNoSkrimType = {
  className?: string;
  beachWaterBeachWater?: string;
  badgesDots?: string;
  heart?: boolean;

  /** Style props */
  versionNoSkrimWidth?: CSSProperties["width"];
  versionNoSkrimHeight?: CSSProperties["height"];
  versionNoSkrimPosition?: CSSProperties["position"];
  versionNoSkrimBorderRadius?: CSSProperties["borderRadius"];
  versionNoSkrimOverflow?: CSSProperties["overflow"];
  versionNoSkrimOpacity?: CSSProperties["opacity"];
};

const VersionNoSkrim: NextPage<VersionNoSkrimType> = ({
  className = "",
  beachWaterBeachWater,
  badgesDots,
  heart = false,
  versionNoSkrimWidth,
  versionNoSkrimHeight,
  versionNoSkrimPosition,
  versionNoSkrimBorderRadius,
  versionNoSkrimOverflow,
  versionNoSkrimOpacity,
}) => {
  const versionNoSkrimStyle: CSSProperties = useMemo(() => {
    return {
      width: versionNoSkrimWidth,
      height: versionNoSkrimHeight,
      position: versionNoSkrimPosition,
      borderRadius: versionNoSkrimBorderRadius,
      overflow: versionNoSkrimOverflow,
      opacity: versionNoSkrimOpacity,
    };
  }, [
    versionNoSkrimWidth,
    versionNoSkrimHeight,
    versionNoSkrimPosition,
    versionNoSkrimBorderRadius,
    versionNoSkrimOverflow,
    versionNoSkrimOpacity,
  ]);

  return (
    <div
      className={`w-[1000px] max-w-full h-[1000px] ${className}`}
      style={versionNoSkrimStyle}
    >
      <img
        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={beachWaterBeachWater}
      />
      {heart && (
        <div className="absolute right-[20px] bottom-[20px] w-8 h-8 hidden">
          <div className="absolute top-[calc(50%_-_26px)] left-[calc(50%_-_26px)] rounded-[50%] bg-black-black-40 w-[52px] h-[52px] hidden" />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/actions--love.svg"
              />
            </div>
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/actions--love1.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[0px] right-[0px] w-1 h-1 hidden"
            alt=""
            src={badgesDots}
          />
        </div>
      )}
    </div>
  );
};

export default VersionNoSkrim;
