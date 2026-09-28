import React from 'react'
import { cn } from '../lib/utils';

type Props = {
    text: string;
    className?: string;
    bgChange?: string;
    dotBgChange?: string;
}

const LightBgComponent = (props: Props) => {
  return (
    <div className={cn('flex items-center p-1 rounded-full px-3', props.className, `${props.bgChange || 'bg-majorwhite/10 text-majorwhite uppercase'}`)}>
        <div className={cn("w-1 h-1 rounded-full", `${props.dotBgChange || 'bg-green'}`)} />
        <p>{props.text}</p>
    </div>
  )
}

export default LightBgComponent