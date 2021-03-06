import React from 'react'
import { connect } from 'react-redux'

import HomeLink from '../HomeLink'
import Module from './Module'

/**
 * Module listing for the current training.
 */
class Modules extends React.Component
{

  constructor( props )
  {
    super( props )

    this.showModule = this.showModule.bind( this )
  }

  showModule( module )
    { this.props.dispatch({ type: 'moduleShow', id: module.id }) }

  render()
  {
    if( this.props.view != 'modules' )
      return null

    return (
      <div>
        <header>
          <HomeLink/>
          <h1>{ this.props.course.title }</h1>
        </header>

        <ul className="list-group">
          {
            this.props.course.modules.map( ( module, index ) =>
              <Module key={index} data={module}
                onClick={ this.showModule }
              />
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
