/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";
import PropTypes from "prop-types";

const ListsPois = ({
  className = "",
  title,
  subTitle,
  imgSrc,
  dTopIconContainerBackgroundColor,
  subTitleOpacity,
  frameDivOverflow,
  propOpacity,
  propTextDecoration,
}) => {
  const [dragged, setDragged] = useState(false);
  const listsPoisStyle = useMemo(() => {
    return {
      backgroundColor: dragged ? "#f9f9f9" : dTopIconContainerBackgroundColor,
      // opacity: subTitleOpacity,
    };
  }, [dTopIconContainerBackgroundColor, dragged]);

  const dTopImageContainerStyle = useMemo(() => {
    return {
      opacity: dragged ? "1" : propOpacity,
    };
  }, [subTitleOpacity, dragged]);

  const beachWaterBeachWaterStyle = useMemo(() => {
    return {
      overflow: frameDivOverflow,
      // opacity:dragged? "1": propOpacity,
    };
  }, [frameDivOverflow, dragged]);

  const frameDivStyle = useMemo(() => {
    return {
      // opacity: propOpacity,
      opacity: dragged ? "1" : propOpacity,
    };
  }, [propOpacity, dragged]);

  const subTitleStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      opacity: dragged ? "1" : propOpacity,
    };
  }, [propTextDecoration, dragged]);

  const onClickHandler = () => {
    setDragged(true);
  };

  const onMouseLeaveHandler = () => {
    setDragged(false);
  };

  return (
    <header
      className={`self-stretch cursor-pointer bg-white-white-100 box-border flex flex-row items-start justify-start py-[18px] px-10 gap-[24px] max-w-full shrink-0 text-left text-lgi text-gullwing-gullwing-9 font-caption-1-medium border-t-[1px] border-solid border-white-white-100 border-b-[1px] ${className}`}
      style={listsPoisStyle}
      onMouseOver={onClickHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div
        className="flex flex-row items-start justify-start overflow-hidden rounded-xl"
        style={dTopImageContainerStyle}
      >
        <img
          className="relative object-cover w-24 h-24"
          loading="lazy"
          alt=""
          src={imgSrc}
          style={beachWaterBeachWaterStyle}
        />
      </div>
      <div className="w-[328px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border max-w-full">
        <div
          className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[4px]"
          style={frameDivStyle}
        >
          <div className="self-stretch relative font-bold leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </div>
          <div className="flex flex-row items-start justify-start gap-[4px] text-center text-mid text-gullwing-gullwing-4">
            <div className="self-stretch flex flex-row items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 relative h-4"
                alt=""
                src="/dtop-icon-container2.svg"
              />
            </div>
            <a
              className="[text-decoration:none] relative leading-[22px] text-[inherit] whitespace-nowrap"
              style={subTitleStyle}
            >
              {subTitle}
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${
          dragged ? "" : "hidden"
        } flex items-center justify-center w-4 h-24`}
      >
        <svg
          width="16"
          height="4"
          viewBox="0 0 16 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.22222 2.05557C2.23756 2.05557 2.25 2.04313 2.25 2.02779C2.25 2.01245 2.23756 2.00002 2.22222 2.00002C2.20688 2.00002 2.19444 2.01245 2.19444 2.02779C2.19444 2.04313 2.20688 2.05557 2.22222 2.05557ZM0.75 2.02779C0.75 1.21471 1.40914 0.555571 2.22222 0.555571C3.03531 0.555571 3.69444 1.21471 3.69444 2.02779C3.69444 2.84088 3.03531 3.50002 2.22222 3.50002C1.40914 3.50002 0.75 2.84088 0.75 2.02779ZM8 2.05557C8.01534 2.05557 8.02778 2.04313 8.02778 2.02779C8.02778 2.01245 8.01534 2.00002 8 2.00002C7.98466 2.00002 7.97222 2.01245 7.97222 2.02779C7.97222 2.04313 7.98466 2.05557 8 2.05557ZM6.52778 2.02779C6.52778 1.21471 7.18691 0.555571 8 0.555571C8.81309 0.555571 9.47222 1.21471 9.47222 2.02779C9.47222 2.84088 8.81309 3.50002 8 3.50002C7.18691 3.50002 6.52778 2.84088 6.52778 2.02779ZM13.7778 2.05557C13.7931 2.05557 13.8056 2.04313 13.8056 2.02779C13.8056 2.01245 13.7931 2.00002 13.7778 2.00002C13.7624 2.00002 13.75 2.01245 13.75 2.02779C13.75 2.04313 13.7624 2.05557 13.7778 2.05557ZM12.3056 2.02779C12.3056 1.21471 12.9647 0.555571 13.7778 0.555571C14.5909 0.555571 15.25 1.21471 15.25 2.02779C15.25 2.84088 14.5909 3.50002 13.7778 3.50002C12.9647 3.50002 12.3056 2.84088 12.3056 2.02779Z"
            fill="#292B36"
          />
        </svg>
      </div>
    </header>
  );
};
ListsPois.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  /** Style props */
  dTopIconContainerBackgroundColor: PropTypes.any,
  subTitleOpacity: PropTypes.any,
  frameDivOverflow: PropTypes.any,
  propOpacity: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default ListsPois;
