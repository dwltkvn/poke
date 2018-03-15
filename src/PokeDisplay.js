import React from "react";
import PropTypes from "prop-types";

import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Headline from "grommet/components/Headline";
import Spinning from "grommet/components/icons/Spinning";

import { headers, buildQuery, processStatus } from "grommet/utils/Rest";

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

    this.state = {
      stateLoading: true,
      result: undefined,
      error: undefined
    };
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
  }

  render() {
    /* code */

    return (
      <Section
        pad="none"
        justify="center"
        align="center"
        full={true}
        colorIndex={this.props.propColor}
      >
        {this.state.stateLoading ? (
          <div>
            <Spinning size="huge" />
            <Headline margin="none">Text</Headline>
          </div>
        ) : (
          <Headline margin="none">{this.state.result.name}</Headline>
        )}
      </Section>
    );
  }
}

PokeDisplay.propTypes = {
  //classes: PropTypes.object.isRequired
  propColor: PropTypes.string.isRequired
};

export default PokeDisplay;
