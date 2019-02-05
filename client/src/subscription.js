import React from "react";
import { Subscription } from "react-apollo";
import { gql } from "apollo-boost";

const newNums = gql`
  subscription {
    newNum
  }
`;

export default () => (
  <Subscription subscription={newNums}>
    {({ data }) => {
      return <div>
      {!data ? "waiting for new number ..." : <h1>{data.newNum}</h1>}</div>;
    }}
  </Subscription>
);
