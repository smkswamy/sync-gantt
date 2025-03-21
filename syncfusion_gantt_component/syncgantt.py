import streamlit as st
from syncfusion_gantt_component import syncfusion_gantt_component

st.subheader("Gantt Chart")

data = [
    {"TaskID": 1, "TaskName": "Planning", "StartDate": "2023-01-01", "EndDate": "2023-01-10", "Duration": 10, "Progress": 100},
    {"TaskID": 2, "TaskName": "Design", "StartDate": "2023-01-11", "EndDate": "2023-01-20", "Duration": 10, "Progress": 50, "Predecessor": 1},
    {"TaskID": 3, "TaskName": "Development", "StartDate": "2023-01-21", "EndDate": "2023-02-10", "Duration": 20, "Progress": 25, "Predecessor": 2},
    {"TaskID": 4, "TaskName": "Testing", "StartDate": "2023-02-11", "EndDate": "2023-02-20", "Duration": 10, "Progress": 0, "Predecessor": 3},
]

syncfusion_gantt_component(data, key="gantt_chart")
