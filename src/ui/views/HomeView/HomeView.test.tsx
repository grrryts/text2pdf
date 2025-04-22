import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { render } from '@/lib/utils/test.utils';
import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';

import HomeView from './index';

const mockStore = configureStore([]);

describe('HomeView Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      core: {
        convertInputValue: '',
        convertedPdfList: [],
        isModalOpen: false,
        isSubmitting: false,
      },
    });
  });

  it('should render the main components', () => {
    render(
      <Provider store={store}>
        <HomeView />
      </Provider>,
    );

    expect(screen.getByText('Text 2 PDF')).toBeInTheDocument();
    expect(screen.getByText('Convert text to PDF')).toBeInTheDocument();
  });

  it('should handle text submission', () => {
    render(
      <Provider store={store}>
        <HomeView />
      </Provider>,
    );

    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'Sample text' },
      });

      fireEvent.click(screen.getByTestId('convert-button'));
    });

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: 'core/setConvertInputValue',
      payload: 'Sample text',
    });
  });
});

beforeEach(() => {
  jest.clearAllMocks();
});
