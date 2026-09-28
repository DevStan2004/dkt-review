import React, { ReactNode } from 'react'
import { cn } from '../lib/utils'

type Props = {
    className: string; 
    children: ReactNode;
    id?: string
}

const GlobalContainer = (props: Props) => {
  return (
    <div id={props.id} className={cn('px-5 md:px-10', props.className)}>{props.children}</div>
  )
}

export default GlobalContainer