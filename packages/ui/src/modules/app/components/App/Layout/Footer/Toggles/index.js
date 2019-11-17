import React, { useCallback } from 'react';
import { useTheme } from 'shared/useTheme';
import styled from 'styled-components/macro';
import { DisplayMode } from 'types/displayMode';
import { Theme } from 'types/theme';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

const domTestId = 'Toggles';

const Styled = styled.section`
  display: grid;
  font-size: 0.75rem;
  grid-gap: 0.5rem;
  grid-template-columns: auto auto;
`;

const Toggles = () => {
  const { theme, updateTheme } = useTheme();
  const displayMode = Theme.displayMode(theme);

  const onToggleTheme = useCallback(() => {
    if (displayMode === DisplayMode.DARK) {
      return updateTheme({ ...theme, [Theme.PROP_NAME]: DisplayMode.LIGHT });
    }

    return updateTheme({ ...theme, [Theme.PROP_NAME]: DisplayMode.DARK });
  }, [displayMode, theme, updateTheme]);

  return (
    <Styled data-testid={domTestId}>
      <LanguageToggle />
      <ThemeToggle
        isDarkMode={displayMode === DisplayMode.DARK}
        onToggle={onToggleTheme}
      />
    </Styled>
  );
};

export { Toggles, domTestId };