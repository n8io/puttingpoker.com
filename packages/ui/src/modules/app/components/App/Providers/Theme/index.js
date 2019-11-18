import { node } from 'prop-types';
import { defaultTo } from 'ramda';
import React, { useState } from 'react';
import { useModality } from 'shared/useModality';
import { useTheme } from 'shared/useTheme';
import { ThemeProvider } from 'styled-components/macro';
import { LocalStorage } from 'types/localStorage';
import { Modality } from 'types/modality';
import { Theme as ThemeType } from 'types/theme';

const Theme = ({ children }) => {
  const { provider: ThemeSwitcherProvider } = useTheme();
  const { provider: ModalityProvider } = useModality();
  const defaultTheme = defaultTo(
    {
      [ThemeType.PROP_NAME]: ThemeType.initial,
    },
    JSON.parse(localStorage.getItem(LocalStorage.THEME))
  );
  const [theme, updateTheme] = useState(defaultTheme);
  const [modality, updateModality] = useState();

  const updateThemeProxy = nextTheme => {
    localStorage.setItem(LocalStorage.THEME, JSON.stringify(nextTheme));
    updateTheme(nextTheme);
  };

  const updateModalityProxy = nextModality => {
    document.body.setAttribute(Modality.DOM_ATTRIBUTE, nextModality);
    updateModality(nextModality);
  };

  const themeContext = {
    theme,
    updateTheme: updateThemeProxy,
  };

  const modalityContext = {
    isEnabled: Boolean(modality),
    modality,
    update: updateModalityProxy,
  };

  return (
    <ModalityProvider value={modalityContext}>
      <ThemeSwitcherProvider value={themeContext}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeSwitcherProvider>
    </ModalityProvider>
  );
};

Theme.propTypes = {
  children: node.isRequired,
};

export { Theme };
