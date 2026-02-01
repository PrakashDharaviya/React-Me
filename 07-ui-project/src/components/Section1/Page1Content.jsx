import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props.users);
  
  return (
    <div className='pb-16 pt-6 flex justify-between h-[90vh] gap-10 px-18'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content