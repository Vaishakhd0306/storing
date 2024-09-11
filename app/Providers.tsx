import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import { Toaster } from '@/components/ui/toaster'


const Providers = ({children}:{children:React.ReactNode}) => {
  return(
    <>
   <Toaster/>
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
      <div>{children}</div>
      </ThemeProvider>
    </>
    ) 
    }

export default Providers
