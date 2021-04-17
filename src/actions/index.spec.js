import * as actions from './index';

describe('memo actions', () => {
  it('addMemo should create ADD_MEMO action', () => {
    expect(actions.addMemo('Use Redux')).toEqual({
      type: 'ADD_MEMO',
      id: 0,
      text: 'Use Redux',
    });
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active',
    });
  });

  it('toggleMemo should create TOGGLE_MEMO action', () => {
    expect(actions.toggleMemo(1)).toEqual({
      type: 'TOGGLE_MEMO',
      id: 1,
    });
  });
});
