// 'use client'

import { LoaderCircle } from 'lucide-react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { api } from '@/lib/eden'
import { useBear } from '@/stores/bear'

export function Demo() {
  const { data, isLoading, isValidating, mutate } = useSWR('/api', () =>
    api.post({
      name: 'ff',
    }),
  )
  const { trigger, isMutating } = useSWRMutation('/api/test', () =>
    api.test.post(),
  )
  const increase = useBear(state => state.increase)
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer rounded-sm bg-light px-2 py-1 text-dark"
          onClick={() => mutate()}
          type="button"
        >
          刷新
        </button>
        <span>{JSON.stringify(data?.data)}</span>
        {isValidating && <LoaderCircle className="animate-spin" />}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <button
          className="cursor-pointer rounded-sm bg-light px-2 py-1 text-dark"
          onClick={() => trigger()}
          type="button"
        >
          手动触发
        </button>
        {isMutating && <LoaderCircle className="animate-spin" />}
      </div>
      <button
        className="glass mt-2 cursor-pointer rounded-sm px-2 py-1"
        onClick={() => increase(1)}
        type="button"
      >
        增加
      </button>
    </div>
  )
}
