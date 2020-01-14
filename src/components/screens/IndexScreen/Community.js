import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, styles } from '@storybook/design-system';
import User from '../../composite/User';

const { breakpoint, spacing, typography } = styles;

const Section = styled.div`
  ${props =>
    !props.isFirst &&
    `
    margin-top: 64px;
  `}
`;

const Heading = styled.div`
  font-size: ${typography.size.m2}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 28px;
`;

const Text = styled.div`
  font-size: ${typography.size.s3}px;
  line-height: 28px;
  margin-top: 12px;
`;

const GuidanceUsers = styled.div`
  margin-top: 52px;

  @media (min-width: ${breakpoint * 1.25}px) {
    display: flex;
  }
`;

const GuidanceUser = styled(User)`
  width: 100%;
  margin-top: ${spacing.padding.medium}px;

  &:first-of-type {
    margin-top: 0;
  }

  @media (min-width: ${breakpoint * 1.25}px) {
    margin-top: 0;
    margin-right: 30px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const CommunityAvatars = styled.div`
  margin-top: 24px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;
  flex-wrap: wrap;
`;

const AvatarWrapper = styled(Avatar).attrs({ size: 'large' })`
  min-width: 40px;
  margin: 10px;
`;

const PureCommunity = ({ contributors }) => (
  <div>
    <Section isFirst>
      <Heading>Expert Young Dynamic Guidance</Heading>

      <Text>
        Fidisys Playbook was created by members of fidisys and its opensource contributors. Who are much effiecient in current open source technologies with best practises followers. We encourage everyone to bring core values to team to differentiate from others with innovative ideas and stratagies.
        Inspired by Jack Rabbit's <a href="https://medium.com/jackrabbit-mobile-publication/playbook-65a0d42ef9cf">Playbook</a>
      </Text>

      <GuidanceUsers>
        <GuidanceUser
          src="https://avatars0.githubusercontent.com/u/14214630?s=460&v=4"
          name="Sabarinathan"
          detail="Fidisys"
        />
      </GuidanceUsers>
    </Section>

    <Section>
      <Heading>Updated all the time</Heading>

      <Text>
        Our amazing community of learners help update, localize, and suggest new guide topics. That
        means Fidisys Playbook stays up to date with industry best practices.
      </Text>

      <CommunityAvatars className="avatar">
        {contributors.map(contributor => (
          <AvatarWrapper key={contributor.id} src={contributor.avatar_url} />
        ))}
      </CommunityAvatars>
    </Section>
  </div>
);

PureCommunity.propTypes = {
  contributors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

PureCommunity.defaultProps = {
  contributors: [],
};

const contributorsUrl = 'https://api.github.com/repos/fidisys/playbook/contributors';
const sessionStorageKey = 'lsbGithubContributors';

const Community = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    async function fetchGithubContributors() {
      const response = await fetch(contributorsUrl).then(res => res.json());
      if (response.message) {
        return; // Likely an error
      }
      sessionStorage.setItem(sessionStorageKey, JSON.stringify(response));
      setContributors(response);
    }
    fetchGithubContributors();
    if (sessionStorage.getItem(sessionStorageKey)) {
      // Use the cached version of contributors
      setContributors(JSON.parse(sessionStorage.getItem(sessionStorageKey)));
      return;
    }
  }, []);

  return <PureCommunity contributors={contributors} />;
};

export { PureCommunity };

export default Community;
