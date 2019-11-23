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
      <EditorAvatar src="https://sessionize.com/image?f=2e8e74f3ed0188ab2accde70cf0c7caf,200,200,True,False,d1-8a61-4bde-b0c9-5fcc9d182716.960f8228-53b6-4dcf-90aa-253b621246ca.png" size="large" />

      <EditorDescription>
        <EditorName>Prasanth Lalapeta</EditorName>
        <Link secondary target="_blank" rel="noopener" href="https://www.linkedin.com/in/prasanth-kumar-lalapeta-369a42a9/">
          @prasanth_lalapeta
        </Link>
        <br />
        Prasanth is a Fidisys Member. He focuses on dev workflow and community. He worked with TCS, Qube and many other startups. Find him writing about Component-Driven
        Development and frontend infrastructure.
      </EditorDescription>
    </Editor>

    <Editor>
      <EditorAvatar src="data:image/jpeg;base64,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" size="large" />

      <EditorDescription>
        <div>
          <EditorName>Kalaiselvan C</EditorName>

          <Link secondary target="_blank" rel="noopener" href="">
            @kalai
          </Link>
        </div>

        <div>
          Kalaiselvan is a Fidisys Member focusing on mobile UI architecture.
          Previously, he worked with digital applications with best practises. He worked with TCS, CTS and many other startups. He writes about frontend best practices, performance, and process.
        </div>
      </EditorDescription>
    </Editor>

    <Editor>
      <EditorAvatar src="https://avatars0.githubusercontent.com/u/14214630?s=460&v=4" size="large" />

      <EditorDescription>
        <div>
          <EditorName>Sabarinathan </EditorName>

          <Link secondary target="_blank" rel="noopener" href="">
            @sabari
          </Link>
        </div>

        <div>
          Sabarinathan is a Fidisys Member focusing on mobile end to end architecture.
          Previously, he worked with digital applications with best practises. He worked with TCS and many other startups. He writes about frontend best practices, performance, and process.
        </div>
      </EditorDescription>
    </Editor>
  </>
);

export default MeetTheTeam;
