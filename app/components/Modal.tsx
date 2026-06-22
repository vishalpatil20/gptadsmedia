'use client'

import { useEffect } from 'react'

export default function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white border border-stone-200 rounded-2xl p-8 max-w-md w-full text-center relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-100 text-stone-400 hover:text-stone-900 flex items-center justify-center text-sm"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-xl font-extrabold text-stone-900 mx-auto mb-4">
          G
        </div>
        <h3 className="text-xl font-bold mb-2">Leaving GPT Ads Media</h3>
        <p className="text-stone-500 text-sm mb-6 leading-relaxed">
          You're about to visit the <strong>ChatGPT Ad Library</strong> — our searchable database of real ChatGPT ads.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <a
            href="https://www.chatgptadlibrary.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-stone-900 text-white text-sm font-semibold rounded-lg hover:bg-stone-800 transition-colors"
          >
            Open Ad Library
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-stone-200 text-stone-900 text-sm font-semibold rounded-lg hover:border-stone-400 transition-colors"
          >
            Stay Here
          </button>
        </div>
      </div>
    </div>
  )
}
