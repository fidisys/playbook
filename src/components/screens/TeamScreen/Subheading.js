import styled from 'styled-components';
import { styles, Subheading } from '@storybook/design-system';

const { color } = styles;

const SubheadingWrapper = styled(Subheading)`
  color: ${color.dark};
  font-size: 14px;
`;

export default SubheadingWrapper;
