import React from 'react'
import { connect } from 'react-redux'

/**
 * Show previos slide, if any.
 */
class Previous extends React.Component
{

  constructor( props )
  {
    super( props )

    this.displayPrevious = this.displayPrevious.bind( this )
  }

  displayPrevious()
  {
    const index = this.props.module.selected - 1

    this.props.dispatch({ type: 'slide.show', index })
  }

  render()
  {
    if( this.props.module.selected <= 0 )
      return null

    return (
      <i className="control navigation left-control fa fa-arrow-circle-left"
        onClick={ this.displayPrevious }
      ></i>
    )
  }
}

export default connect( state => ({ module: state.module }) )( Previous )
