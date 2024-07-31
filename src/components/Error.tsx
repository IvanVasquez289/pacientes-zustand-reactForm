import  { ReactNode } from 'react'

const Error = ({children}:{children: ReactNode}) => {
  return (
    <p className='bg-red-600 text-white font-bold text-center my-4 p-3  uppercase'>
        {children}
    </p>
  )
}

export default Error