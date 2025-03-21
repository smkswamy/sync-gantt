import os
import streamlit.components.v1 as components

_RELEASE = False

if not _RELEASE:
    _component_func = components.declare_component(
        "syncfusion_gantt_component",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("syncfusion_gantt_component", path=build_dir)

def syncfusion_gantt_component(data, key=None):
    component_value = _component_func(data=data, key=key, default=[])
    return component_value
