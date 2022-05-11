import React from 'react'
import Layout from '../../components/Layout'
import { oferta } from '../../styles/oferta.module.css'

export default function Oferta() {
  return (
    <Layout>
      <div className={oferta}>
          <h2>Oferta usług</h2>
          <h3>Zapoznaj się z tym co mozesz kupic</h3>
      </div>
    </Layout>
  )
}
