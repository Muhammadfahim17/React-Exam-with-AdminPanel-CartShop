import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SellIcon from '@mui/icons-material/Sell';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useOutletContext } from 'react-router';
import {  useAddProductsMutation, useGetBrendsQuery, useGetColorQuery, useGetSubCategoryQuery } from '../../../../features/services/userApi';
import image1 from '../../../../shared/images/div.ql-toolbar.svg'
import image2 from '../../../../shared/images/Button with Icon Only.svg'
import image3 from '../../../../shared/images/Frame 1116606653.svg'
import Switch from '@mui/material/Switch';


const AddProducts = () => {

    const label = { inputProps: { 'aria-label': 'Size switch demo' } };
    
    const {t, i18n} = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    let navigate = useNavigate();




    const { theme } = useOutletContext();

    let {data} = useGetColorQuery()
    let {data : brands} = useGetBrendsQuery()
    let {data : subCategory} = useGetSubCategoryQuery()
    let [addProduct] = useAddProductsMutation()
    const [previewImage, setPreviewImage] = useState(null);
    

    let [color,setColor] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const url = URL.createObjectURL(file);
        setPreviewImage(url);
        } else {
        setPreviewImage(null);
        }
    };

    let addNewProducts = async (event) => {
        event.preventDefault()
        let formData = new FormData()
        let target = event.target

        if(target['Images'].files.length === 0) {
            alert("Пожалуйста, выберите изображение.");
            return;
        }

        formData.append("Images",target['Images'].files[0])
        formData.append("ProductName",target['ProductName'].value)
        formData.append("Description",target['Description'].value)
        formData.append("Code",target['Code'].value)
        formData.append("Price",target['Price'].value)
        formData.append("ColorId", color)
        formData.append("DiscountPrice", target['DiscountPrice'].value)
        formData.append("Size", target['Size'].value)
        formData.append("Weight", target['Weight'].value)
        formData.append("BrandId", target['BrandId'].value)
        formData.append("Quantity", target['Quantity'].value)
        formData.append("SubCategoryId", target['SubCategoryId'].value)

        for (let pair of formData.entries()) {
            console.log(pair[0]+ ': ' + pair[1]);
        }

        try {
            let response = await addProduct(formData).unwrap()
            console.log("Product added:", response)
            alert("Товар успешно добавлен. ✅")
            navigate('/products') 
        } catch (error) {
            console.error("Add product error:", error)
            alert("Не удалось добавить продукт. ❌")
        }

    }

    return (
    <>
        
        <div className='hidden sm:block'>
        <div className='w-[100%] flex items-start'>

            <div className='bg-[#1C2536] text-white w-[300px] p-[15px] h-[160vh] '>
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
            

            <form onSubmit={addNewProducts} className='w-[80%] m-auto'>

            <div className='  p-[20px] h-[160vh]'>

            <div className='flex items-center justify-between w-[100%]'>
            <div className='flex items-center'>
            <button className='text-[#7E84A3] font-bold text-[20px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg></button>
            <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.63")} / {t("Example.64")}</h1>
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
                <input name='ProductName' type="text" placeholder={t("Example.70")} className='border border-[#E5E5E5] w-[60%] rounded-md py-[11px] px-[15px] font-[500]' />
                <input name='Code' type="text" placeholder={t("Example.71")} className='border border-[#E5E5E5] w-[25%] rounded-md py-[11px] px-[15px] font-[500]' />
            </div>
            <div className='flex border rounded-md flex-col items-start border-[#E5E5E5] mt-[15px]'>
            <img className='w-[100%]' src={image1} alt="" />
            <input name='Description' className=' border-[#E5E5E5] rounded-md w-[100%] h-[150px] px-[15px] font-[500]' type="text" placeholder={t("Example.73")}  />
            </div>
            <div className='flex items-center justify-between mt-[15px]'>
                <span className='text-[#737373] font-[500]'>{t("Example.75")}</span>
                <select name='BrandId' className='border border-[#E5E5E5] text-[#737373] font-[500] px-[30px] py-[7px] rounded-md'>
                    {brands && brands.data.map((e) => {
                        return (
                            <option key={e.id} value={e.id}>{e.brandName}</option>
                        )
                    })}
                </select>
            </div>
            <div className='flex items-center justify-between mt-[15px]'>
                <span className='text-[#737373] font-[500]'>{t("Example.74")}</span>
                <select name='SubCategoryId' className='border border-[#E5E5E5] text-[#737373] font-[500] px-[35px] py-[7px] rounded-md'>
                    {subCategory && subCategory.data.map((e) => {
                        return (
                            <option key={e.id} value={e.id}>{e.subCategoryName}</option>
                        )
                    })}
                </select>
            </div>
            <div className='mt-[20px] flex flex-col items-start gap-[18px]'>
                <h2 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.76")}</h2>
                <div className='flex items-center justify-between w-[100%] '>
                    <input name='Price' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.77")} />
                    <input name='DiscountPrice' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.78")} />
                    <input name='Quantity' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.79")} />
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
                <Switch {...label} defaultChecked />
                </div>
            
            </div>

            <div className='mt-[35px]'>
            <span className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.83")}</span>
            </div>

            <div className='flex items-center justify-between mt-[20px]'>
                <input name='Size' className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px]' type="text" placeholder={t("Example.85")} />
                <div className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px] flex items-center gap-[10px]'>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>S ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>M ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>L ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>XL ❌</span>
                </div>
            </div>

            <div className='flex items-center justify-between mt-[20px]'>
                <input name='Weight' className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px]' type="text" placeholder={t("Example.89")} />
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
            <div className='flex flex-wrap gap-[15px] items-center justify-between mt-[10px]'>
                {data?.data?.map((color) => {
                return (
                    <div onClick={() => setColor(color.id)} key={color.id} style={{backgroundColor: color.colorName.toLowerCase()}} className='w-[25px] h-[25px] border rounded-full'>
                    {color.name}
                    </div>
                )
                })}
            </div>
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
            <input  onChange={handleImageChange} name='Images' type="file" />
            {previewImage && (
    <img src={previewImage} alt="Preview" className="w-[100px] m-auto h-[100px] object-contain mt-2" />
    )}
            </div>
                
            </div>
            </div>

            </div>
            </form>

        </div>

        </div>












        <div className='sm:hidden'>
        

        <form onSubmit={addNewProducts} className='w-[100%] m-auto mt-[20px]'>
        <div className='flex flex-col gap-[25px] items-center justify-between w-[100%]'>
            <div className='flex items-center'>
            <button className='text-[#7E84A3] font-bold text-[20px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg></button>
            <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.63")} / {t("Example.64")}</h1>
            </div>
            
            </div>

            <div className=' p-[10px] w-[98%] m-auto mt-[25px]'>
            <h1 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.67")}</h1>
            <div className='flex items-center justify-between mt-[15px]'>
                <input name='ProductName' type="text" placeholder={t("Example.70")} className='border border-[#E5E5E5] w-[60%] rounded-md py-[11px] px-[15px] font-[500]' />
                <input name='Code' type="text" placeholder={t("Example.71")} className='border border-[#E5E5E5] w-[25%] rounded-md py-[11px] px-[15px] font-[500]' />
            </div>
            <div className='flex border rounded-md flex-col items-start border-[#E5E5E5] mt-[15px]'>
            <img className='w-[100%]' src={image1} alt="" />
            <input name='Description' className=' border-[#E5E5E5] rounded-md w-[100%] h-[150px] px-[15px] font-[500]' type="text" placeholder={t("Example.73")}  />
            </div>
            <div className='flex items-center justify-between mt-[15px]'>
                <span className='text-[#737373] font-[500]'>{t("Example.75")}</span>
                <select name='BrandId' className='border border-[#E5E5E5] text-[#737373] font-[500] px-[30px] py-[7px] rounded-md'>
                    {brands && brands.data.map((e) => {
                        return (
                            <option key={e.id} value={e.id}>{e.brandName}</option>
                        )
                    })}
                </select>
            </div>
            <div className='flex items-center justify-between mt-[15px]'>
                <span className='text-[#737373] font-[500]'>{t("Example.74")}</span>
                <select name='SubCategoryId' className='border border-[#E5E5E5] text-[#737373] font-[500] px-[35px] py-[7px] rounded-md'>
                    {subCategory && subCategory.data.map((e) => {
                        return (
                            <option key={e.id} value={e.id}>{e.subCategoryName}</option>
                        )
                    })}
                </select>
            </div>
            <div className='mt-[20px] flex flex-col items-start gap-[18px]'>
                <h2 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.76")}</h2>
                <div className='flex flex-col gap-[25px] items-center justify-between w-[100%] '>
                    <input name='Price' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.77")} />
                    <input name='DiscountPrice' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.78")} />
                    <input name='Quantity' className='border border-[#E5E5E5] font-[500] py-[7px] rounded-md px-[10px]' type="text" placeholder={t("Example.79")} />
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
                <Switch {...label} defaultChecked />
                </div>
            
            </div>

            <div className='mt-[35px]'>
            <span className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.83")}</span>
            </div>

            <div className='flex flex-col gap-[20px] items-center justify-between mt-[20px]'>
                <input name='Size' className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px]' type="text" placeholder={t("Example.85")} />
                <div className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px] flex items-center gap-[10px]'>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>S ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>M ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>L ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>XL ❌</span>
                </div>
            </div>

            <div className='flex flex-col gap-[25px] items-center justify-between mt-[20px]'>
                <input name='Weight' className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px]' type="text" placeholder={t("Example.89")} />
                <div className='border border-[#E5E5E5] rounded-md px-[25px] py-[7px] flex items-center gap-[10px]'>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>10 ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>20 ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>30 ❌</span>
                    <span className='bg-[#E6E9F4] font-[500] rounded-md px-[15px] py-[4px]'>40 ❌</span>
                </div>
            </div>

            </div>

                
            <div className='mt-[35px] mb-[20px] p-[10px] w-[98%] m-auto'>
            
            <div className='border border-[#D9E1EC] rounded-md p-[10px]'>
            <div className='flex items-center justify-between '>
            <h1 className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.68")}</h1>
            <span className={`font-[500] text-[[#2563EB] text-[16px] ${theme == 'dark' ? 'text-[#2563EB]' : 'text-[[#2563EB]'}`}>✅ {t("Example.69")}</span>
            </div>
            <div className='flex flex-wrap gap-[15px] items-center justify-between mt-[10px]'>
                {data?.data?.map((color) => {
                return (
                    <div onClick={() => setColor(color.id)} key={color.id} style={{backgroundColor: color.colorName.toLowerCase()}} className='w-[25px] h-[25px] border rounded-full'>
                    {color.name}
                    </div>
                )
                })}
            </div>
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
            <input  onChange={handleImageChange} name='Images' type="file" />
            {previewImage && (
    <img src={previewImage} alt="Preview" className="w-[100px] m-auto h-[100px] object-contain mt-2" />
    )}
            </div>
                
            </div>

        <div className='flex justify-around my-[25px] items-center gap-[20px] '>
                <button className='border border-[#E2E8F0] text-[#2563EB] font-[500]  rounded-md'>{t("Example.65")}</button>
                <button type='submit' className='border border-[#E2E8F0] bg-[#2563EB] text-[white] font-[500]  rounded-md'>{t("Example.66")}</button>
            </div>
        </form>
    


        </div>

    </>
)
}

export default React.memo(AddProducts)