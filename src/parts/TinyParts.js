import React from 'react'
import { NavLink } from "react-router-dom";

export const TextWrapper = (args) => {
  return (
    <div className="text-left text-wrap">
      <label>{args.title}</label>
    </div>
  )
}

export const NavLinkButton = (props) => (
  <div>
    <NavLink exact activeClassName="active" to={props.to}>
      <button type="button" className="btn btn-primary">
        {props.label}
      </button>
    </NavLink>
  </div>
)

export const OrderWrapper = (args) => {
  let { orderedItem, wholeOrder, onChangeFunc, initialValue } = args
  return (
    <div className="text-center text-wrap">
      <input className="form-control" onChange={(ev) => onChangeFunc(ev, orderedItem, wholeOrder)} value={initialValue} type="number" min="0"></input>
    </div>
  )
}

//changed field is 'state', which is part of the argument object 'statefulObject'
export const SetStateInput = (args) => {
  let { stateFieldName, statefulObject, label, type, disabled, min, max } = args;

  let initialValue = statefulObject.state[stateFieldName] || "";
  if (!type) { type = "text" };

  function setTheState(event, key) {
    statefulObject.setState({ [key]: event?.target?.value });
  }

  return (
    <div className="text-left">
      <label className="mb-0">{label}</label>
      <div className="text-center text-wrap mb-2">
        <input
          className="form-control"
          onChange={(ev) => setTheState(ev, stateFieldName)}
          value={initialValue} type={type}
          disabled={disabled}
          min={min}
          max={max}
        >
        </input>
      </div>
    </div>
  )
}