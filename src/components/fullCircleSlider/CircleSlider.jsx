import React, { useEffect } from 'react';
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { SiMicrosoft } from 'react-icons/si';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import { useIsInViewport } from './../../hooks/useInViewport';
import { useScrollDirection } from './../../hooks/useScrollDirection';
import Content from './Content';
const CustomContainer = styled.div`
  width: 100%;
  @media (min-width: 1300px) {
    max-width: 76vw !important;
  }
`;
const AppearedSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #000;
`;

const MainTitle = styled.div`
  font-size: 3rem;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  font-weight: 700;
  color: #151515;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const MainDescription = styled.div`
  font-size: 1.2rem;
  color: #6d6d6d;
  margin: 1rem auto;
  min-width: 300px;
  text-align: center;
`;
const LargeCircle = styled.div`
  width: ${(props) =>
    props.width ? `${props.width - props.width / 4}px` : 'calc(100vh - 48px)'};
  height: ${(props) =>
    props.width ? `${props.width - props.width / 4}px` : 'calc(100vh - 48px)'};
  border-radius: 50%;
  background: #263238;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1250px) {
    box-shadow: none;
  }
`;

const RoundedCircle = styled.div`
  width: ${(props) =>
    props.width ? `${props.width - props.width / 4}px` : 'calc(100vh - 48px)'};
  height: ${(props) =>
    props.width ? `${props.width - props.width / 4}px` : 'calc(100vh - 48px)'};
  border-radius: 50%;
  position: absolute;
  background-image: url('https://cutewallpaper.org/21/blue-ray-background/Spiral-Background-Swirl-Free-image-on-Pixabay.jpg');
  background-size: cover;
  background-position: center;
  transform: translate(-50%, -50%);
  transform: rotate(${(props) => props.rotate}deg);
  transition: transform 1s linear;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
`;

const Point = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  background: ${(props) => (props.isCurrent ? '#29B6F6' : '#BBDEFB')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 7rem;
  color: white;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => -props.rotate}deg)
    scale(${(props) => (props.isCurrent ? 1 : 0.5)});
  transition: all 1s linear;
  opacity: 1;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 1250px) {
    font-size: 3rem;
    box-shadow: none;
  }
`;

const ScrolledContainer = styled.div`
  width: 100%;
  height: 500vh;
  position: relative;
`;

const StickyContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1250px) {
    justify-content: flex-start;
    padding-top: 20px;
    padding-bottom: 50px;
  }
`;

const HiddenDivs = styled.div`
  width: 100%;
  height: 400vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
`;

const ContentContainer = styled.div`
  text-align: center;
  flex-direction: column;
  color: white;
  z-index: 99;
`;
const Items = [
  {
    title: 'Facebook',
    description:
      "Google is a multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Tech companies, known for its significant influence and presence in the internet sector. Google's mission is to organize the world's information and make it universally accessible and useful. Founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, Google has grown to become a global leader in technology and innovation.",
  },
  {
    title: 'Apple',
    description: `Apple Inc. is a multinational technology company that designs, manufactures, and markets consumer electronics, computer software, and online services. Founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple is known for its innovative products such as the iPhone, iPad, Mac computers, iPod, and Apple Watch. Its software includes the macOS and iOS operating systems, the iTunes media player, and the Safari web browser. Apple's App Store offers millions of apps, transforming the way people communicate, entertain, and work. The company also provides online services like iCloud, Apple Music, and Apple TV+. Apple is renowned for its distinctive brand and emphasis on design, quality, and user experience. It's one of the world's most valuable companies and a leader in the tech industry.`,
  },
  {
    title: 'Microsoft',
    description: `Microsoft Corporation is a multinational technology company known for its software, services, devices, and solutions that help individuals and businesses realize their full potential. Founded in 1975 by Bill Gates and Paul Allen, Microsoft became prominent for its operating system, MS-DOS, followed by the widely used Windows OS. Microsoft's product line includes Microsoft Office suite, Internet Explorer and Edge web browsers, and the Surface line of laptops and tablets. They are also significant players in cloud computing with their Azure platform. In addition to hardware and software, Microsoft has made a strong presence in the gaming industry with its Xbox video game consoles and the acquisition of game studios and services. Microsoft is recognized for its innovation and role in shaping the personal computing industry.`,
  },
  {
    title: 'Google',
    description: `Google is a multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Tech companies, known for its significant influence and presence in the internet sector. Google's mission is to organize the world's information and make it universally accessible and useful. Founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, Google has grown to become a global leader in technology and innovation.`,
  },
];

export default function FullCircleSlider() {
  const { width, height } = useWindowSize();
  const imageWidth = width < 1300 ? 100 : 300;
  const imageHeight = width < 1300 ? 100 : 300;
  const circleDim = width <= height ? width : height;

  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollDir = useScrollDirection();

  const isView1 = useIsInViewport(ref1);
  const isView2 = useIsInViewport(ref2);
  const isView3 = useIsInViewport(ref3);
  const isView4 = useIsInViewport(ref4);
  const isView5 = useIsInViewport(ref5);

  useEffect(() => {
    const getIndex = () => {
      if (isView1) {
        return 0;
      }
      if (isView2) {
        return 1;
      }
      if (isView3) {
        return 2;
      }
      if (isView4 || isView5) {
        return 3;
      }
    };
    setCurrentIndex(getIndex());
  }, [isView1, isView2, isView3, isView4]);

  return (
    <ScrolledContainer ref={ref}>
      <StickyContainer>
        <AppearedSection>
          <LargeCircle width={circleDim}>
            <ContentContainer>
              <Content currentIndex={currentIndex} items={Items} />
            </ContentContainer>
          </LargeCircle>
          <RoundedCircle width={circleDim} rotate={currentIndex * 90}>
            <Point
              width={imageWidth}
              height={imageHeight}
              rotate={currentIndex * 90}
              top={`-${imageHeight / 2}px`}
              left={`calc(50% - ${imageWidth / 2}px)`}
              isCurrent={currentIndex === 0}
            >
              <FaFacebookF />
            </Point>
            <Point
              width={imageWidth}
              height={imageHeight}
              rotate={currentIndex * 90}
              top={`calc(50% - ${imageHeight / 2}px)`}
              left={`-${imageWidth / 2}px`}
              isCurrent={currentIndex === 1}
            >
              <FaApple />
            </Point>
            <Point
              width={imageWidth}
              height={imageHeight}
              rotate={currentIndex * 90}
              top={`calc(100% - ${imageHeight / 2}px)`}
              left={`calc(50% - ${imageWidth / 2}px)`}
              isCurrent={currentIndex === 2}
            >
              <SiMicrosoft />
            </Point>
            <Point
              width={imageWidth}
              height={imageHeight}
              rotate={currentIndex * 90}
              src='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png'
              top={`calc(50% - ${imageHeight / 2}px)`}
              left={`calc(100% - ${imageWidth / 2}px)`}
              isCurrent={currentIndex === 3}
            >
              <FaGoogle />
            </Point>
          </RoundedCircle>
        </AppearedSection>
      </StickyContainer>
      <HiddenDivs>
        <div ref={ref1} style={{ height: '100vh', width: '100%' }}></div>
        <div ref={ref2} style={{ height: '100vh', width: '100%' }}></div>
        <div ref={ref3} style={{ height: '100vh', width: '100%' }}></div>
        <div ref={ref4} style={{ height: '100vh', width: '100%' }}></div>
        <div ref={ref5} style={{ height: '100vh', width: '100%' }}></div>
      </HiddenDivs>
    </ScrolledContainer>
  );
}
