import React from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
import panelNames from "./names";
import { Panel, PanelHeader, HeaderButton } from "@vkontakte/vkui";
import Icon24Settings from "@vkontakte/icons/dist/24/settings";

function App({ id, setActivePanel, access_token, setAccessToken }) {
  if (access_token) {
    alert(access_token);
    setAccessToken("");
  }
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <HeaderButton onClick={() => setActivePanel(panelNames.Settings)}>
            <Icon24Settings />
          </HeaderButton>
        }
      >
        Домашняя страница
      </PanelHeader>
    </Panel>
  );
}
export default connect(
  state => ({ access_token: state.access_token }),
  dispatch => ({
    setActivePanel: panel => dispatch({ type: actions.SetActivePanel, panel }),
    setAccessToken: access_token =>
      dispatch({ type: actions.SetAccessToken, access_token })
  })
)(App);
