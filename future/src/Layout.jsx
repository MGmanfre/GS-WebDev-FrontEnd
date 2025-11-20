import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react';
import Button from './components/Button';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

export default function Layout() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <Button onClick={() => setOpenLogin(true)} variant='black' className='text-xl transition-all duration-500'>Login</Button>
      </Header>
      <LoginForm
          isOpen={openLogin}
          onClose={() => setOpenLogin(false)}
          onSwitchToRegister={() => {
            setOpenLogin(false);
            setOpenRegister(true);
          }}
        />
      <RegisterForm
          isOpen={openRegister}
          onClose={() => setOpenRegister(false)}
          onSwitchToLogin={() => {
            setOpenRegister(false);
            setOpenLogin(true);
          }}
        />
      <main className=" flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


