import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import QueryBuilder from "./query";
import SubscriptionBuilder from "./subscription";

const addNum = gql`
  mutation {
    addNum
  }
`;

class App extends Component {
  render() {
    return (
      <div style={{ justifyContent: "center", display: "flex", border: "5px solid #dcdcdc" }}>
        <div>
          <div style={{ border: "2px solid #ff0000", padding: "5px" }}>
            <h1>Query with subscribeToMore</h1><br />
          </div>
          <p><i>Get all  numbers list</i></p>
          <QueryBuilder />
        </div>
        <div style={{ width: 300, display: "flex", justifyContent: "center" }}>
          <Mutation mutation={addNum}>
            {mutate => (
              <div>
                <button style={{fontSize: "25px", marginTop: "10%"}} onClick={mutate}>Add</button>
              </div>
            )}
          </Mutation>
        </div>
        <div>
        <div style={{ border: "2px solid #ff0000", padding: "5px" }}>
            <h1>Subscription component</h1>
          </div>
          <p><i>Newest num will be printed below </i></p>
          <SubscriptionBuilder />
        </div>
      </div>
    );
  }
}

export default App;
