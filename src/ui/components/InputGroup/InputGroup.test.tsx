import React from 'react';

import { fireEvent, render, screen } from '@/lib/utils/test.utils';

import InputGroup from './index';

describe('InputGroup Component', () => {
  const mockOnChangeInputValue = jest.fn();
  const mockOnSubmit = jest.fn();

  const setup = (isSubmitting = false, inputValue = '') => {
    render(
      <InputGroup
        inputValue={inputValue}
        onChangeInputValue={mockOnChangeInputValue}
        onSubmit={mockOnSubmit}
        isSubmitting={isSubmitting}
      />,
    );
  };

  it('renders textarea and button', () => {
    setup();
    expect(
      screen.getByPlaceholderText('Enter text 2 convert'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /convert 2 pdf/i }),
    ).toBeInTheDocument();
  });

  it('calls onChangeInputValue when text is entered', () => {
    setup();
    const textarea = screen.getByPlaceholderText('Enter text 2 convert');
    fireEvent.change(textarea, { target: { value: 'New text' } });
    expect(mockOnChangeInputValue).toHaveBeenCalledWith('New text');
  });

  it('calls onSubmit when button is clicked', () => {
    setup(false, 'Some text');
    const button = screen.getByRole('button', { name: /convert 2 pdf/i });
    fireEvent.click(button);
    expect(mockOnSubmit).toHaveBeenCalledWith('Some text');
  });

  it('disables textarea and button when isSubmitting is true', () => {
    setup(true);
    const textarea = screen.getByPlaceholderText('Enter text 2 convert');
    const button = screen.getByRole('button', { name: /convert 2 pdf/i });
    expect(textarea).toHaveAttribute('readOnly');
    expect(button).toBeDisabled();
  });
});
