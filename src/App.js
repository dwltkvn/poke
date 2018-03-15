import React from "react";
import PropTypes from "prop-types";
import EditIcon from "grommet/components/icons/base/Edit";

import PokeDisplay from "./PokeDisplay";

// Grommet
import Button from "grommet/components/Button";
import Article from "grommet/components/Article";

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

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    //this.callbackFunction = this.callbackFunction.bind(this);

    /*
      this.state =
      {
          field1 : value1,
          field2 : value2,
      }
    */
  }

  render() {
    /* code */

    return (
      <Article>
        <Button icon={<EditIcon />} label="Label" />
        <PokeDisplay propColor="neutral-1-a" />
        <PokeDisplay propColor="neutral-4-a" />
        <PokeDisplay propColor="neutral-1-a" />
      </Article>
    );
  }
}

App.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default App;
