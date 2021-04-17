import memos from './memos';

describe('memos reducer', () => {
  it('should handle initial state', () => {
    expect(memos(undefined, {})).toEqual([]);
  });

  it('should handle ADD_MEMO', () => {
    expect(
      memos([], {
        type: 'ADD_MEMO',
        text: 'Run the tests',
        id: 0,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
    ]);

    expect(
      memos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0,
          },
        ],
        {
          type: 'ADD_MEMO',
          text: 'Use Redux',
          id: 1,
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 1,
      },
    ]);

    expect(
      memos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 1,
          },
        ],
        {
          type: 'ADD_MEMO',
          text: 'Fix the tests',
          id: 2,
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 1,
      },
      {
        text: 'Fix the tests',
        completed: false,
        id: 2,
      },
    ]);
  });

  it('should handle TOGGLE_MEMO', () => {
    expect(
      memos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: 'TOGGLE_MEMO',
          id: 1,
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });
});
