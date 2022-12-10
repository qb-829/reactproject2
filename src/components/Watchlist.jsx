// gets global state and all my movies to display

import React from 'react'
import {useSelector} from 'react-redux'

export default function Watchlist() {
    const watchList = useSelector(state => state)

    console.log(watchList)
  return (
    <div>Watchlist</div>
  )
}
