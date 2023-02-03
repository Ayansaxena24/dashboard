import { Category } from '@syncfusion/ej2-react-charts'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = ( {category, title, button}) => {
  return (
    <div className='mb-10'>
      <div className='flex flex-row'>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>
        {title} 
      </p>
      <Link to="/Campaign2" className='bg-blue-600 px-6 py-4 mr-9 mt-2 mb-2 text-white rounded-lg absolute right-0'>
          {button}
        </Link>
        </div>
      <p className='text-gray-400'>
      {category}
      </p>
      
    </div>
  )
}

export default Header
