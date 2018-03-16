import React from "react";
import PropTypes from "prop-types";

import Box from "grommet/components/Box";
import Section from "grommet/components/Section";
import Headline from "grommet/components/Headline";
import Spinning from "grommet/components/icons/Spinning";
import Status from "grommet/components/icons/Status";

import Meter from "grommet/components/Meter";
import Value from "grommet/components/Value";
//import Legend from "grommet/components/Legend";

import { headers, buildQuery, processStatus } from "grommet/utils/Rest";

import Pokemonsters from "../data/monsters.js";

//const CmpntStateless = props => <div>{props.children}</div>;

/*
const CmpntStateless2 = props =>  {
                                    const var = 0;
                                    return (
                                      <div>{props.children}</div>
                                    );
                                  }
*/

/*
const CmpntStateless3 = props => {
                                    return props.myProp? <div>{props.children}</div> : <div>{props.children}</div>
                                 }
*/

class PokeDisplay extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    //this.callbackFunction = this.callbackFunction.bind(this);
    this.getData = this.getData.bind(this);
    this.getData2 = this.getData2.bind(this);

    this.state = {
      stateLoading: true,
      result: undefined,
      error: undefined
    };
  }

  getData3() {
    let error = { description: "Can't find data" };
    this.setState({ error: error, stateLoading: false });
  }
  getData2() {
    let result = Pokemonsters.pikachu;
    console.log(Pokemonsters.pikachu.name);
    this.setState({ result: result, stateLoading: false });
  }

  getData(filters) {
    const query = buildQuery(filters);
    const options = {
      method: "GET",
      headers: { ...headers }
    };

    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`, options)
      .then(processStatus)
      .then(response => response.json())
      .then(result =>
        this.setState({ result: result, error: undefined, stateLoading: false })
      )
      .catch(error => this.setState({ result: undefined, error: error }));
  }

  componentDidMount() {
    //this.getData(null);
    this.getData2();
  }

  render() {
    /* code */

    const loadingComponent = this.state.stateLoading ? (
      <Spinning size="large" />
    ) : null;

    // compute stat graph bar series
    let dataSeries = [];
    if (this.state.result) {
      this.state.result.stats.forEach((e, i) => {
        let res = {};

        res.label = e.stat.name;
        res.value = e.base_stat;
        res.colorIndex = "graph-" + i;

        dataSeries.push(res);
      });
    }

    // prepare data component
    const dataComponent = this.state.result ? (
      <Box>
        <Headline margin="none">{this.state.result.name}</Headline>
        <Box align="center" direction="row">
          <Meter series={dataSeries} />
          {/*<Legend series={dataSeries} total={false} />*/}
        </Box>
      </Box>
    ) : null;

    const errorComponent = this.state.error ? (
      <Box direction="row" align="center" responsive={false}>
        <Status value="critical" size="large" />
        <Headline margin="none">{this.state.error.description}</Headline>
      </Box>
    ) : null;

    return (
      <Section
        pad="none"
        justify="center"
        align="center"
        full={true}
        colorIndex={this.props.propColor}
      >
        {loadingComponent}
        {dataComponent}
        {errorComponent}
      </Section>
    );
  }
}

PokeDisplay.propTypes = {
  //classes: PropTypes.object.isRequired
  propColor: PropTypes.string.isRequired
};

export default PokeDisplay;
