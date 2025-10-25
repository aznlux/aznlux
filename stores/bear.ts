import { create } from 'zustand'

type BearState = {
  bears: number
  increase: (by: number) => void
}

export const useBear = create<BearState>()(set => ({
  bears: 0,
  increase: by => set(state => ({ bears: state.bears + by })),
}))
