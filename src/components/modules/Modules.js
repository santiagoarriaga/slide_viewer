import React from 'react'
import { connect } from 'react-redux'

import Module from './Module'

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
      <div>
        <div className="page-header">
          <h1>{ this.props.course.title }</h1>
        </div>

        <ul className="list-group">
          {
            this.props.course.modules.map( ( module, index ) =>
              <Module key={index} data={module}/>
            )
          }
        </ul>
      </div>
    )
  }
}

export default connect( state =>
  ({
    view: state.view,
    course: state.course
  })
)( Modules )
