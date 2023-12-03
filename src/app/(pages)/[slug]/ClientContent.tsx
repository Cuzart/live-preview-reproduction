'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'
import { Blocks } from '../../_components/Blocks'
import { Hero } from '../../_components/Hero'

export const ClientContent = ({ initialPage }) => {
  const { data: page } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    depth: 10,
    initialData: initialPage,
  })

  const { hero, layout } = page

  return (
    <React.Fragment>
      <Hero {...hero} />
      <Blocks
        blocks={layout}
        disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
      />
    </React.Fragment>
  )
}
