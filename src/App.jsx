import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Payment from './pages/Payment'
import PayFee from './pages/PayFee'
import Transactions from './pages/Transactions'
import Transfer from './pages/Transfer'
import Settings from './pages/Settings'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import WebhookReceiver from './pages/WebhookReceiver'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/pay-fee" element={<PayFee />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/webhook-receiver" element={<WebhookReceiver />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
