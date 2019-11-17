import React from "react";
import { View } from "@vkontakte/vkui";
import Home from "./panels/Home";
import Settings from "./panels/Settings";
import panelNames from "./panels/names";
import { connect } from "react-redux";

function App({ panel, popout }) {
  return (
    <View activePanel={panel} popout={popout}>
      <Home id={panelNames.Home} />
      <Settings id={panelNames.Settings} />
    </View>
  );
}

export default connect(state => ({ panel: state.panel, popout: state.popout }))(
  App
);
