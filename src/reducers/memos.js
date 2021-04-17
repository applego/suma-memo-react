const memos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEMO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_MEMO':
      return state.map((memo) =>
        memo.id === action.id ? { ...memo, completed: !memo.completed } : memo
      );
    default:
      return state;
  }
};

export default memos;
