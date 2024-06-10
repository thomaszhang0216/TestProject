import type { NextPage } from "next";
import { useMemo, useState, type CSSProperties } from "react";

export type StateDragItemType = {
  className?: string;
  imagesize?: string;
  beachWaterBeachWater?: string;
  badgesDots?: string;
  line1Text?: string;
  dTopIconContainer?: string;
  heart?: boolean;

  /** Style props */
  stateDragItemMargin?: CSSProperties["margin"];
  stateDragItemPosition?: CSSProperties["position"];
  stateDragItemTop?: CSSProperties["top"];
  stateDragItemLeft?: CSSProperties["left"];
};

const StateDragItem: NextPage<StateDragItemType> = ({
  className = "",
  beachWaterBeachWater,
  imagesize,
  badgesDots,
  line1Text = "Scotland Island",
  dTopIconContainer,
  stateDragItemMargin,
  stateDragItemPosition,
  stateDragItemTop,
  stateDragItemLeft,
  heart,
}) => {
  const [dragged, setDragged] = useState(false);
  const stateDragItemStyle: CSSProperties = useMemo(() => {
    // dragged? className ='transition-opacity duration-500 ease-in-out opacity-100' : 'transition-opacity duration-500 ease-in-out opacity-0'; : className="";
    if (dragged) {
      className =
        "transform w-[380px] pl-[21px] duration-500 overflow-hidden shrink-0 border-none bg-gray-100 bg-gray-100 bg-transparent";
      imagesize =
        "transform  pl-[0px] duration-500 w-24 relative rounded-8xs h-24 overflow-hidden shrink-0";
    } else {
      className = "w-72";
      imagesize =
        " transform  duration-500 w-8 relative rounded-8xs h-8 overflow-hidden shrink-0";
    }

    return {
      className,
      imagesize,
      margin: stateDragItemMargin,
      position: stateDragItemPosition,
      top: stateDragItemTop,
      left: stateDragItemLeft,
    };
  }, [
    stateDragItemMargin,
    stateDragItemPosition,
    stateDragItemTop,
    stateDragItemLeft,
    dragged,
  ]);

  const onMouseOverHandler = () => {
    setDragged(true);
  };

  const onMouseLeaveHandler = () => {
    setDragged(false);
  };

  return (
    <div
      className={`shadow-[0px_8px_16px_rgba(6,_31,_48,_0.08)] rounded-lg bg-white-white-100 box-border overflow-hidden flex flex-row items-center justify-start p-4 gap-[12px] text-left text-mid text-gullwing-gullwing-9 font-caption-1-medium border-[1px] border-solid border-gray ${className}`}
      style={stateDragItemStyle}
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className={`${imagesize}`}>
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={beachWaterBeachWater}
        />
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
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 px-1">
        <div className="self-stretch relative leading-[22px]  overflow-hidden text-ellipsis whitespace-nowrap">
          {line1Text}
        </div>
        <div className="flex flex-row items-start justify-start gap-[4px] text-center text-mid text-gullwing-gullwing-4">
          <div
            className={`${
              dragged ? "" : "hidden"
            }   self-stretch flex flex-row items-start justify-start pt-1 px-0 pb-0`}
          >
            <img
              className="w-4 relative h-4"
              alt=""
              src="/dtop-icon-container2.svg"
            />
          </div>
          <a
            className={`${
              dragged ? "" : "hidden"
            }   [text-decoration:none] relative leading-[22px] text-[inherit] whitespace-nowrap`}
          >
            Sydney, Australia
          </a>
        </div>
      </div>
      <div className="self-stretch w-4 hidden flex-row items-center justify-start">
        <img
          className="w-4 relative h-4 hidden"
          alt=""
          src={dTopIconContainer}
        />
      </div>
    </div>
  );
};

export default StateDragItem;
