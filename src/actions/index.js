export const addMemoAction = (id, title, text, now, pinned) => ({
  type: 'ADD_MEMO',
  id,
  title,
  text,
  pinned,
  created_at: now,
  updated_at: now,
});

export const updateMemoAction = (id, title, text, now, pinned) => ({
  type: 'UPDATE_MEMO',
  id,
  title,
  text,
  pinned,
  updated_at: now,
});

export const togglePinnedAction = (id, pinned) => ({
  type: 'TOGGLE_PINNED',
  id,
  pinned,
});

export const deleteMemoAction = (id) => ({
  type: 'DELETE_MEMO',
  id,
});

//todo delete
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
