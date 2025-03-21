import React, { useCallback, useEffect, useMemo, useState, ReactElement } from "react"
import { Streamlit, withStreamlitConnection, ComponentProps } from "streamlit-component-lib"
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective, Selection, Sort, Filter } from "@syncfusion/ej2-react-gantt"

function SyncGrantComponent({ args, disabled, theme }: ComponentProps): ReactElement {
  const { data } = args

  const style: React.CSSProperties = useMemo(() => {
    if (!theme) return {}

    return {}
  }, [theme])

  useEffect(() => {
    Streamlit.setFrameHeight()
  }, [style, theme])

  const taskData = data;

  return (
    <div>
      <div>Gantt</div>
      <GanttComponent 
        dataSource={taskData} 
        taskFields={{ 
          id: 'TaskID', 
          name: 'TaskName', 
          startDate: 'StartDate', 
          endDate: 'EndDate', 
          duration: 'Duration', 
          progress: 'Progress', 
          dependency: 'Predecessor' 
        }}
      >
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='ID' width='100' />
          <ColumnDirective field='TaskName' headerText='Task Name' width='250' />
          <ColumnDirective field='StartDate' headerText='Start Date' width='150' />
          <ColumnDirective field='EndDate' headerText='End Date' width='150' />
          <ColumnDirective field='Duration' headerText='Duration' width='150' />
          <ColumnDirective field='Progress' headerText='Progress' width='150' />
          <ColumnDirective field='Predecessor' headerText='Predecessor' width='150' />
        </ColumnsDirective>
        <Inject services={[Selection, Sort, Filter]} />
      </GanttComponent>
    </div>
  )
}

export default withStreamlitConnection(SyncGrantComponent)
