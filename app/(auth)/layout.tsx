import React, { ReactNode } from 'react'

const AuthLayoutPage = ({children}: {children: ReactNode}) => {
  return <div className='auth-layout'>{children}</div>;
}

export default AuthLayoutPage