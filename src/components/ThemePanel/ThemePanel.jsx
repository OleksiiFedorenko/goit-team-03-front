import React, { useState } from 'react';
import {
  ThemesPanelWrapper,
  ThemeOptions,
  ThemeOption,
  ButtonThemes,
} from './Theme.styled';

export const ThemePanel = () => {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('Dark');

  const themes = ['Dark', 'White', 'Violet'];

  const handleTogglePanel = () => {
    setPanelOpen(prev => !prev);
  };

  const handleThemeSelection = theme => {
    setActiveTheme(theme);
    setPanelOpen(false);
  };

  return (
    <div>
      <ButtonThemes onClick={handleTogglePanel}>Theme</ButtonThemes>
      {isPanelOpen && (
        <ThemesPanelWrapper>
          <ThemeOptions>
            {themes.map(theme => (
              <ThemeOption
                key={theme}
                onClick={() => handleThemeSelection(theme)}
                active={theme === activeTheme}
              >
                {theme}
              </ThemeOption>
            ))}
          </ThemeOptions>
        </ThemesPanelWrapper>
      )}
    </div>
  );
};
