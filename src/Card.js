import React, { Component } from 'react';
import styled from 'styled-components';

const CardDisplay = styled.div`
  border: solid 1px black;
  border-radius: 10px;
  height: 330px;
  width: 220px;
  position: relative;
`
const CostDisplay = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  height: 50px;
  width: 50px;
  border: red 1px solid;
  border-radius: 50%;
  display: flex;
  p {
    margin: auto;
    font-size: 30px;
  }
`
export default class Card extends Component {
  render() {
    const { type, desc, cost, src } = this.props;
    return (
      <CardDisplay>
        <CostDisplay><p>{cost}</p></CostDisplay>
        {/* <Image src={src}/>
        <EffectDesc>
          <header>{type}</header>
          <p>{desc}</p>
        </EffectDesc> */}
      </CardDisplay> 
    );
  }
}