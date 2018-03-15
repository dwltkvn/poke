import React from "react";
import PropTypes from "prop-types";
import EditIcon from "grommet/components/icons/base/Edit";

import Button from "grommet/components/Button";

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
      <div>
        <Button icon={<EditIcon />} label="Label" />
      </div>
    );
  }
}

App.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default App;
