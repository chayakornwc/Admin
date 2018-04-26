import React, { Component } from 'react'

export default class AttendTable extends Component {
    constructor(props, context){
        super(props, conext);
        this.state ={
            disableHeader: false,
            headerHeight: 40,
            height: 270,
            hideIndexRow: false,
            overscanRowCount: 10,
            rowHeight: 30,
            rowCount: 1000,
            scrollToIndex: undefined,
            sortBy,
            sortDirection,
            sortedList,
            useDynamicRowHeight: false,
        }
        this._getRowHeight = this._getRowHeight.bind(this);
        this._headerRenderer = this._headerRenderer.bind(this);
        this._noRowsRenderer = this._noRowsRenderer.bind(this);
        this._onRowCountChange = this._onRowCountChange.bind(this);
        this._onScrollToRowChange = this._onScrollToRowChange.bind(this);
        this._rowClassName = this._rowClassName.bind(this);
        this._sort = this._sort.bind(this);
    }
    
  render() {
    return (
      <div className="1">
        
      </div>
    )
  }
}
