export const actionTypeCreator = (action) => {
  return {
    REQUEST: action + "_REQUEST",
    SUCCESS: action + "_SUCCESS",
    FAILURE: action + "_FAILURE",
  };
};
