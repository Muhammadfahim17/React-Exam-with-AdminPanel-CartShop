import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/layout/layout'
import Login from './pages/auth/login/login';
import Dashboard from './pages/protected/dashboard/dashboard';
import Orders from './pages/protected/orders/orders';
import Products from './pages/protected/products/products';
import Other from './pages/protected/other/other';
import AddProducts from './pages/protected/addProducts/addProducts';
import Brands from './pages/protected/brands/brands';
import SubCategory from './pages/protected/subCategory/subCategory';
import Edit from './pages/protected/edit/edit';

const App = () => {
  return (
    <>

    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<Login/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='orders' element={<Orders/>} />
      <Route path='products' element={<Products/>} />
      <Route path='other' element={<Other/>} />
      <Route path='addProducts' element={<AddProducts/>} />
      <Route path='brands' element={<Brands/>} />
      <Route path='subCategory' element={<SubCategory/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      </Route>
    </Routes>


    </>
  )
}

export default App