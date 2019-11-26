import React from 'react'

export default function NoMatch({location}) {
  return (
    <div style={{height: '100vh'}}>
      <div className="text-center section">
        <div className="section">
          <h3> No Match for <code> {location.pathname} </code>  :(</h3>
        </div>
      </div>
    </div>
  )
}
