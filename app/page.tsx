'use client'

import { SWRConfig } from 'swr'
import { Demo } from '@/components/demo'
import { useBear } from '@/stores/bear'

export default function Home() {
  const bears = useBear(state => state.bears)
  return (
    <div>
      <SWRConfig
        value={{
          onLoadingSlow: () => {
            console.log('加载时间过长')
          },
          onSuccess: data => {
            console.log(data)
          },
        }}
      >
        <Demo />
        <div className="mt-4">{bears}</div>
      </SWRConfig>
    </div>
  )
}
