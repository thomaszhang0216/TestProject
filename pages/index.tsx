import type { NextPage } from "next";
import VersionNoSection from "../components/version-no-section";
import StateDragItem from "../components/state-drag-item";

const LeftContent: NextPage = () => {
  return (
    <div className="h-full relative shadow-[0px_2px_4px_rgba(6,_31,_48,_0.16)] bg-white-white-100 w-[568px] mx-auto flex flex-col items-center justify-start">
      <VersionNoSection
        dTopIconContainer="/dtop-icon-container.svg"
        vector1="/vector-1.svg"
        badgesDots="/badges--dots.svg"
        dTopIconContainer1="/dtop-icon-container.svg"
        badgesDots1="/badges--dots.svg"
        dTopIconContainer2="/dtop-icon-container.svg"
        peopleAndActionPeopleAndA="/people-and-actionpeople-and-action@2x.png"
        badgesDots2="/badges--dots.svg"
        dTopIconContainer3="/dtop-icon-container.svg"
        badgesDots3="/badges--dots.svg"
        dTopIconContainer4="/dtop-icon-container.svg"
        badgesDots4="/badges--dots.svg"
        dTopIconContainer5="/dtop-icon-container.svg"
        peopleAndActionPeopleAndA1="https://s3-alpha-sig.figma.com/img/e253/cf93/201d580a5b1f652a69fc016d40a9577d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~Y6Nq3FRvy9AJTdMxxrT2OwyhCHcdJkb5XuS0sQqW-otL83tyOINPxCvh6AHSQFD4UqOlI~afif4jV8VMvadXRKKXRguS2moAYg2pg6BzekT3ugPCnBMGvYpjBSZg5fVZSw1UaahF9BYc5eLunufzTRd4WdFHMjNsFMRydHoQ5NuXrcRsxBnXJ39Jo00pcUADpUgBtTTeDFV9ts0dhcwbQZh0CiD95e~LHaENMYZLdtA3XsO6FVTbtemSDrM8Os04dTiuwi6ZYvfvhiK8aFAVUSNAVSbyraNK3ngBvFpTCVkhLu5wAnGFX597B85RPKGzldF09lM6dgU94LXRU4oQ__"
        badgesDots5="/badges--dots.svg"
        dTopIconContainer6="/dtop-icon-container.svg"
        dragZone
        versionNoSectionFlex="1"
        dragZoneWidth="unset"
        dragZoneAlignSelf="stretch"
        listsPoisBackgroundColor="#f4f5f6"
        dTopImageContainerOpacity="0.3"
        frameDivOpacity="0.3"
        heart={false}
      />
      <div className="w-[182px] flex-1 hidden z-[1]" />

      <img
        className="w-4 absolute !m-[0] top-[16px] right-[16px] h-4 hidden z-[2]"
        alt=""
        src="/dtop-icon-container3.svg"
      />
      <StateDragItem
        beachWaterBeachWater="/people-and-actionpeople-and-action@2x.png"
        badgesDots="/badges--dots.svg"
        line1Text="Bridge Climb"
        dTopIconContainer="/dtop-icon-container.svg"
        stateDragItemMargin="0 !important"
        stateDragItemPosition="absolute"
        stateDragItemTop="125px"
        stateDragItemLeft="189px"
        heart={false}
      />
    </div>
  );
};

export default LeftContent;
