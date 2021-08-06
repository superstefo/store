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
  //
  let { orderedItem, wholeOrder, onChangeFunc, initialValue } = args
  return (
    <div className="text-center text-wrap">
      <input className="form-control" onChange={(ev) => onChangeFunc(ev, orderedItem, wholeOrder)} value={initialValue} type="number" min="0"></input>
    </div>
  )
}