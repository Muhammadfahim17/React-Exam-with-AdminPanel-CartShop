import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SellIcon from '@mui/icons-material/Sell';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { Link, useOutletContext } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useAddSubCategoryMutation, useDeleteSubCategoryMutation, useEditSubCategoryMutation, useGetCategoriesQuery, useGetSubCategoryQuery } from '../../../../features/services/userApi';
import image1 from '../../../../shared/images/Frame 560.svg'
import image2 from '../../../../shared/images/upload.svg'
import image3 from '../../../../shared/images/Frame 600.svg'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const SubCategory = () => {

        const {t, i18n} = useTranslation();
        function TranslateClick(lang) {
            i18n.changeLanguage(lang);
        }

        const { theme } = useOutletContext();

        let {data, refetch} = useGetSubCategoryQuery()
        let [deleteSubCategory] = useDeleteSubCategoryMutation()
        let {data : Categories} = useGetCategoriesQuery()

        let [addNewSubcategory] = useAddSubCategoryMutation()
        let [inpName,setInpName] = useState('')

    

        let handleDelete = async (id) => {
            try {
                let res =  await deleteSubCategory(id).unwrap()
                refetch()
                alert('SubCategory Успещно Удален из списков ✅')
            } catch (error) {
                console.error(error);
            }
        }

        let [select,setSelect] = useState(null)

        async function addNewSub() {

            if (!inpName || !select) {
                alert("Заполните все поля.");
                return;
            }

            let newSubCategory = {
                SubCategoryName : inpName,
                CategoryId : select
            }

            try {
                let res = await addNewSubcategory(newSubCategory).unwrap()
                alert('Subcategory Успешно добавлен ✅')
                refetch()
                setInpName('');
                setSelect(null);
                console.log('add New subcategory', res);
            } catch (error) {
                console.error(error);
            }

        }

        let [inpEditName,setInpEditname] = useState('')
        let [inpEditSelect,setInpEditSelect] = useState(null)
        let [editSubCategory] = useEditSubCategoryMutation()
        let [idx,setIdx] = useState(null)

        function openDialog(e) {
            setInpEditname(e.subCategoryName)
            setInpEditSelect(e.categoryId)
            setIdx(e.id)
        }

        async function handleEditSubCategory() {
            if (!inpEditName || !inpEditSelect) {
            alert("Заполните все поля для редактирования.");
            return;
            }
        
            try {
            let res = await editSubCategory({
                Id: idx,
                CategoryId: inpEditSelect,
                SubCategoryName: inpEditName
            }).unwrap();
        
            alert("✅ SubCategory успешно обновлен.");
            refetch();
            setInpEditname('');
            setInpEditSelect(null);
            setIdx(null);
            } catch (error) {
            console.error(error);
            alert("❌ Ошибка при обновлении.");
            }
        }
        


return (
    <>

        <div className='hidden sm:block'>
        <div className='w-[100%] flex items-start'>

                <div className='bg-[#1C2536] text-white w-[300px] p-[15px] h-[200vh] '>
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
                <Link to={'/products'} className='w-[100%] justify-around' >
                <div className='flex  text-[white]  items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
                    <SellIcon/>
                    <span className='font-[500] text-[17px]'>{t("Example.9")}</span>
                </div>
                </Link>
                <div className='flex bg-white text-[#5A607F] items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
                    <FolderOutlinedIcon/>
                    <span className='font-[500] text-[17px]'>{t("Example.10")}</span>
                </div>
            
                </div>
                </div>

        <div className='w-[80%] p-[20px]  h-[200vh] '>
        <div className='flex items-center gap-[25px]'>
                <Link to={'/other'}>
                    <span className='cursor-pointer text-[#262626] font-[500] text-[17px] '>{t("Example.95")}</span>
                </Link>
                    <Link to={'/brands'}>
                    <span className='text-[#262626]  cursor-pointer font-[500] text-[17px] '>{t("Example.96")}</span>
                    </Link>
                    <span  className=' bg-[#DBEAFE] text-[#1D4ED8]  cursor-pointer font-[500] text-[17px] py-[7px] rounded-md px-[20px]'>{t("Example.97")}</span>
                    
            </div>
            <div className='flex items-start justify-between'>
                <div className='w-[500px]  mt-[50px] p-[15px] flex flex-col items-start gap-[25px]'>
                    <h2 className={`font-[700] text-[22px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t('Example.103')}</h2>
                    <img src={image2} alt="" />
                <table className='w-[100%] mt-[20px]'>
                    <thead>
                        <tr className='bg-[#F5F5F5] text-[#5A607F] shadow rounded-md'>
                            <th className='py-[8px] text-start'>{t('Example.104')}</th>
                            <th  className='text-start'>{t('Example.105')}</th>
                            <th>{t('Example.106')}</th>
                        </tr>
                    </thead>
                    <tbody className='shadow rounded-md'>
                        {data && data.data.map((e) => {
                            return (
                                <tr>
                                    <td className='py-[15px] w-[120px]'><img src={image1} alt="" /></td>
                                    <td className={`font-[500] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.subCategoryName}</td>
                                    <td className='text-center flex justify-center items-center mt-[30px] gap-[25px]'>
                                    <EditIcon onClick={() => openDialog(e)} className='text-blue-600' />
                                    <DeleteIcon onClick={() => handleDelete(e.id)} className='text-red-600 cursor-pointer' />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='border border-[#acacac] flex flex-col items-start gap-[25px]  rounded-md p-[15px] w-[100%] mt-[20px]'>
                    <fieldset className='border rounded-md border-[#E5E5E5] w-[100%]'>
                        <legend className='ml-[25px] text-gray-400 font-[500]'>{t('Example.107')}</legend>
                        <input value={inpEditName} onChange={(e) => setInpEditname(e.target.value)} className='py-[8px] px-[10px] w-[100%]' type="text" placeholder={t('Example.108')} />
                    </fieldset>
                    <select  value={inpEditSelect?.toString()} onChange={(e) => setInpEditSelect(Number(e.target.value))} className='border w-[100%] border-[#E5E5E5] py-[12px] rounded-md px-[15px]'>
                        {Categories && Categories.data.map((e) => {
                            return (
                                <option key={e.id} value={e.id}>{e.categoryName}</option>
                            )
                        })}
                    </select>
                    {/* <fieldset className='border rounded-md border-[#E5E5E5] w-[100%]'>
                        <legend className='ml-[25px] text-gray-400 font-[500]'>{t('Example.109')}</legend>
                        <input  className='py-[8px] px-[10px] w-[100%]' type="text" placeholder={t('Example.110')} />
                    </fieldset> */}
                    <button onClick={handleEditSubCategory} className='bg-[#2563EB] rounded-md w-[30%] ml-[65%] text-white'>{t('Example.111')}</button>
                </div>
                </div>
                <div className='w-[485px] flex flex-col items-start gap-[25px] mt-[60px]  p-[10px]'>
                <h2 className={`font-[700] text-[22px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t('Example.113')}</h2>
                <img src={image2} alt="" />
                <table className='w-[100%] mt-[20px]'>
                    <thead>
                        <tr className='bg-[#F5F5F5] text-[#5A607F] shadow rounded-md'>
                            <th className='py-[8px] text-start'>{t('Example.104')}</th>
                            <th className='text-start'>{t('Example.105')}</th>
                            <th>{t('Example.106')}</th>
                        </tr>
                    </thead>
                    <tbody className='shadow rounded-md'>
                    <tr>
                        <td className='py-[15px] w-[120px]'><img src={image3} alt="" /></td>
                        <td className={`font-[500] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>Healthcare_Erbology.png</td>
                        <td className='text-center'><DeleteIcon className='text-red-600 cursor-pointer' /></td>
                    </tr>
                    </tbody>
                </table>
                <div className='border w-[100%] flex flex-col items-start gap-[25px] border-[#E5E5E5] p-[10px] rounded-md'>
                    <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" className='border w-[100%] border-[#E5E5E5] py-[12px] rounded-md px-[15px]' placeholder={t('Example.112')} />
                    <select value={select} onChange={(e) => setSelect(e.target.value)} className='border w-[100%] border-[#E5E5E5] py-[12px] rounded-md px-[15px]'>
                        {Categories && Categories.data.map((e) => {
                            return (
                                <option key={e.id} value={e.id}>{e.categoryName}</option>
                            )
                        })}
                    </select>
                    {/* <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" className='border w-[100%] border-[#E5E5E5] py-[12px] rounded-md px-[15px]' placeholder='ID' /> */}
                    <button onClick={addNewSub} className='bg-[#2563EB] rounded-md w-[30%] ml-[65%] text-white'>{t('Example.111')}</button>
                </div>
                </div>
            </div>
        </div>


        </div>
        </div>





        

        <div className='sm:hidden'>

        <div className='flex justify-around my-[25px] items-center gap-[25px]'>
                <Link to={'/other'}>
                    <span className='cursor-pointer text-[#262626] font-[500] text-[17px] '>{t("Example.95")}</span>
                </Link>
                    <Link to={'/brands'}>
                    <span className='text-[#262626]  cursor-pointer font-[500] text-[17px] '>{t("Example.96")}</span>
                    </Link>
                    <span  className=' bg-[#DBEAFE] text-[#1D4ED8]  cursor-pointer font-[500] text-[17px] py-[7px] rounded-md px-[20px]'>{t("Example.97")}</span>
                    
            </div>

            
            <div className='w-[98%]  mt-[50px] p-[15px] flex flex-col items-start gap-[25px]'>
                    <h2 className={`font-[700] text-[22px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t('Example.103')}</h2>
                    <img src={image2} alt="" />
                <table className='w-[100%] mt-[20px]'>
                    <thead>
                        <tr className='bg-[#F5F5F5] text-[#5A607F] shadow rounded-md'>
                            <th className='py-[8px] text-start'>{t('Example.104')}</th>
                            <th  className='text-start'>{t('Example.105')}</th>
                            <th>{t('Example.106')}</th>
                        </tr>
                    </thead>
                    <tbody className='shadow rounded-md'>
                        {data && data.data.map((e) => {
                            return (
                                <tr>
                                    <td className='py-[15px] w-[120px]'><img src={image1} alt="" /></td>
                                    <td className={`font-[500] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.subCategoryName}</td>
                                    <td className='text-center flex justify-center items-center mt-[30px] gap-[25px]'>
                                    <EditIcon onClick={() => openDialog(e)} className='text-blue-600' />
                                    <DeleteIcon onClick={() => handleDelete(e.id)} className='text-red-600 cursor-pointer' />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='border border-[#acacac] flex flex-col items-start gap-[25px]  rounded-md p-[15px] w-[100%] mt-[20px]'>
                    <fieldset className='border rounded-md border-[#E5E5E5] w-[100%]'>
                        <legend className='ml-[25px] text-gray-400 font-[500]'>{t('Example.107')}</legend>
                        <input value={inpEditName} onChange={(e) => setInpEditname(e.target.value)} className='py-[8px] px-[10px] w-[100%]' type="text" placeholder={t('Example.108')} />
                    </fieldset>
                    <select value={inpEditSelect} onChange={(e) => setInpEditSelect(e.target.value)} className='border w-[100%] border-[#E5E5E5] py-[12px] rounded-md px-[15px]'>
                        {Categories && Categories.data.map((e) => {
                            return (
                                <option key={e.id} value={e.id}>{e.categoryName}</option>
                            )
                        })}
                    </select>
                    {/* <fieldset className='border rounded-md border-[#E5E5E5] w-[100%]'>
                        <legend className='ml-[25px] text-gray-400 font-[500]'>{t('Example.109')}</legend>
                        <input  className='py-[8px] px-[10px] w-[100%]' type="text" placeholder={t('Example.110')} />
                    </fieldset> */}
                    <button className='bg-[#2563EB] rounded-md w-[30%] ml-[65%] text-white'>{t('Example.111')}</button>
                </div>
                </div>
                

                <div className='w-[98%] flex flex-col items-start gap-[25px] mt-[60px]  p-[10px]'>
                <h2 className={`font-[700] text-[22px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t('Example.113')}</h2>
                <img src={image2} alt="" />
                <table className='w-[100%] mt-[20px]'>
                    <thead>
                        <tr className='bg-[#F5F5F5] text-[#5A607F] shadow rounded-md'>
                            <th className='py-[8px] text-start'>{t('Example.104')}</th>
                            <th className='text-start'>{t('Example.105')}</th>
                            <th>{t('Example.106')}</th>
                        </tr>
                    </thead>
                    <tbody className='shadow rounded-md'>
                    <tr>
                        <td className='py-[15px] w-[120px]'><img src={image3} alt="" /></td>
                        <td className={`font-[500] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>Healthcare_Erbology.png</td>
                        <td className='text-center'><DeleteIcon className='text-red-600 cursor-pointer' /></td>
                    </tr>
                    </tbody>
                </table>
                <div className='border w-[100%] flex flex-col items-start gap-[25px] border-[#E5E5E5] p-[10px] rounded-md'>
                    <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" className='border w-[100%] border-[#E5E5E5] py-[12px] rounded-md px-[15px]' placeholder={t('Example.112')} />
                    <select value={select} onChange={(e) => setSelect(e.target.value)} className='border w-[100%] border-[#E5E5E5] py-[12px] rounded-md px-[15px]'>
                        {Categories && Categories.data.map((e) => {
                            return (
                                <option key={e.id} value={e.id}>{e.categoryName}</option>
                            )
                        })}
                    </select>
                    {/* <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" className='border w-[100%] border-[#E5E5E5] py-[12px] rounded-md px-[15px]' placeholder='ID' /> */}
                    <button onClick={addNewSub} className='bg-[#2563EB] rounded-md w-[30%] ml-[65%] text-white'>{t('Example.111')}</button>
                </div>
                </div>
            
        </div>




    </>
)
}

export default React.memo(SubCategory)