const memolist = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEMO':
      debugger;

      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          pinned: action.pinned,
          created_at: action.created_at,
          updated_at: action.updated_at,
        },
      ];
    case 'UPDATE_MEMO':
      debugger;
      return state.map((memo) =>
        memo.id === action.id
          ? {
              ...memo,
              title: action.title,
              text: action.text,
              pinned: action.pinned,
              updated_at: action.updated_at,
            }
          : memo
      );

    // const updatedmemo = {
    //   id: action.id,
    //   title: action.title,
    //   text: action.text,
    //   pinned: action.pinned,
    //   updated_at: action.updated_at,
    // };

    // return state.length > 1
    //   ? [...state.filter((memo) => memo.id !== action.id), updatedmemo]
    //   : [updatedmemo];
    case 'TOGGLE_PINNED':
      return state.map((memo) =>
        memo.id === action.id ? { ...memo, pinned: !memo.pinned } : memo
      );
    case 'DELETE_MEMO':
      return state.filter((memo) => memo.id !== action.id);
    case 'TOGGLE_MEMO':
      return state.map((memo) =>
        memo.id === action.id ? { ...memo, completed: !memo.completed } : memo
      );
    default:
      return state;
  }
};

export default memolist;
