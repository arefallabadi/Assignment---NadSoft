// create state
const initialState = {
  getResult: [],
};

// create function for cases
const getResult = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_RESULT":
      return { getResult: [...payload] };
    case "DELETE_RESULT":
      return {
        getResult: [],
      };

    default:
      return state;
  }
};
export default getResult;

// creat set function for state
export const setResult = (getResult) => {
  return {
    type: "SET_RESULT",
    payload: getResult,
  };
};

// creat delete function for state
export const deleteResult = (getResult) => {
  return {
    type: "DELETE_RESULT",
    payload: getResult,
  };
};
