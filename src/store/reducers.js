import actions from "./actions";
import names from "../panels/names";
import React from "react";
import { ScreenSpinner } from "@vkontakte/vkui";

function reducer(
  state = { access_token: "", panel: names.Home, popout: null },
  action
) {
  switch (action.type) {
    case actions.SetAccessToken:
      return { ...state, access_token: action.access_token };
    case actions.SetActivePanel:
      return { ...state, panel: action.panel };
    case actions.SetAlertAsync:
      setTimeout(() => {
        action.dispatch({ type: actions.CompleteAlertAsync });
        alert(action.text);
      }, action.seconds * 1000);
      return { ...state, popout: <ScreenSpinner /> };
    case actions.CompleteAlertAsync:
      return { ...state, popout: null };
    default:
      return state;
  }
}
export default reducer;
