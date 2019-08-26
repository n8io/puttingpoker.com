import { arrayOf, node, string } from 'prop-types';
import React from 'react';
import {
  Menu as RMenu,
  MenuDisclosure,
  MenuItem,
  useMenuState,
} from 'reakit/Menu';
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import { Color } from 'types/color';
import { DisplayMode } from 'types/displayMode';
import { propTypes as menuOptionPropTypes } from 'types/menuOption';

const makeOnClickProxy = ({ menu, onClick }) => () => {
  onClick();
  menu.hide();
};

const menuItemStyles = theme('mode', {
  [DisplayMode.DARK]: {
    backgroundColor: Color.black,
  },
  [DisplayMode.LIGHT]: {
    backgroundColor: Color.white,
  },
});

const StyledMenuItem = styled(MenuItem)`
  cursor: pointer;
  padding: 0.5rem 1rem;
  width: 100%;

  /* stylelint-disable-next-line order/properties-alphabetical-order */
  ${menuItemStyles}

  &[tabindex='0'] {
    background-color: ${Color.primary};
    color: ${Color.white};
  }
`;

const renderOptions = ({ menu, options }) =>
  options.map(({ label, onClick, text }) => (
    <StyledMenuItem
      {...menu}
      aria-label={label}
      key={text}
      onClick={makeOnClickProxy({ menu, onClick })}
    >
      {text}
    </StyledMenuItem>
  ));

const styles = {
  border: `1px solid ${Color.primary}`,
  borderRadius: '2px',
  zIndex: 100,
};

const Menu = ({ children, label, menuLabel, options }) => {
  const menu = useMenuState();

  return (
    <>
      <MenuDisclosure {...menu} aria-label={label} as="div">
        {children}
      </MenuDisclosure>
      <RMenu {...menu} style={styles} aria-label={menuLabel} as="ul">
        {renderOptions({ menu, options })}
      </RMenu>
    </>
  );
};

Menu.propTypes = {
  children: node.isRequired,
  label: string.isRequired,
  menuLabel: string.isRequired,
  options: arrayOf(menuOptionPropTypes.isRequired).isRequired,
};

export { Menu };
