import React from 'react'
import { connect } from 'react-redux'

/**
 * Show next slide, if any.
 */
class Next extends React.Component
{

  constructor( props )
  {
    super( props )

    this.displayNext = this.displayNext.bind( this )
  }

  displayNext()
  {
    const index = this.props.module.selected + 1

    this.props.dispatch({ type: 'slide.show', index })
  }

  render()
  {
    const{ selected, slides } = this.props.module

    if( selected + 1 >= slides.length )
      return null

    return (
      <i className="control navigation right-control fa fa-arrow-circle-right"
        onClick={ this.displayNext }
      ></i>
    )
  }
}

export default connect( state => ({ module: state.module }) )( Next )
