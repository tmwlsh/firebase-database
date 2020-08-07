import React from "react"

import './flex.scss';

const Flex = ({children}) => {
  return (
    <div className="flex">
      {children}
    </div>
  )
}

export default Flex
