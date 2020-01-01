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
          <EditorName>Sabari </EditorName>

          <Link secondary target="_blank" rel="noopener" href="https://www.linkedin.com/in/sabarinathan-in/">
            @sabari
          </Link>
        </div>

        <div>
          Sabarinathan is a mobile developer who focuses on end to end mobile app development and architecture.
          Previously, he developed many large scale enterprise applications that uses industry's best practises. He worked with big MNC to many startups as consultant. He writes about best practices, performance, and process.
        </div>
      </EditorDescription>
    </Editor>
    <Editor isFirst>
      <EditorAvatar src="https://media.licdn.com/dms/image/C5103AQGhqSJVIh-Yqg/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=tKEaza4S_XMzo9qMONsFUoIjr3PFBPoZHJbNKkcIgds" size="large" />

      <EditorDescription>
        <div>
          <EditorName>Kalai </EditorName>

          <Link secondary target="_blank" rel="noopener" href="https://www.linkedin.com/in/kalaiselvan-c-b3b6a162/">
            @kalai
          </Link>
        </div>

        <div>
          Kalai is a Google Certified Android Associate Developer. He does real engineering with the mobile apps. He worked in some of the biggest IT companies in the world.
          He is a Flight simulation enthusiast and he builds simulators in free time.
        </div>
      </EditorDescription>
    </Editor>
    <Editor isFirst>
      <EditorAvatar src="https://media.licdn.com/dms/image/C4E03AQH8ZdWuLHm8Aw/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=Rv6eJuiY5RdhSSYzMpFwUVtC6PBH_IOw9AONh5YEBuU" size="large" />

      <EditorDescription>
        <div>
          <EditorName>Prasanth </EditorName>

          <Link secondary target="_blank" rel="noopener" href="https://www.linkedin.com/in/prasanth-kumar-lalapeta-369a42a9/">
            @prasanth
          </Link>
        </div>

        <div>
          Prasanth is a rockstar Frontend developer. He is highly skilled in React, Angular. Prasanth is aspirating UX guy also.
          He holds multiple hats in the organization. He is a renowned speaker in the tech community. And he holds experience working in biggest IT company to startups.
        </div>
      </EditorDescription>
    </Editor>
  </>
);

export default MeetTheTeam;
