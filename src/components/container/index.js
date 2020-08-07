import React from "react"

import './container.scss';

const Container = ({size, children}) => <div className={`container${size ? ` ${size}` : ''}`}>{children}</div>

export default Container
