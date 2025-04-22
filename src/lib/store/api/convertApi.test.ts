import { transformResponse } from './convertApi';

describe('transformResponse', () => {
  it('should be defined', () => {
    expect(transformResponse).toBeDefined();
  });

  it('should return a defined URL for a valid Blob', () => {
    const url = transformResponse(
      new Blob(['test'], { type: 'application/pdf' }),
    );

    expect(url).toBeDefined();
  });

  it('should return a string representing a URL', () => {
    const url = transformResponse(
      new Blob(['test'], { type: 'application/pdf' }),
    );

    expect(typeof url).toBe('string');
    expect(url).toBe('mocked-url');
  });

  it('should handle an empty Blob', () => {
    const url = transformResponse(new Blob([]));

    expect(url).toBeDefined();
    expect(typeof url).toBe('string');
  });
});

beforeEach(() => {
  global.URL.createObjectURL = jest.fn(() => 'mocked-url');
});
