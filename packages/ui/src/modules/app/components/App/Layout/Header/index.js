import React from 'react';
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import { Color } from 'types/color';
import { Layout } from 'types/layout';

const domTestId = 'Header';
const { border } = Color;
const { COMFORTABLE, COMPACT, DEFAULT } = Layout;

const layoutStyles = theme('layout', {
  [COMFORTABLE]: {
    height: '2.5rem',
  },
  [COMPACT]: {
    height: '2.25rem',
  },
  [DEFAULT]: {
    height: '2.75rem',
  },
});

const Styled = styled.header`
  align-items: center;
  border-bottom: 1px solid ${border};
  display: flex;
  font-size: 2rem;

  ${layoutStyles}
`;

const Header = () => (
  <Styled data-testid={domTestId}>
    <span role="img" title="" aria-hidden>
      ⛳
    </span>
    PuttingPoker.com
  </Styled>
);

export { domTestId, Header };
