import React from 'react'
import { connect } from 'react-redux'

import HomeLink from '../HomeLink'
import Next from './Next'
import Previous from './Previous'

/**
 * Show the slides of the selected module.
 */
class Slides extends React.Component
{

  render()
  {
    if( this.props.view != 'slides' )
      return null

    const slide = this.props.module.slides[ this.props.module.selected ]

    return (
      <div>
        <header>
          <HomeLink/>
          <h1>{ slide.title }</h1>
        </header>

        <div className="slide text-center">
          <img className="img-fluid"
            src={ 'course/' + slide.image }
          ></img>
          <Previous/>
          <Next/>
        </div>
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
