import React, { ReactElement } from 'react';

import { PdfViewerProvider } from '@/lib/providers';
import { ReduxStoreProvider } from '@/lib/store/provider';
import { RenderOptions, render } from '@testing-library/react';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxStoreProvider>
      <PdfViewerProvider>{children}</PdfViewerProvider>
    </ReduxStoreProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
