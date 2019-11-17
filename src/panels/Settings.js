import React from "react";
import { connect } from "react-redux";
import { Panel, PanelHeader, HeaderButton } from "@vkontakte/vkui";
import actions from "../store/actions";
import panelNames from "./names";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { Random } from "random-js";
const random = new Random();

function SettingsPanel({ id, setActivePanel, setAccessToken }) {
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <HeaderButton
            onClick={() => {
              setActivePanel(panelNames.Home);
              setAccessToken(random.integer(0, 1000000));
            }}
          >
            <Icon24Back />
          </HeaderButton>
        }
      >
        Настройки
      </PanelHeader>
    </Panel>
  );
}
export default connect(null, dispatch => ({
  setActivePanel: panel => dispatch({ type: actions.SetActivePanel, panel }),
  setAccessToken: access_token =>
    dispatch({ type: actions.SetAccessToken, access_token })
}))(SettingsPanel);
