import React from 'react'
import CLientLayout from '../Layouts/ClientLayout';

export default function ClientDashboard() {
    console.log('Environment:', import.meta.env.VITE_ENV);

  return (
    <CLientLayout>
      ClientDashboard
      </CLientLayout>
  )
}
