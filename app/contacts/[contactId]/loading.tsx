import React from 'react'
import Skeleton from '@/components/ui/Skeleton'

export default function Loading() {
  return (
     <div className="flex flex-col gap-4 lg:flex-row">
        <div 
          className="h-[192px] w-[192] flex-shrink-0 mr-8 rounded-3xl bg-gray object-cover" 
        />
        <Skeleton/>
    </div>

  )
}
