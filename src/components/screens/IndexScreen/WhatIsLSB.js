/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';

const { background, breakpoint, color, pageMargins, typography } = styles;

const WhatIsLSBWrapper = styled.div`
  background: ${background.app};
  border-top: 1px solid ${color.medium};
  border-bottom: 1px solid ${color.medium};
  padding: 60px 0;
  margin-top: 80px;
`;

const Content = styled.div`
  ${pageMargins};
  text-align: center;

  @media (min-width: ${breakpoint * 1.5}px) {
    text-align: left;
    display: flex;
    align-items: center;
  }

  video {
    width: 327px;
    max-width: 100%;
    margin-top: 30px;

    @media (min-width: ${breakpoint * 1.5}px) {
      width: 327px;
      margin-left: 160px;
    }
  }
`;

const BannerHeading = styled.div`
  font-size: ${typography.size.m2}px;
  font-weight: ${typography.weight.black};
  line-height: 36px;
`;

const BannerText = styled.div`
  font-size: ${typography.size.s3}px;
  line-height: 28px;
  margin-top: 8px;
`;

const WhatIsLSB = () => (
  <WhatIsLSBWrapper>
    <Content>
      <div>
        <BannerHeading>What is Fidisys Playbook?</BannerHeading>
        <BannerText>
        This playbook explains the step by step process we follow in fidisys to build awesome products to our clients which in turn used by millions or billions of end users. We are passionate about what we build and our primary focus is to help clients to transform their ideas into reality. We have also created our own products and dozens of open source libraries.
        </BannerText>
      </div>

      <video autoPlay muted playsInline loop>
        <source
          src="/frontpage/learnstorybook-componentdrivendevelopment-optimized.mp4"
          type="video/mp4"
        />
      </video>
    </Content>
  </WhatIsLSBWrapper>
);

export default WhatIsLSB;
