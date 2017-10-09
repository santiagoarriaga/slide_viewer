import React from 'react'
import { connect } from 'react-redux'

/**
 * Module listing for the current training.
 */
class Modules extends React.Component
{
  render()
  {
    if( this.props.view != 'modules' )
      return null

    return (
      <div>modules</div>
    )
  }
}

export default connect( state => ({ view: state.view }) )( Modules )
