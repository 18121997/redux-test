export function fetchPostsRequest() {
  return {
    type: "FETCH_REQUEST"
  };
}

export function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  };
}

export function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  };
}
