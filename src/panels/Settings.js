import React, { useRef } from "react";
import { connect } from "react-redux";
import {
  Panel,
  PanelHeader,
  HeaderButton,
  Group,
  Input,
  FormLayout,
  FormLayoutGroup,
  Button
} from "@vkontakte/vkui";
import actions from "../store/actions";
import panelNames from "./names";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { Random } from "random-js";
const random = new Random();

function SettingsPanel({ id, setActivePanel, setAccessToken, setAlertAsync }) {
  let input_ref = useRef();
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
      <Group title="Вызов асинхрона">
        <FormLayout>
          <FormLayoutGroup>
            <Input getRef={input_ref} />
            <Button
              size="xl"
              level="secondary"
              onClick={() => setAlertAsync(input_ref.current.value)}
            >
              Вызвать Alert
            </Button>
          </FormLayoutGroup>
        </FormLayout>
      </Group>
    </Panel>
  );
}
export default connect(null, dispatch => ({
  setActivePanel: panel => dispatch({ type: actions.SetActivePanel, panel }),
  setAccessToken: access_token =>
    dispatch({ type: actions.SetAccessToken, access_token }),
  setAlertAsync: (text, seconds = 1) =>
    dispatch({ type: actions.SetAlertAsync, text, seconds, dispatch })
}))(SettingsPanel);
