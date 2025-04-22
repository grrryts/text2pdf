import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import ConvertedHistoryList from './index';

describe('ConvertedHistoryList Component', () => {
  const mockOnItemClick = jest.fn();
  const convertedPdfList = ['file1.pdf', 'file2.pdf'];

  it('should render the list of converted PDFs', () => {
    render(
      <ConvertedHistoryList
        convertedPdfList={convertedPdfList}
        onItemClick={mockOnItemClick}
        isConverting={false}
      />,
    );

    expect(screen.getByText('History')).toBeInTheDocument();
    expect(screen.getByText('file1.pdf')).toBeInTheDocument();
    expect(screen.getByText('file2.pdf')).toBeInTheDocument();
  });

  it('should call onItemClick when a list item is clicked', () => {
    render(
      <ConvertedHistoryList
        convertedPdfList={convertedPdfList}
        onItemClick={mockOnItemClick}
        isConverting={false}
      />,
    );

    fireEvent.click(screen.getByText('file1.pdf'));
    expect(mockOnItemClick).toHaveBeenCalledWith('file1.pdf');
  });

  it('should not call onItemClick when isConverting is true', () => {
    render(
      <ConvertedHistoryList
        convertedPdfList={convertedPdfList}
        onItemClick={mockOnItemClick}
        isConverting={true}
      />,
    );

    fireEvent.click(screen.getByText('file1.pdf'));
    expect(mockOnItemClick).not.toHaveBeenCalled();
  });
});

beforeEach(() => {
  jest.clearAllMocks();
});
