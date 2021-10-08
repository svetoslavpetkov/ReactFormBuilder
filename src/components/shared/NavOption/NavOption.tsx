import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import "./NavOption.css";

export type NavOptionProps = {
  text: string;
  to: string;
  path?: string;
  testTag?: string;
};

export default function NavOption(props: NavOptionProps): JSX.Element {
  const { pathname } = useLocation();
  return (
    <NavLink
      to={props.to}
      className="nav-link"
      activeClassName="nav-link-active"
      isActive={(): boolean => (props.path ? pathname.includes(props.path) : false)}
    >
      {props.text}
    </NavLink>
  );
}