import React from 'react'
const containerWidth = 'px-7 max-w-7xl'
export default function PxLayout({children,className = ''}) {
  return (
    <div className={`${containerWidth} mx-auto ${className}`}>{children}</div>
  )
}
