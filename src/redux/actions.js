// 액션 타입 정의
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

// 액션 생성자 함수
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  };
}

export function deleteUser(user) {
  return {
    type: DELETE_USER,
    payload: user,
  };
}