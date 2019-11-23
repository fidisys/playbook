import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, styles, Subheading } from '@storybook/design-system';
import GatsbyLink from '../basics/GatsbyLink';
import Logo from '../basics/Logo';
import MailingListSignup from './MailingListSignup';

const { background, breakpoint, color, typography, pageMargins } = styles;

const FooterWrapper = styled.footer`
  background: ${background.app};
  padding: 52px 0;
  display: flex;
  color: ${color.darker};
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  border-top: 1px solid ${color.mediumlight};
`;

const FooterContent = styled.div`
  ${pageMargins}
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${breakpoint * 1.75}px) {
    flex-direction: row;
  }
`;

const FooterBlock = styled.div`
  width: auto;
  ${props =>
    !props.isLast &&
    `
    margin-bottom: 52px;
  `}

  @media (min-width: ${breakpoint * 1.75}px) {
    ${props =>
      !props.isLast &&
      `
      margin-bottom: 0;
      margin-right: 52px;
    `}
  }
`;

const FooterGuideBlock = styled(FooterBlock)`
  min-width: 158px;
`;

const FooterLogoBlock = styled.div`
  ${props => !props.isFirst && `margin-top: 38px;`}
`;

const FooterBlockContent = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const FooterBlockLink = styled(GatsbyLink)`
  && {
    display: block;
    color: ${color.darker};
    &:not(:first-child) {
      margin-top: 12px;
    }
  }
`;

const LogoWrapper = styled(Logo)`
  && {
    height: 24px;
    width: auto;
  }
`;

const SubheadingWrapper = styled(Subheading)`
  color: ${color.mediumdark};
  font-size: ${typography.size.s1}px;
`;

const MailingListSignupWrapper = styled(MailingListSignup)`
  margin-top: 16px;
`;

const Footer = ({ guides, ...props }) => (
  <FooterWrapper {...props}>
    <FooterContent>
      <FooterBlock>
        <FooterLogoBlock isFirst>
          <GatsbyLink to="/">
            <LogoWrapper />
          </GatsbyLink>

          <FooterBlockContent>
            In depth guides written by Fidisys members for professional startups.
          </FooterBlockContent>
        </FooterLogoBlock>
      </FooterBlock>

      <FooterGuideBlock>
        <SubheadingWrapper>Guides</SubheadingWrapper>

        <FooterBlockContent>
          {guides.edges.map(({ node: guideNode }) => (
            <FooterBlockLink tertiary to={guideNode.fields.slug} key={guideNode.frontmatter.title}>
              {guideNode.frontmatter.title}
            </FooterBlockLink>
          ))}
        </FooterBlockContent>
      </FooterGuideBlock>

      <FooterGuideBlock>
        <SubheadingWrapper>About</SubheadingWrapper>

        <FooterBlockContent>
          <FooterBlockLink tertiary to="/team">
            Team
          </FooterBlockLink>

          <FooterBlockLink as={Link} href="mailto:sales@fidisys.com" tertiary>
            Contact us
          </FooterBlockLink>
        </FooterBlockContent>
      </FooterGuideBlock>

      <FooterBlock isLast>
        <SubheadingWrapper>Subscribe</SubheadingWrapper>

        <FooterBlockContent>
          Join the Fidisys mailing list to get free stratagies, guides, and resources emailed to you. <strong>Mail us hello@fidisys.com</strong>
        </FooterBlockContent>

        <MailingListSignupWrapper />
      </FooterBlock>
    </FooterContent>
  </FooterWrapper>
);

Footer.propTypes = {
  guides: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
          }).isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired
    ),
  }).isRequired,
};

export default Footer;
