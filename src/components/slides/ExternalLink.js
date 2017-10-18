import React from 'react'

/**
 * Show an external link, if any.
 */
export default class ExternalLink extends React.Component
{

  render()
  {
    const href = this.props.slide.href

    if( href )
      return (
        <a className="control left-control external-link fa fa-link"
          target="_blank" href={ href }>
        </a>
      )
    else
      return null
  }
}
