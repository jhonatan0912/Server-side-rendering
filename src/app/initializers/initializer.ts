import { isPlatformBrowser } from '@angular/common';
import { Injector, PLATFORM_ID } from '@angular/core';


export const appInitializer = (injector: Injector) => {
  const platform = injector.get(PLATFORM_ID);

  return () => {
    if (isPlatformBrowser(platform)) {
      localStorage.setItem('appInit', 'true');
    }
  };
};