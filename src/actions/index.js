let nextMemoId = 0;
export const addMemo = (text) => ({
  type: 'ADD_MEMO',
  id: nextMemoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleMemo = (id) => ({
  type: 'TOGGLE_MEMO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
