import React from 'react'
import { connect } from 'react-redux'

/**
 * Show the slides of the selected module.
 */
class Slides extends React.Component
{

  constructor( props )
  {
    super( props )
  }

  render()
  {
    if( this.props.view != 'slides' )
      return null

    return (
      <div>
        <div className="page-header">
          <h1>title</h1>
        </div>

        SLIDE
      </div>
    )
  }
}

export default connect( state =>
  ({
    view: state.view,
    module: state.module
  })
)( Slides )
