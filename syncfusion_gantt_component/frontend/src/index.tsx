import React from "react"
import ReactDOM from "react-dom"
import SyncGrantComponent from "./SyncGrantComponent"
import { registerLicense } from '@syncfusion/ej2-base';

import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import '../node_modules/@syncfusion/ej2-gantt/styles/material.css';
import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWXxccHZWR2ZYVURzWEA=');

ReactDOM.render(
  <React.StrictMode>
    <SyncGrantComponent />
  </React.StrictMode>,
  document.getElementById("root")
)
