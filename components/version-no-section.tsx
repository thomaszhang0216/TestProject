import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { useState } from "react";
import ListsPois from "./lists-pois";
export type VersionNoSectionType = {
  className?: string;
  dTopIconContainer?: string;
  vector1?: string;
  badgesDots?: string;
  dTopIconContainer1?: string;
  badgesDots1?: string;
  dTopIconContainer2?: string;
  peopleAndActionPeopleAndA?: string;
  badgesDots2?: string;
  dTopIconContainer3?: string;
  badgesDots3?: string;
  dTopIconContainer4?: string;
  badgesDots4?: string;
  dTopIconContainer5?: string;
  peopleAndActionPeopleAndA1?: string;
  badgesDots5?: string;
  dTopIconContainer6?: string;
  dragZone?: boolean;
  heart?: boolean;

  /** Style props */
  versionNoSectionFlex?: CSSProperties["flex"];
  dragZoneWidth?: CSSProperties["width"];
  dragZoneAlignSelf?: CSSProperties["alignSelf"];
  listsPoisBackgroundColor?: CSSProperties["backgroundColor"];
  dTopImageContainerOpacity?: CSSProperties["opacity"];
  frameDivOpacity?: CSSProperties["opacity"];
};

const VersionNoSection: NextPage<VersionNoSectionType> = ({
  className = "",
  dTopIconContainer,
  vector1,
  badgesDots,
  dTopIconContainer1,
  badgesDots1,
  dTopIconContainer2,
  peopleAndActionPeopleAndA,
  badgesDots2,
  dTopIconContainer3,
  badgesDots3,
  dTopIconContainer4,
  badgesDots4,
  dTopIconContainer5,
  peopleAndActionPeopleAndA1,
  badgesDots5,
  dTopIconContainer6,
  dragZone,
  versionNoSectionFlex,
  dragZoneWidth,
  dragZoneAlignSelf,
  listsPoisBackgroundColor,
  dTopImageContainerOpacity,
  frameDivOpacity,
  heart,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const versionNoSectionStyle: CSSProperties = useMemo(() => {
    return {
      flex: versionNoSectionFlex,
    };
  }, [versionNoSectionFlex]);

  const dragZoneStyle: CSSProperties = useMemo(() => {
    return {
      width: dragZoneWidth,
      alignSelf: dragZoneAlignSelf,
    };
  }, [dragZoneWidth, dragZoneAlignSelf]);

  const listsPoisStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: listsPoisBackgroundColor,
    };
  }, [listsPoisBackgroundColor]);

  const dTopImageContainerStyle: CSSProperties = useMemo(() => {
    return {
      opacity: dTopImageContainerOpacity,
    };
  }, [dTopImageContainerOpacity]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      opacity: frameDivOpacity,
    };
  }, [frameDivOpacity]);

  return (
    <div
      className={`w-[568px] bg-white-white-100 max-w-full overflow-hidden flex flex-col items-start justify-start py-5 px-0 box-border text-left text-5xl text-gullwing-gullwing-9 font-caption-1-medium ${className}`}
      style={versionNoSectionStyle}
    >
      <div className="hidden flex-col items-start justify-start">
        <div className="w-[568px] flex flex-col items-start justify-start py-5 px-10 box-border gap-[32px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <div className="flex-1 relative leading-[30px] font-medium">
              New section 1
            </div>
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <div className="w-4 h-4 flex flex-row items-center justify-start">
                <img
                  className="w-4 relative h-4 hidden"
                  alt=""
                  src={dTopIconContainer}
                />
              </div>
              <img
                className="w-8 relative h-8"
                alt=""
                src="/dtop-icon-container1.svg"
              />
            </div>
          </div>
          <div className="w-[472px] h-0 hidden flex-col items-center justify-center">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
              alt=""
              src={vector1}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-lgi">
        <ListsPois
              imgSrc="./beach--waterbeach--water@2x.png"
              title="Scotland Island"
              subTitle="Sydney, Australia"
            />
            <div className="self-stretch h-[3px] relative bg-glacier-glacier-6" />

        <ListsPois
              imgSrc="https://www.figma.com/file/354cUkbY5l3TkPtyjd9Gl8/image/298f3b69cf895ed199940d5b6815c48a228d3a15"
              title={`The Charles Grand Brasserie & Bar`}
              subTitle="Lorem ipsum, Dolor"
            />
        <div className="w-[568px] relative bg-glacier-glacier-6 h-[3px] hidden" />
        <ListsPois
          imgSrc={peopleAndActionPeopleAndA}
          title="Bridge Climb"
          subTitle="Dolor, Sit amet"
          dTopIconContainerBackgroundColor="#f4f5f6"
          propOpacity="0.3"
        />

        <ListsPois
              imgSrc="https://s3-alpha-sig.figma.com/img/e4c8/8756/031c7b70f777d276f9bab782a2197365?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YNGgAUOMIb2fxOJQCcKkxTSyxGm~QZ~TFVP9YwqwUCeMs0zlwMe16OPS0eSNPc-dZpGSTglnLNw86Q3T~QIGeV~J5F9f3PTlH0KksgRfcQjX549lKlbfv7etz2bg8iNqCK4iw9B9zjUjO7WLeUEv-cCDDwmxOj94ryR5hb8YT30ngIseKxYWGi1XwgSrYW9jxWwb6KNuX6QxKaARyCV1LbGN5ERfBMHX2G7bDMC5iFqMbInTXTxLKj1G5k72qQJjW0yyqFdTEHFqmft-fkiuq9l5~b-DzyATBVOWZU8vsEIbXtigOCgsnQpzrHuwNF1qffNE7Io1l7uN84tfbcFGIg__"
              title="Scotland Island"
              subTitle="Sydney, Australia"
              dTopIconContainerBackgroundColor="#fff"
            />
        <ListsPois
              imgSrc="https://s3-alpha-sig.figma.com/img/8002/de46/51710977ac0545d334967df409f25245?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0A6vDU41L3~HnArx40Gc0XmUyzhP4ilrR8CkbeKw6ozLbXHQmktvmrLqQm9IX5-sozIe1VsMjSvic9hYjMQIhUXAWPzdZkpalN0Yre-G7hDWoOyVHD5Xj5BmTdK3LHWPt07wFJJPNv2l3cjreJ10IcIoEA6Ju-rwlOPFltk97uB4N6mHCWIznLw8DRhPSL5AzR-0zzoL3iMAH~VMya9HgPnfGAV0AtNaoSeywv~YRC0A-PUSfwWQzgaCiwKMoLawkZpHlp8587gy8w3FY2ShlBWDUFiB9Sf-q-brZpRnlf1-0pH9XApdeZk6P~6oC7zSlMsVSEYJkk4moPEhciKdQ__"
              title="Clam Bar"
              subTitle="Etcetera veni, Vidi vici"
              dTopIconContainerBackgroundColor="#fff"
            />
        <ListsPois
              imgSrc={peopleAndActionPeopleAndA1}
              title="Vivid Festival"
              subTitle="Sydney, Australia"
              dTopIconContainerBackgroundColor="#fff"
            />
      </div>
    </div>
  );
};

export default VersionNoSection;
