import React from 'react';
import styled from 'styled-components';
import { Link } from '@storybook/design-system';
import User from '../../composite/User';
import Subheading from './Subheading';

const SubheadingMessage = styled.div`
  margin-top: 16px;
`;

const ContributorsList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const Contributor = styled.div`
  flex: 0 0 100%;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }

  @media (min-width: 440px) {
    flex: 0 0 50%;

    &:nth-child(n + 2) {
      margin-top: 0;
    }

    &:nth-child(n + 3) {
      margin-top: 20px;
    }
  }
`;

const ContributorUser = styled(User)`
  align-items: center;

  > :first-child {
    height: 48px;
    width: 48px;
    line-height: 48px;
    min-width: 48px;
    align-self: flex-start;
  }
`;

const SocialLink = props => <Link target="_blank" rel="noopener" tertiary {...props} />;

const contributors = [
  {
    src: '/placeholders/profile.png',
    name: 'Full Name',
    detail: <SocialLink href="https://github.com/">@fullname</SocialLink>,
  },
  {
    src: '/placeholders/profile.png',
    name: 'Full Name',
    detail: <SocialLink href="https://github.com/">@fullname</SocialLink>,
  },
  {
    src: '/placeholders/profile.png',
    name: 'Full Name',
    detail: <SocialLink href="https://github.com/">@fullname</SocialLink>,
  },
  {
    src: '/placeholders/profile.png',
    name: 'Full Name',
    detail: <SocialLink href="https://github.com/">@fullname</SocialLink>,
  },
  {
    src: '/placeholders/profile.png',
    name: 'Full Name',
    detail: <SocialLink href="https://github.com/">@fullname</SocialLink>,
  },
  {
    src: '/placeholders/profile.png',
    name: 'Full Name',
    detail: <SocialLink href="https://github.com/">@fullname</SocialLink>,
  },
  {
    src: '/placeholders/profile.png',
    name: 'Full Name',
    detail: <SocialLink href="https://github.com/">@fullname</SocialLink>,
  },
  {
    src: '/placeholders/profile.png',
    name: 'Full Name',
    detail: <SocialLink href="https://github.com/">@fullname</SocialLink>,
  },
];

const Contributors = () => (
  <>
    <Subheading>Contributors</Subheading>

    <SubheadingMessage>
      Amazing contributors from around the world help us to build any product with high scale and best practises.
      They ensure Playbook provides a quality stratagiecal experience for every startup.
    </SubheadingMessage>

    <ContributorsList>
      {contributors.map(contributor => (
        <Contributor key={contributor.src}>
          <ContributorUser {...contributor} className="avatar" />
        </Contributor>
      ))}
    </ContributorsList>
  </>
);

export default Contributors;
