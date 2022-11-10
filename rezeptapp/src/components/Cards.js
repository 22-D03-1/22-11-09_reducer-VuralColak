import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Recipes from "./Recipes";
import { useReducer } from "react";
import React from "react";



const initState = {
     color: "black",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "check":
            state.color = "blue";
            break;
        default:
            console.warn("Unknown action")
    }
    return state;
}






export default function Cards() {

    const [ state, dispatch ] = useReducer(reducer, initState);


  return (
    <>
      <Container>
        <Row>
          {Recipes.map((e, index) => {
            return (
              <Col key={index}>
                <img src={e.picture}></img>
                <h1>{e.name}</h1>
                {e.steps.map((e, index) => {
                  return (
                  <div key={index}>
                    <input onClick={()=> dispatch({type: "check"})} type="checkbox"></input>
                    <p style={{color: state.color}} key={index}>{e}</p>
                  </div>) 
                })}
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
