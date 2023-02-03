import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Edit, Inject, Toolbar, Search } from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/dummy';
import { Button, Header } from '../components';

const Campaign = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Search', 'Delete', 'Filter'];
  const editing = { allowDeleting:true, allowEditing: true };
  const filterOptions = import('@syncfusion/ej2-react-grids').FilterSettingsModel = {
    ignoreAccent: true,
    type:'Excel',
  }

  return (
    <div className="m-0 md:m-0 mt-24 p-2 md:p-10 bg-blue-50">
      <Header title="Your Campaigns" category="Check the list of campaigns you created" button="Create New Campaign"/>
      <GridComponent
      dataSource={ordersData}
      enableHover={true}
      allowFiltering={true}
      filterSettings={filterOptions}
      allowPaging
      pageSettings={{ pageCount: 10 }}
      selectionSettings={selectionsettings}
      toolbar={toolbarOptions}
      editSettings={editing}
      allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item,index) => (
            <ColumnDirective key={index} {...
            item} /> //in order for the data to be visible in the form of a table
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, Edit, Toolbar, Search]} />
      </GridComponent>
    </div>
  )
}

export default Campaign
