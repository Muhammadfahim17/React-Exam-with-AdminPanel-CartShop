import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, useOutletContext } from 'react-router';
import { useGetProductByIdQuery, useGetColorQuery, useGetBrendsQuery, useGetSubCategoryQuery, useEditProductMutation } from '../../../../features/services/userApi';
import HomeIcon from '@mui/icons-material/Home';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SellIcon from '@mui/icons-material/Sell';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useTranslation } from 'react-i18next';
import image1 from '../../../../shared/images/div.ql-toolbar.svg'
import image2 from '../../../../shared/images/Button with Icon Only.svg'
import image3 from '../../../../shared/images/Frame 1116606653.svg'
import Switch from '@mui/material/Switch';

const EditProduct = () => {

  const {t, i18n} = useTranslation();
  function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  const { theme } = useOutletContext();

  let { id } = useParams();
  let navigate = useNavigate();
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };

  let { data: productData, isLoading, refetch } = useGetProductByIdQuery(id);
  let { data: colors } = useGetColorQuery();
  let { data: brands } = useGetBrendsQuery();
  let { data: subCategories } = useGetSubCategoryQuery();
  

  let [form, setForm] = useState({
    productName: '',
    code: '',
    description: '',
    price: '',
    discountPrice: '',
    size: '',
    weight: '',
    brandId: '',
    subCategoryId: '',
    colorName: '',
    colorId: ''
  });

  useEffect(() => {
    if (productData?.data) {
      const p = productData.data;
      setForm({
        productName: p.productName || '',
        code: p.code || '',
        description: p.description || '',
        price: p.price || '',
        discountPrice: p.discountPrice || '',
        size: p.size || '',
        weight: p.weight || '',
        brandId: p.brandId || '',
        subCategoryId: p.subCategoryId || '',
        colorName: p.color  || '',
      });
    }
  }, [productData]);
  console.log("PRODUCT DATA", productData)
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  let [editProduct] = useEditProductMutation()

  let editNewProduct = async (event) => {
    event.preventDefault()
    try {
      await editProduct({
        Id: id, 
        BrandId: form.brandId,
        ColorId: form.colorId,
        ProductName: form.productName,
        Description: form.description,
        Quantity: form.quantity,
        Weight: form.weight,
        Size: form.size,
        Code: form.code,
        Price: form.price,
        HasDiscount: form.hasDiscount,
        DiscountPrice: form.discountPrice,
        SubCategoryId: form.subCategoryId
    }).unwrap()
    refetch()
    alert('Продукт успешно обновлен ✅');
    navigate('/products');
    } catch (err) {
      console.error('Update failed', err);
      alert('Ошибка во время обновления ❌');
    }
  }

  if (isLoading) return <div>Loading...</div>;

  return (

  

    <>


    <div className='hidden sm:block'>
    <div className='w-[100%] flex items-start'>

    
                <div className='bg-[#1C2536] text-white w-[300px] p-[15px] h-[170vh] '>
                <div className='w-[260px] p-[5px] m-auto  mt-[20px] flex flex-col items-start h-[220px] justify-around'>
                    <Link to={'/dashboard'} className='w-[100%] justify-around'>
                <div className='flex items-center w-[100%]   justify-between hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
                    <HomeIcon/>
                    <span className='font-[500] text-[17px]'>{t("Example.7")}</span>
                </div>
                    </Link>
                    <Link to={'/orders'} className='w-[100%] justify-around'>
                <div className='flex text-white  items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
                    <ViewListRoundedIcon/>
                    <span className='font-[500] text-[17px]'>{t("Example.8")}</span>
                </div>
                    </Link>
                <Link to={'/products'} className='w-[100%] justify-around'>
                <div className='flex  text-[white]  items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
                    <SellIcon/>
                    <span className='font-[500] text-[17px]'>{t("Example.9")}</span>
                </div>
                </Link>
                <Link to={'/other'} className='flex items-center justify-between w-[100%]'>
                <div className='flex items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
                    <FolderOutlinedIcon/>
                    <span className='font-[500] text-[17px]'>{t("Example.10")}</span>
                </div>
                </Link>
                </div>
                </div>

            <form onSubmit={editNewProduct} className='w-[80%] m-auto h-[170vh]'>
            <div className=' p-[20px]  '>
                      <div className='  p-[20px] h-[160vh]'>
          
                      <div className='flex items-center justify-between w-[100%]'>
                      <div className='flex items-center'>
                      <button className='text-[#7E84A3] font-bold text-[20px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg></button>
                      <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>EDIT PRODUCTS</h1>
                      </div>
                      <div className='flex items-center gap-[20px] '>
                          <button className='border border-[#E2E8F0] text-[#2563EB] font-[500]  rounded-md'>{t("Example.65")}</button>
                          <button type='submit' className='border border-[#E2E8F0] bg-[#2563EB] text-[white] font-[500]  rounded-md'>{t("Example.66")}</button>
                      </div>
                      </div>
          
                      <div className='w-[100%] flex items-start justify-between mt-[25px]'>
                      <div className=' p-[10px] w-[700px]'>
                      <h1 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.67")}</h1>
                      <div className='flex items-center justify-between mt-[15px]'>
                          <input name="productName" value={form.productName} onChange={handleChange} type="text" placeholder={t("Example.70")} className='border border-[#E5E5E5] w-[60%] rounded-md py-[11px] px-[15px] font-[500]' />
                          <input  value={form.code} onChange={handleChange} name='code' type="text" placeholder={t("Example.71")} className='border border-[#E5E5E5] w-[25%] rounded-md py-[11px] px-[15px] font-[500]' />
                      </div>
                      <div className='flex border rounded-md flex-col items-start border-[#E5E5E5] mt-[15px]'>
                      <img className='w-[100%]' src={image1} alt="" />
                      <input  value={form.description} onChange={handleChange}  name='description' className=' border-[#E5E5E5] rounded-md w-[100%] h-[150px] px-[15px] font-[500]' type="text" placeholder={t("Example.73")}  />
                      </div>
                      <div className='flex items-center justify-between mt-[15px]'>
                          <span className='text-[#737373] font-[500]'>{t("Example.75")}</span>
                          <select name="brandId" value={form.brandId} onChange={handleChange} className="border px-3 border-[#E5E5E5] rounded-md py-2 mt-2">
                          {brands?.data.map((brand) => (
                          <option option key={brand.id} value={brand.id}>
                          {brand.brandName}
                        </option>
    ))}
</select>
                      </div>
                      <div className='flex items-center justify-between mt-[15px]'>
                          <span className='text-[#737373] font-[500]'>{t("Example.74")}</span>
                          <select name="subCategoryId" value={form.subCategoryId} onChange={handleChange} className="border border-[#E5E5E5] px-3 py-2 rounded-md mt-2">
  {subCategories?.data.map((sub) => (
    <option key={sub.id} value={sub.id}>
      {sub.subCategoryName}
    </option>
  ))}
</select>
                      </div>
                      <div className='mt-[20px] flex flex-col items-start gap-[18px]'>
                          <h2 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.76")}</h2>
                          <div className='flex items-center justify-between w-[100%] '>
                              <input value={form.price} onChange={handleChange}  name='price' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.77")} />
                              <input value={form.discountPrice} onChange={handleChange}  name='discountPrice' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.78")} />
                              <input value={form.quantity} onChange={handleChange}  name='quantity' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.79")} />
                          </div>
                          <div>
                          <Switch {...label} defaultChecked />
                          <span className={`font-[500] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.80")}</span>
                      </div>
                      </div>
          
                      <div className='flex justify-between items-center w-[100%] mt-[30px] border border-[#E5E5E5] rounded-md p-[20px]'>
                          <div className='flex flex-col items-start gap-[5px]'>
                          <span className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.81")}</span>
                          <span className={`font-[400] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#737373]'}`}>{t("Example.82")}</span>
                          </div>
                          <div>
                          <Switch
  checked={form.hasDiscount}
  onChange={(e) =>
    setForm((prev) => ({ ...prev, hasDiscount: e.target.checked }))
  }
/>
                          </div>
                      
                      </div>
          
                      <div className='mt-[35px]'>
                      <span className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.83")}</span>
                      </div>
          
                      <div className='flex items-center justify-between mt-[20px]'>
                          <input value={form.size} onChange={handleChange} name='size' className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px]' type="text" placeholder={t("Example.85")} />
                          <div className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px] flex items-center gap-[10px]'>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>S ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>M ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>L ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>XL ❌</span>
                          </div>
                      </div>
          
                      <div className='flex items-center justify-between mt-[20px]'>
                          <input value={form.weight} onChange={handleChange} name='weight' className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px]' type="text" placeholder={t("Example.89")} />
                          <div className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px] flex items-center gap-[10px]'>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>10 ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>20 ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>30 ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>40 ❌</span>
                          </div>
                      </div>
          
                      </div>
          
          
                      <div className=' p-[10px] w-[400px]'>
                      
                      <div className='border border-[#D9E1EC] rounded-md p-[10px]'>
                      <div className='flex items-center justify-between '>
                      <h1 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.68")}</h1>
                      <span className={`font-[500] text-[[#2563EB] text-[16px] ${theme == 'dark' ? 'text-[#2563EB]' : 'text-[[#2563EB]'}`}>✅ {t("Example.69")}</span>
                      </div>
  <div className="flex mt-[15px] items-center gap-2 mb-4">
    <div
      className="w-12 h-12 rounded shadow"
      style={{ backgroundColor: form.colorName }}
    />
    <span className="font-medium">{form.colorName}</span>
  </div>

  <select
    name="colorId"
    value={form.colorId}
    onChange={handleChange}
    className="border border-[#E5E5E5] px-3 py-2 rounded-md w-full"
  >
    <option value="" disabled>{t("Example.93") }</option>
    {colors?.data.map((c) => (
      <option key={c.id} value={c.id}>
        {c.colorName}
      </option>
    ))}
  </select>
      
                      </div>
          
                      <div className='border mt-[33px] border-[#D9E1EC] flex flex-col items-start gap-[25px] p-[10px] rounded-md'>
                      <h2 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.92")}</h2>
                      <div className='flex items-center w-[100%] justify-center gap-[10px]'>
                      <input className='border border-[#E5E5E5]  px-[35px] py-[12px] rounded-md' placeholder={t("Example.93")} type="text" />
                      <img src={image2} alt="" />
                      </div>
                      <img src={image3} alt="" />
                      </div>
          
          
                      <div className='border mt-[33px] border-[#D9E1EC] p-[10px] rounded-md'>
                      <h2 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.94")}</h2>
                      {productData?.data?.images?.length > 0 && (
    <img src={`https://store-api.softclub.tj/images/${productData.data.images[0].images}`} alt={productData.data.productName} className="w-[85%] m-auto h-[250px] object-contain"/>)}
                      </div>
                      </div>
                      </div>
          
                      </div>
          </div>
            </form>


    </div>

    </div>











    <div className='sm:hidden'>
      <form onSubmit={editNewProduct} className='w-[100%] p-[15px] m-auto'>
      <div className='flex items-center justify-between w-[100%]'>
                      <div className='flex items-center'>
                      <button className='text-[#7E84A3] font-bold text-[20px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg></button>
                      <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>EDIT PRODUCTS</h1>
                      </div>
                      {/* <div className='flex items-center gap-[20px] '>
                          <button className='border border-[#E2E8F0] text-[#2563EB] font-[500]  rounded-md'>{t("Example.65")}</button>
                          <button type='submit' className='border border-[#E2E8F0] bg-[#2563EB] text-[white] font-[500]  rounded-md'>{t("Example.66")}</button>
                      </div> */}
              </div>
              

              <div className=' p-[10px] w-[98%]'>
                      <h1 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.67")}</h1>
                      <div className='flex items-center justify-between mt-[15px]'>
                          <input name="productName" value={form.productName} onChange={handleChange} type="text" placeholder={t("Example.70")} className='border border-[#E5E5E5] w-[60%] rounded-md py-[11px] px-[15px] font-[500]' />
                          <input  value={form.code} onChange={handleChange} name='code' type="text" placeholder={t("Example.71")} className='border border-[#E5E5E5] w-[25%] rounded-md py-[11px] px-[15px] font-[500]' />
                      </div>
                      <div className='flex border rounded-md flex-col items-start border-[#E5E5E5] mt-[15px]'>
                      <img className='w-[100%]' src={image1} alt="" />
                      <input  value={form.description} onChange={handleChange}  name='description' className=' border-[#E5E5E5] rounded-md w-[100%] h-[150px] px-[15px] font-[500]' type="text" placeholder={t("Example.73")}  />
                      </div>
                      <div className='flex items-center justify-between mt-[15px]'>
                          <span className='text-[#737373] font-[500]'>{t("Example.75")}</span>
                          <select name="brandId" value={form.brandId} onChange={handleChange} className="border px-3 border-[#E5E5E5] rounded-md py-2 mt-2">
                          {brands?.data.map((brand) => (
                          <option option key={brand.id} value={brand.id}>
                          {brand.brandName}
                        </option>
    ))}
</select>
                      </div>
                      <div className='flex items-center justify-between mt-[15px]'>
                          <span className='text-[#737373] font-[500]'>{t("Example.74")}</span>
                          <select name="subCategoryId" value={form.subCategoryId} onChange={handleChange} className="border border-[#E5E5E5] px-3 py-2 rounded-md mt-2">
  {subCategories?.data.map((sub) => (
    <option key={sub.id} value={sub.id}>
      {sub.subCategoryName}
    </option>
  ))}
</select>
                      </div>
                      <div className='mt-[20px] flex flex-col items-start gap-[18px]'>
                          <h2 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.76")}</h2>
                          <div className='flex flex-col gap-[18px] items-center justify-between w-[100%] '>
                              <input value={form.price} onChange={handleChange}  name='price' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.77")} />
                              <input value={form.discountPrice} onChange={handleChange}  name='discountPrice' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.78")} />
                              <input value={form.quantity} onChange={handleChange}  name='quantity' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.79")} />
                          </div>
                          <div>
                          <Switch {...label} defaultChecked />
                          <span className={`font-[500] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.80")}</span>
                      </div>
                      </div>
          
                      <div className='flex justify-between items-center w-[100%] mt-[30px] border border-[#E5E5E5] rounded-md p-[20px]'>
                          <div className='flex flex-col items-start gap-[5px]'>
                          <span className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.81")}</span>
                          <span className={`font-[400] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#737373]'}`}>{t("Example.82")}</span>
                          </div>
                          <div>
                          <Switch
  checked={form.hasDiscount}
  onChange={(e) =>
    setForm((prev) => ({ ...prev, hasDiscount: e.target.checked }))
  }
/>
                          </div>
                      
                      </div>
          
                      <div className='mt-[35px]'>
                      <span className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.83")}</span>
                      </div>
          
                      <div className='flex flex-col gap-[18px] items-center justify-between mt-[20px]'>
                          <input value={form.size} onChange={handleChange} name='size' className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px]' type="text" placeholder={t("Example.85")} />
                          <div className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px] flex items-center gap-[10px]'>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>S ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>M ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>L ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>XL ❌</span>
                          </div>
                      </div>
          
                      <div className='flex flex-col gap-[18px] items-center justify-between mt-[20px]'>
                          <input value={form.weight} onChange={handleChange} name='weight' className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px]' type="text" placeholder={t("Example.89")} />
                          <div className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px] flex items-center gap-[10px]'>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>10 ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>20 ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>30 ❌</span>
                              <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>40 ❌</span>
                          </div>
                      </div>
          
                      </div>

                      <div className=' p-[10px] w-[98%] mt-[25px]'>
                      
                      <div className='border border-[#D9E1EC] rounded-md p-[10px]'>
                      <div className='flex items-center justify-between '>
                      <h1 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.68")}</h1>
                      <span className={`font-[500] text-[[#2563EB] text-[16px] ${theme == 'dark' ? 'text-[#2563EB]' : 'text-[[#2563EB]'}`}>✅ {t("Example.69")}</span>
                      </div>
  <div className="flex mt-[15px] items-center gap-2 mb-4">
    <div
      className="w-12 h-12 rounded shadow"
      style={{ backgroundColor: form.colorName }}
    />
    <span className="font-medium">{form.colorName}</span>
  </div>

  <select
    name="colorId"
    value={form.colorId}
    onChange={handleChange}
    className="border border-[#E5E5E5] px-3 py-2 rounded-md w-full"
  >
    <option value="" disabled>{t("Example.93") }</option>
    {colors?.data.map((c) => (
      <option key={c.id} value={c.id}>
        {c.colorName}
      </option>
    ))}
  </select>
      
                      </div>
          
                      <div className='border mt-[33px] border-[#D9E1EC] flex flex-col items-start gap-[25px] p-[10px] rounded-md'>
                      <h2 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.92")}</h2>
                      <div className='flex items-center w-[100%] justify-center gap-[10px]'>
                      <input className='border border-[#E5E5E5]  px-[35px] py-[12px] rounded-md' placeholder={t("Example.93")} type="text" />
                      <img src={image2} alt="" />
                      </div>
                      <img src={image3} alt="" />
                      </div>
          
          
                      <div className='border mt-[33px] border-[#D9E1EC] p-[10px] rounded-md'>
                      <h2 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.94")}</h2>
                      {productData?.data?.images?.length > 0 && (
    <img src={`https://store-api.softclub.tj/images/${productData.data.images[0].images}`} alt={productData.data.productName} className="w-[85%] m-auto h-[250px] object-contain"/>)}
                      </div>
                      </div>

                      <div className='flex justify-around my-[35px] items-center gap-[20px] '>
                          <button className='border border-[#E2E8F0] text-[#2563EB] font-[500]  rounded-md'>{t("Example.65")}</button>
                          <button type='submit' className='border border-[#E2E8F0] bg-[#2563EB] text-[white] font-[500]  rounded-md'>{t("Example.66")}</button>
                      </div>

      </form>
    </div>


    </>
  );
};

export default React.memo(EditProduct);

