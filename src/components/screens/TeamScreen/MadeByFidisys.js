import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import Subheading from './Subheading';
import ShadowBox from '../../basics/ShadowBox';

const { breakpoint, color, typography } = styles;

const FidisysShadowBox = styled(ShadowBox)`
  margin-top: 24px;
  padding: 20px;

  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${color.darkest};

  transition: all 150ms ease-out;

  &:hover {
    transform: translate3d(0, -3px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }

  > img {
    display: block;
    flex: 0 0 50px;
    height: 50px;
    margin-right: 16px;
  }

  div {
    flex: 1;
  }

  @media (min-width: ${breakpoint}px) {
    padding: 40px;

    > img {
      flex: 0 0 60px;
      height: 60px;
      margin-right: 24px;
    }
  }
`;

const Bold = styled.span`
  font-weight: ${typography.weight.bold};
`;

const MadeByFidisys = () => (
  <>
    <Subheading>Made by</Subheading>

    <FidisysShadowBox as="a" target="_blank" rel="noopener noreferrer" href="https://www.fidisys.com/">
      <img alt="Fidisys, the product building company" src="/icon-fidisys.png" />
      <div>
        <Bold>Fidisys is startup company</Bold> run by some of the best coders & industry best experts, united together and to deliver world class applications. We help other startups to build awesome products with latest tech stack.{' '}
      </div>
    </FidisysShadowBox>
  </>
);

export default MadeByFidisys;
