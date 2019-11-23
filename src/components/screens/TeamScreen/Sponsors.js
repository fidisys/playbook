import React from 'react';
import styled from 'styled-components';
import { Link, styles } from '@storybook/design-system';
import Subheading from './Subheading';
import BoxLink from '../../basics/BoxLink';

const { breakpoint, typography } = styles;

const SubheadingMessage = styled.div`
  margin-top: 16px;
`;

const SponsorsList = styled.div`
  margin-top: 24px;
  display: flex;
`;

const SponsorBoxLink = styled(BoxLink)`
  && {
    height: 120px;
    width: calc(33% - 10px);
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.s2}px;

    &:last-of-type {
      margin-right: 0;
    }

    img {
      max-width: 76%;
    }

    @media (min-width: ${breakpoint}px) {
      height: 180px;
      max-width: none;

      img {
        max-width: initial;
      }
    }
  }

  span {
    display: flex;
    justify-content: center;
  }
`;

const SponsorUsLink = styled(Link)`
  &,
  &:hover {
    transform: none;
  }
`;

const Sponsors = () => (
  <>
    <Subheading>Sponsors</Subheading>

    <SubheadingMessage>
      Implementing above strategies will be possible with the help of sponsors for building idea from sketch to live.
    </SubheadingMessage>

    <SponsorsList>
      {/* <SponsorBoxLink to="">
        <img alt="sponser" src="" />
      </SponsorBoxLink> */}

      <SponsorBoxLink to="mailto:hello@fidisys.com">
        <SponsorUsLink as="span">Sponsor us</SponsorUsLink>
      </SponsorBoxLink>
    </SponsorsList>
  </>
);

export default Sponsors;
