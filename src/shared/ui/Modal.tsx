import React from 'react'
import { createPortal } from 'react-dom'

type Props = { 
  open: boolean; 
  onClose?: () =>void; 
  x?: number;
  y?: number;
  children: React.ReactNode
}

export default function Modal({open, onClose, x, y, children}: Props){
  if (!open) return null
  return createPortal(
    <div role="dialog" aria-modal="true" onClick={onClose} style={{position: 'fixed', left:x, top:y, zIndex:1000}}>
      <div onClick={e=>e.stopPropagation()}>{children}</div>
    </div>,
    document.body
  )
}