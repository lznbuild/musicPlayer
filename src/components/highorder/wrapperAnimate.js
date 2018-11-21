import React from 'react'

import { CSSTransition } from 'react-transition-group'


export default (Comp) => {
  return class extends React.Component {
    render () {
      return (
        <CSSTransition
          in={true}
          classNames={{
            enter: 'animated',
            enterActive:'fadeInLeft',
            exit: 'animated',
            exitActive: 'fadeOutLeft'
          }}
          timeout={300}
          mountOnEnter={true}
          unmountOnExit={true}
          >
            <Comp { ...this.props }></Comp>
        </CSSTransition>
      )
    }
  }
}