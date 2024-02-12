import { LiveCursorProps } from '@/assets/types/type'
import React from 'react'
import Cursor from './Cursor'
import { COLORS } from '@/constants'

const LiveCursors = ({ others }: LiveCursorProps) => {
  others.map(( connectionId, presence ) => {
    if(!presence) return null

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
      />
    )
  })
}

export default LiveCursors
