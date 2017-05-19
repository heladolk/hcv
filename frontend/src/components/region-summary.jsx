import React from 'react'
import '../../styles/components/summary.css'

export default function RegionSummary() {
  return (
    <div className="content">
      <h1 id="summary-title">
        {/*{{ regionSummary.geoname }}*/}
        Region
        <button className="btn btn-success">Add to List</button>
        <button className="btn btn-danger">Compare | Regions:</button>
      </h1>

      <div className="item-title">Median House Value: <span className="item-stat house-value">value</span></div>
      <div className="item-title">Median Household Income: <span className="item-stat">income</span></div>
      <div className="item-title">House Value/Income Ratio: <span className="item-stat ratio">ratio</span></div>
      <div className="item-title">Population: <span className="item-stat">population</span></div>
    </div>
  );
}
