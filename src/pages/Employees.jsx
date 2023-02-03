import React from 'react';
import { GridComponent, ColumnsDirective, Search ,ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees"/>
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index) => (
            <ColumnDirective key={index} {...
            item} /> //in order for the data to be visible in the form of a table
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar, Sort, ContextMenu, Filter]} /> {/* in order to provide additional functionalities */}
      </GridComponent>
    </div>
  )
}

export default Employees
