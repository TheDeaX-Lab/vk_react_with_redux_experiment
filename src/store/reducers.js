import actions from "./actions";
import names from "../panels/names";

function reducer(state = { access_token: "", panel: names.Home }, action) {
  switch (action.type) {
    case actions.SetAccessToken:
      return { ...state, access_token: action.access_token };
    case actions.SetActivePanel:
      return { ...state, panel: action.panel };
    default:
      return state;
  }
}
export default reducer;
