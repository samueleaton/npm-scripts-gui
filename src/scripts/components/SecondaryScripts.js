import React, { Component } from 'react';
import store from 'cubbie';
import _ from 'lodash';
import ScriptButton from './ScriptButton';

function secondaryScriptMapHandler(script, i) {
  if (_.isArray(script)) {
    return (
      <div className="group" key={"group-" + i}>
        {script.map(secondaryScriptMapHandler)}
      </div>
    );
  }
  else {
    const isSilent = store.state.silentScripts.some(x => x === script);
    return (
      <ScriptButton key={script} cmdName={script} isSilent={isSilent}
        spinnerImg={store.state.theme.secondarySpinnerPath} />
    );
  }
}

export default class SecondaryScripts extends Component {
  render() {
    return (
      <section id="secondaryScripts">
        {store.state.secondaryScripts.map(secondaryScriptMapHandler)}
      </section>
    );
  }
}
