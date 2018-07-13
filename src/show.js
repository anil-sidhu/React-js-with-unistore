import React, { Component } from 'react';
import { connect } from 'unistore/react'
import { actions } from './actions'


const Show = connect(["count"], actions)(({
    count, increment, increment2, }) => (
    <div>
      <p>Count: {count}</p>
    </div>
  ));
export default Show; 
