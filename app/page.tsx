'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Expertise from './components/Expertise'
import Tool from './components/Tool'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero onOpenTool={() => setModalOpen(true)} />
      <Services onOpenTool={() => setModalOpen(true)} />
      <Stats />
      <Expertise />
      <Tool onOpenTool={() => setModalOpen(true)} />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
