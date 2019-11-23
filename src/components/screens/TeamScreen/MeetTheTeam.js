import React from 'react';
import styled from 'styled-components';
import { Avatar, Link, styles } from '@storybook/design-system';
import Subheading from './Subheading';

const { breakpoint, typography } = styles;

const Heading = styled.div`
  font-size: 36px;
  font-weight: ${typography.weight.black};
  line-height: 40px;
  text-align: center;
  margin-bottom: 48px;
`;

const Editor = styled.div`
  display: flex;
  margin-top: ${props => (props.isFirst ? 24 : 46)}px;
`;

const EditorAvatar = styled(Avatar)`
  height: 48px;
  width: 48px;
  margin-right: 20px;
  margin-top: 8px;

  @media (min-width: ${breakpoint}px) {
    height: 80px;
    width: 80px;
    margin-right: 30px;
  }
`;

const EditorName = styled.span`
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.black};
  line-height: 36px;
  margin-right: 4px;
`;

const EditorDescription = styled.div`
  flex: 1;
`;

const MeetTheTeam = () => (
  <>
    <Heading>Meet the team</Heading>

    <Subheading>Editors</Subheading>
    <Editor isFirst>
      <EditorAvatar src="https://avatars0.githubusercontent.com/u/14214630?s=460&v=4" size="large" />

      <EditorDescription>
        <div>
          <EditorName>Sabarinathan </EditorName>

          <Link secondary target="_blank" rel="noopener" href="">
            @sabari
          </Link>
        </div>

        <div>
          Sabarinathan is a Fidisys Young focusing on mobile end to end architecture.
          Previously, he worked with digital applications with best practises. He worked with TCS and many other startups. He writes about frontend best practices, performance, and process.
        </div>
      </EditorDescription>
    </Editor>
  </>
);

export default MeetTheTeam;
