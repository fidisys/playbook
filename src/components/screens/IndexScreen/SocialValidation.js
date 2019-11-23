import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import User from '../../composite/User';

const { breakpoint, pageMargins, typography } = styles;

const SocialValidationWrapper = styled.div`
  ${pageMargins}

  && {
    margin-top: 80px;
  }
`;

const Heading = styled.div`
  font-size: 36px;
  font-weight: ${typography.weight.black};
  line-height: 36px;
  text-align: center;
`;

const Logo = styled.div`
  img {
    display: block;
    width: 100%;
    max-width: 100px;
    height: auto;
    max-height: 50px;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;

  @media (min-width: ${breakpoint * 1.25}px) {
    display: flex;
  }

  ${Logo} {
    margin: 20px;
    flex: 0 0 20%;
    display: flex;
    justify-content: center;

    @media (min-width: ${breakpoint * 1.25}px) {
      flex: 1;
    }
  }
`;

const Testimonials = styled.div`
  margin-top: 40px;

  @media (min-width: ${breakpoint * 1.25}px) {
    display: flex;
  }
`;

const Testimonial = styled.div`
  font-size: ${typography.size.s3}px;
  line-height: 28px;
  max-width: 300px;
  text-align: center;
  margin: 60px auto 0;

  &:first-of-type {
    margin-top: 0;
  }

  @media (min-width: ${breakpoint * 1.25}px) {
    margin-top: 0;
    margin-right: 83px;
    text-align: left;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const UserWrapper = styled(User)`
  margin-top: 20px;
  justify-content: center;

  @media (min-width: ${breakpoint * 1.25}px) {
    justify-content: flex-start;
  }
`;

const logos = [
  {
    src: '/brands/logo-1.svg',
    alt: '1',
  },

  {
    src: '/brands/logo-2.svg',
    alt: '2',
  },
  {
    src: '/brands/logo-3.svg',
    alt: '3',
  },
];

const SocialValidation = () => (
  <SocialValidationWrapper>
    <Heading>+100,000 readers so far</Heading>

    <Logos>
      {logos.map(logo => (
        <Logo key={logo.src}>
          <img src={logo.src} alt={logo.alt} />
        </Logo>
      ))}
    </Logos>

    <Testimonials>
      <Testimonial>
      ✍️Coming soon: Please watch this space for more updates from our team. Thanks for the patience!
        <UserWrapper
          src=""
          name=""
          detail=""
        />
      </Testimonial>

      <Testimonial>
      ✍️Coming soon: Please watch this space for more updates from our team. Thanks for the patience!
        <UserWrapper
          src=""
          name=""
          detail=""
        />
      </Testimonial>

      <Testimonial>
      ✍️Coming soon: Please watch this space for more updates from our team. Thanks for the patience!
        <UserWrapper
          src=""
          name=""
          detail=""
        />
      </Testimonial>
    </Testimonials>
  </SocialValidationWrapper>
);

export default SocialValidation;
