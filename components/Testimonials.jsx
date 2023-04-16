import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

const FullWidth = styled.div`
  width: 99vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;
const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Company = styled.div`
  position: relative;
  width: ${(props) => props.scale * 75}px;
  height: ${(props) => props.scale * 75}px;
`;

const Circle = styled.div`
  position: absolute;
  transform: scale(0.5);
  object-position: center center;
  will-change: transform, opacity;
  width: ${(props) => props.scale * 200}px;
  height: ${(props) => props.scale * 200}px;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Logo = styled.img`
  display: block;
  /* https://stackoverflow.com/questions/24843676/how-can-i-fit-a-square-html-image-inside-a-circle-border */
  /* just making it < 70.7% */
  object-fit: contain;
  width: 80%;
  height: 80%;
`;

const icons = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sonlgaz.png/130px-Sonlgaz.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cevital_logo_2016.svg/langfr-1920px-Cevital_logo_2016.svg.png  ",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/SNTF.svg/1024px-SNTF.svg.png",
  "https://www.portdebejaia.dz/wp-content/uploads/2019/01/Logo-epb_fr.png",
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/SNVI_Logo_8.svg",
  "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bd/Cosider_Logo.svg/1200px-Cosider_Logo.svg.png",

  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Air_Algérie_Logo.svg/1200px-Air_Algérie_Logo.svg.png",
  "https://www.mdn.dz/site_principal/images/mdn.png",
  "https://sonatrach.com/img/header/sonatrach.png",
  "https://farissiabtp.dz/img/partenaires/anbt.png",
  "https://elmouchir.caci.dz/assets/images/entreprise/1666015450.jpg",
  "https://gicep-dz.com/html/ext/assets/img/skikda.png",
];

const Companies = ({ size, onStartPerformance, onEndPerformance }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Clients et partenaires
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {icons.map((icon) => (
            <img
              src={icon}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                objectPosition: "center",
                margin: "auto",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(withSize()(Companies));
