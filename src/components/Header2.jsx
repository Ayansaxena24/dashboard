import { Category } from '@syncfusion/ej2-react-charts'
import React from 'react'

const Header2 = ( {category, title, button}) => {
  return (
    <div className='mb-10'>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>
        {title} 
      </p>
      <p className='text-gray-400'>
      {category}
      </p>
      
    </div>
  )
}

export default Header2
