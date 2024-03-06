// RightColumn.js

import React from 'react';

function RightColumn() {
  return (
    <div className="right-column">
      {/* Static Financial News Section */}
      <div className="financial-news">
        <h3>Financial News</h3>
        <ul>
          <li>
            <a >Stock Market Hits All-Time High</a>
          </li>
          <li>
            <a >Bitcoin Surpasses $50,000 Mark</a>
          </li>
          <li>
            <a >Federal Reserve Announces Interest Rate Decision</a>
          </li>
          <li>
            <a >Tech Giants Face Antitrust Scrutiny</a>
          </li>
          <li>
            <a >Economic Stimulus Package Passed by Congress</a>
          </li>
          <li>
            <a >Tesla Reports Record Vehicle Deliveries</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightColumn;
