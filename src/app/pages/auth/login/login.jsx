import React, { useState } from 'react'
import image1 from '../../../../shared/images/Group 1116606595 (1).svg'
import { useTranslation } from 'react-i18next';
import { useNavigate, useOutletContext } from 'react-router';
import { useLoginAdminMutation } from '../../../../features/services/userApi';



const Login = () => {

      const {t, i18n} = useTranslation();
      function TranslateClick(lang) {
          i18n.changeLanguage(lang);
      }

      const navigate = useNavigate();
    
      const { theme } = useOutletContext();
      let [loginAdmin] = useLoginAdminMutation()


      let [userName, setUserName] = useState('');
      let [password, setPassword] = useState('');
    
      let handleSubmit  = async (event) => {
        event.preventDefault()
        try {
          let response = await loginAdmin({ userName, password }).unwrap();
          if(response?.data) {
            localStorage.setItem('token', response.data); 
            navigate('/dashboard');
          }
        } catch (err) {
          console.error('Login error:', err);
          alert("Login failed");
        }
      }

    


  return (
    <>

      <div className='hidden sm:block'>
      <div className='w-[100%] m-auto flex h-[100vh]'>
      <div className='bg-[#1C2536] text-white pt-[20%] pl-[5%] w-[55%] flex flex-col items-start gap-[15px]'>
      <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[white]'}`}>{t('Example.1')}</h1>
      <img src={image1} alt="" />
        </div>

        <div className='w-[40%] flex flex-col'>


      <div className='w-[450px]  m-auto flex flex-col items-start h-[330px] '>
        <form onSubmit={handleSubmit} className='flex flex-col w-[100%] items-start justify-between h-[100vh]'>
        <h2 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t('Example.2')}</h2>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} className={`font-[500] border rounded-md w-[100%]  py-[11px] px-[15px]  ${theme == 'dark' ? 'text-white' : 'text-[gray]'}`} type="text" placeholder={t('Example.3')} />
        <input value={password} onChange={(e) => setPassword(e.target.value)}  className={`font-[500] border rounded-md w-[100%]  py-[11px] px-[15px]  ${theme == 'dark' ? 'text-white' : 'text-[gray]'}`} type="password" placeholder={t('Example.4')} />
        <div className='flex flex-col items-center gap-[20px] w-[100%]'>
          <button className='text-[#2563EB] font-[600] text-[18px]'>{t('Example.5')}</button>
          <button type='submit' className='bg-[#2563EB] rounded-md py-[12px] text-white font-[600] text-[18px] w-[100%]'>{t('Example.6')}</button>
    
        </div>
        </form>
      </div>
        </div>

      </div>
      </div>






      <div className='sm:hidden'>


      <div className='w-[100%] m-auto flex flex-col gap-[25px] h-[100vh]'>
      <div className='bg-[#1C2536] text-white pt-[20%] pb-[10%]  pl-[5%] w-[100%] flex flex-col items-start gap-[15px]'>
      <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[white]'}`}>{t('Example.1')}</h1>
      <img src={image1} alt="" />
        </div>

        <div className='w-[100%] flex flex-col'>


      <div className='w-[100%]  m-auto flex flex-col items-center h-[350px] '>
        <form onSubmit={handleSubmit} className='flex flex-col  w-[100%] items-center justify-between h-[100vh]'>
        <h2 className={`font-[700] text-[25px] text-center  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t('Example.2')}</h2>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} className={`font-[500] border rounded-md w-[90%]  py-[11px] px-[15px]  ${theme == 'dark' ? 'text-white' : 'text-[gray]'}`} type="text" placeholder={t('Example.3')} />
        <input value={password} onChange={(e) => setPassword(e.target.value)}  className={`font-[500] border rounded-md w-[90%]  py-[11px] px-[15px]  ${theme == 'dark' ? 'text-white' : 'text-[gray]'}`} type="password" placeholder={t('Example.4')} />
        <div className='flex flex-col items-center gap-[20px] w-[100%]'>
          <button className='text-[#2563EB] font-[600] text-[18px]'>{t('Example.5')}</button>
          <button type='submit' className='bg-[#2563EB] rounded-md py-[12px] text-white font-[600] text-[18px] w-[90%]'>{t('Example.6')}</button>
    
        </div>
        </form>
      </div>
        </div>

      </div>


      </div>

    </>
  )
}

export default Login