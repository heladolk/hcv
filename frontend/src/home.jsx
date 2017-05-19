import React from 'react'
import RegionSummary from './components/region-summary'
// import USMap from './components/usmap'

export class Home extends React.Component {
  render () {
    return (
      <div className="row home">
        <div className="row">
          <div id="summary-box">
            <div className="item-box">
              <RegionSummary/>
            </div>
          </div>
          <div className="item-box" id="map-box">
            {/*<USMap />*/}
          </div>
        </div>
      </div>
    );
  }
}
