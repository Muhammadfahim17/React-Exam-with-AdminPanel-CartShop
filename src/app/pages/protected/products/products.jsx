import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SellIcon from '@mui/icons-material/Sell';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { Link, useOutletContext } from 'react-router';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDeleteProductsMutation, useGetProductsQuery } from '../../../../features/services/userApi';

const Products = () => {

        const {t, i18n} = useTranslation();
        function TranslateClick(lang) {
            i18n.changeLanguage(lang);
        }

        const { theme } = useOutletContext();

        let {data, refetch} = useGetProductsQuery()
        console.log(data);

        let [deleteProducts] = useDeleteProductsMutation()

        let handleDelete = async (id) => {
            try {
                let res = await deleteProducts(id).unwrap()
                refetch()
                console.log('delete category', res);
            } catch (error) {
                console.error('Error deleting category:', error);
            }
        }

        let [search,setSearch] = useState('')
        

return (
    <>



    <div className='hidden sm:block'>
    <div className='w-[100%] flex items-start'>

    
    <div className='bg-[#1C2536] text-white w-[300px] p-[15px] h-[180vh] '>
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
    <div className='flex bg-white text-[#5A607F]  items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
        <SellIcon/>
        <span className='font-[500] text-[17px]'>{t("Example.9")}</span>
    </div>
    <Link to={'/other'} className='flex items-center justify-between w-[100%]'>
    <div className='flex items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
        <FolderOutlinedIcon/>
        <span className='font-[500] text-[17px]'>{t("Example.10")}</span>
    </div>
    </Link>
    </div>
    </div>


    <div className='w-[80%] m-auto  p-[20px] h-[180vh]'>
    <div className='flex items-center justify-between'>
        <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.9")}</h1>
        <Link to={'/addProducts'}>
        <button className={`font-[600] text-[17px]  rounded-md bg-[#2563EB]  ${theme == 'dark' ? 'text-white' : 'text-[white]'}`}>+ {t("Example.40")}</button>
        </Link>
    </div>
    <div className='mt-[25px] flex items-center justify-between'>
        
        <div className='flex items-center gap-[20px]'>
        <div className='border border-[#E5E5E5] py-[12px]  font-[500] rounded-md px-[10px]'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className={`font-[600] text-[16px] border-none outline-none ${theme == 'dark' ? 'text-black' : 'text-[#5A607F]'}`} type="text" placeholder={t("Example.41")} />
            <SearchIcon className='text-[#737373] font-bold' />
        </div>
        <div className='border-[#E5E5E5] pb-[10px]'>
            <fieldset className='border flex items-center  border-[#E5E5E5] px-[15px] py-[5px] rounded-md'>
                <legend className='text-[#737373]'>{t("Example.42")} </legend>
                <input className={`font-[600] text-[16px] border-none outline-none ${theme == 'dark' ? 'text-black' : 'text-[#5A607F]'}`} type="text" placeholder={t("Example.43")}  />
                <p><KeyboardArrowDownIcon/></p>
            </fieldset>
        </div>
        </div>

        <div className='flex items-center gap-[20px] '>
            <div className='shadow rounded-md w-[35px] px-[5px] py-[5px]'>
            <EditIcon className='text-[#2563EB] ' />
            </div>
            
            <div className='shadow rounded-md w-[35px] px-[5px] py-[5px]'>
            <DeleteIcon className='text-[#2563EB]' />
            </div>
        </div>

    </div>

    <table className='w-[100%] mt-[35px]'>
            <thead>
                <tr className='text-[#5A607F] shadow rounded-md'>
                    <th className='text-start py-[8px]'><input type="checkbox" /> {t('Example.58')}</th>
                    <th className='text-start'>{t('Example.59')}</th>
                    <th className='text-start'>{t('Example.60')}</th>
                    <th className='text-start'>{t('Example.61')}</th>
                    <th>{t('Example.62')}</th>
                </tr>
            </thead>
            <tbody>
            {data && data.data.products.map((e) => {
                return (
                    <tr>
                    <td>
                        <div className='flex items-center py-[15px] gap-[10px]'>
                            <input checked={e.hasDiscount} type="checkbox" />
                            <img className='w-[45px] h-[45px] rounded-md' src={`https://store-api.softclub.tj/images/${e.image}`} alt="" />
                            <span className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.productName}</span>
                        </div>
                    </td>
                    <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.hasDiscount ? 'Stock' : 'Out of Stock'}</td>
                    <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.categoryName}</td>
                    <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.price}</td>
                    <td  className='text-center'>
                        <div>
                            <Link to={`/edit/${e.id}`}>
                            <EditIcon className='text-[#1E5EFF] cursor-pointer' />
                            </Link>
                            <DeleteIcon onClick={() => handleDelete(e.id)} className='text-[#F04438] cursor-pointer' />
                        </div>
                    </td>
                </tr>
                )
            })}            
            </tbody>
        </table>

        <div className='flex items-center justify-between mt-[50px]'>
        <div>
        <Stack spacing={2}>
    <Pagination count={24} color="primary" />
    </Stack>
        </div>
        <p  className={`font-[700] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#5A607F]'}`}>{t("Example.55")}</p>
    </div>

    </div>



    </div>

    </div>










    <div className='sm:hidden'>

    <div className='flex items-center justify-between p-[10px]'>
        <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.9")}</h1>
        <Link to={'/addProducts'}>
        <button className={`font-[600] text-[17px]  rounded-md bg-[#2563EB]  ${theme == 'dark' ? 'text-white' : 'text-[white]'}`}>+ {t("Example.40")}</button>
        </Link>
    </div>
    <div className='mt-[25px] flex flex-col items-center justify-between'>
        
        <div className='flex w-[95%] flex-col items-center gap-[20px]'>
        <div className='border w-[90%] flex items-center justify-around  border-[#E5E5E5] py-[12px]  font-[500] rounded-md px-[10px]'>
            <input className={`font-[600] text-[16px] border-none outline-none ${theme == 'dark' ? 'text-black' : 'text-[#5A607F]'}`} type="text" placeholder={t("Example.41")} />
            <SearchIcon className='text-[#737373] font-bold' />
        </div>
        <div className='border-[#E5E5E5] w-[95%] m-auto pb-[10px]'>
            <fieldset className='border flex items-center justify-around w-[90%] m-auto border-[#E5E5E5] px-[15px] py-[5px] rounded-md'>
                <legend className='text-[#737373]'>{t("Example.42")} </legend>
                <input className={`font-[600] text-[16px] border-none outline-none ${theme == 'dark' ? 'text-black' : 'text-[#5A607F]'}`} type="text" placeholder={t("Example.43")}  />
                <p><KeyboardArrowDownIcon/></p>
            </fieldset>
        </div>
        </div>

        <div className='w-[100%] m-auto mt-[30px] flex flex-col items-start gap-[25px] mb-[100px]'>
            {data && data.data.products.map((el) => {
                return (
                    <div className='shadow relative w-[98%] m-auto p-[17px] rounded-md '>
                        <div className='flex items-center gap-[20px]  '>
                        <img className='w-[45px] h-[45px] rounded-md' src={`https://store-api.softclub.tj/images/${el.image}`} alt="" />
                        <div className='flex flex-col items-start gap-[5px]'>
                        <span>{el.productName}</span>
                        <span className='text-green-600 font-[500] text-[17px]'>{el.price}</span>
                        </div>
                        </div>
                        <p className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>Iventory : {el.hasDiscount ? 'Stock' : 'Out of Stock'}</p>
                        <p className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>Category : {el.categoryName}</p>
                        <div className='absolute flex flex-col items-center gap-[25px] bottom-[50%] left-[85%]'>
                            <Link to={`/edit/${el.id}`}>
                            <EditIcon className='text-[#1E5EFF] cursor-pointer' />
                            </Link>
                            <DeleteIcon onClick={() => handleDelete(el.id)} className='text-[#F04438] cursor-pointer' />
                        </div>
                    </div>
                )
            })}
        </div>

        <div className='mb-[40px]'>
        <Stack spacing={2}>
    <Pagination count={24} color="primary" />
    </Stack>
        </div>

    </div>


    </div>

    </>
)
}

export default React.memo(Products)