import React from 'react'
import Link from 'next/link'

const MenuItem = ({menu}) => {
  return (
    <Link href={menu.url}>{menu.name}</Link>
  )
}

export default MenuItem