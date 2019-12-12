import {paramCase} from 'change-case';

import base from '~/themes/base';

import {merge} from '~/helpers/misc';
import {Service} from '~/helpers/service';

const THEMES = {
  'base': base
};

export default class Themer extends Service {
  constructor(services) {
    super(services);

    Object.assign(this, {
      themingTargetElement: null,
      activeThemeLabel: null,
      appliedTheme: {}
    });
  }

  activateTheme(themeLabel) {
    this.activeThemeLabel = themeLabel;

    this.applyActiveTheme();
  }

  applyActiveTheme() {
    const theme = THEMES[this.activeThemeLabel];

    this.appliedTheme = merge([this.appliedTheme, theme]);

    Object.entries(theme).forEach(
      ([themePropertyGroupKey, themeProperties]) => {
        Object.entries(themeProperties).forEach(
          ([propertyKey, propertyValue]) => {
            this.themingTargetElement.style.setProperty(
              `--theme-${paramCase(themePropertyGroupKey)}-${propertyKey}`,
              propertyValue
            );
          }
        );
      }
    );
  }

  getAppliedTheme() {
    return this.appliedTheme;
  }

  initialize(themingTargetElement) {
    this.themingTargetElement = themingTargetElement;

    this.activateTheme('base');
  }

  reset() {
    this.themingTargetElement = null;

    this.activeThemeLabel = null;
  }
}
