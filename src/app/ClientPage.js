'use client'
import dynamic from 'next/dynamic'
import Loading from './loading'

const HomeContent = dynamic(() => import('./components/HomeContent'), {
  ssr: false,
  loading: () => <Loading />
})

export function ClientPage() {
  return <HomeContent />
} 