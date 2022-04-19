import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render } from '@testing-library/react'
import AppLayout from 'components/AppLayout'
import { GlobalProvider } from 'provider/GlobalProvider'
import { ThemeProvider } from 'styled-components'
import theme from 'constants/theme'
import { NextRouter } from 'next/router'

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router,
  }
}

const RenderProvider = ({ children }: { children: any }) => {
  return (
    <RouterContext.Provider value={createMockRouter({})}>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <AppLayout>{children}</AppLayout>
        </GlobalProvider>
      </ThemeProvider>
    </RouterContext.Provider>
  )
}

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: RenderProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
