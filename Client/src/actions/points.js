import * as api from '../api';

export const addPoints = (id) => async (dispatch) => {
  try {
    const { data } = await api.points(id);
    dispatch({ type: 'ADD_POINTS', payload: data });
  } catch (error) {
    console.log(error);
  }
};