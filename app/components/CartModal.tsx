import React from 'react'


 interface props{
     onClose: () => void,
     isOpen: boolean,
   
 }
export default function CartModal({isOpen,onClose}:props) {
  return (
    <div className='w-[300px] h-[100vh] transition-all  right-0 top-12 fixed bg-white border-l-2 border-stone-00'>
       <h1>da</h1>
    </div>
  )
}
