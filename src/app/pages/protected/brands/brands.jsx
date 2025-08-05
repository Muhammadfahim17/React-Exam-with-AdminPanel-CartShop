import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SellIcon from '@mui/icons-material/Sell';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useTranslation } from 'react-i18next';
import { Link, useOutletContext } from 'react-router';
import { useAddBrandsMutation, useDeleteBrandsMutation, useEditBrandMutation, useGetBrandsQuery } from '../../../../features/services/userApi';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Modal } from 'antd';



const Brands = () => {

        const {t, i18n} = useTranslation();
        function TranslateClick(lang) {
            i18n.changeLanguage(lang);
        }

        const { theme } = useOutletContext();

        let {data,refetch} = useGetBrandsQuery()
        // console.log(data);

        let [addNewBrands] = useAddBrandsMutation()
        let [inpName,setInpName] = useState('')
        let [deleteBrand] = useDeleteBrandsMutation()

        let addBrand = async (event) => {
            event.preventDefault()
            if (!inpName.trim()) {
                alert('Введите название бренда!');
                return;
            }
            try {
                const response = await addNewBrands(inpName).unwrap();
                refetch()
                console.log('Бренд добавлен : ', response);
                alert('Бренд успешно добавлен. ! ✅');
                setInpName('');
            } catch (error) {
                console.error('❌ Хатои илова:', error);
                alert('❌ Ошибка добавления бренда.');
            }
        }

        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedCategoryId, setSelectedCategoryId] = useState(null);

        const showModal = () => {
        setIsModalOpen(true);
        };
    
        const handleOk = async (id) => {
            try {
                let res = await deleteBrand(id).unwrap()
                refetch()
                setIsModalOpen(false);
                console.log('delete category', res);
            } catch (error) {
                console.error('Error deleting category:', error);
            }
        };
    
        const handleCancel = () => {
        setIsModalOpen(false);
        };

        const [isEditModalOpen, setIsEditModalOpen] = useState(false);
        let [idx,setIdx] = useState(null)
        let [inpEditName,setInpEditName] = useState('')
        let [Idx2,setIdx2] = useState(null)
        let [editBrand] = useEditBrandMutation()

        const showEditModal = () => {
        setIsEditModalOpen(true);
        };
    
        const handleEditOk = async () => {
        try {
            let res = await editBrand({id :idx, name : inpEditName})
            alert('Бренд успешно изменен.! ✅');
            refetch()
            setIsEditModalOpen(false)
            console.log('edit brands', res);
        } catch (error) {
            console.error(error);
        }
        };
    
        const handleEditCancel = () => {
        setIsEditModalOpen(false);
        };

        function openDialog(e) {
            showEditModal()
            setInpEditName(e.brandName)
            setIdx(e.id)
        }


    

return (
    <>

    <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isEditModalOpen}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
    >   
        <div className='flex flex-col items-center gap-[25px]'>
        <input type="text" className='border rounded-md px-[15px] p-[7px] w-[80%]' placeholder='Id' value={idx} onChange={(e) => setIdx(e.target.value)} />
        <input type="text" className='border rounded-md px-[15px] p-[7px] w-[80%]' placeholder='Name' value={inpEditName} onChange={(e) => setInpEditName(e.target.value)} />
        </div>
    </Modal>


    <Modal
        title="Elemente löschen"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={() => handleOk(selectedCategoryId)}
        onCancel={handleCancel}
    >
        <h2>Möchten Sie diese Marke wirklich aus der Liste entfernen?</h2>
    </Modal>


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

    <div className='w-[80%] m-auto border p-[20px] h-[160vh]'>

    <div className='flex items-center gap-[25px]'>
        <Link to={'/other'}>
            <span className='cursor-pointer text-[#262626] font-[500] text-[17px] '>{t("Example.95")}</span>
        </Link>
            
            <span className=' bg-[#DBEAFE] text-[#1D4ED8]  cursor-pointer font-[500] text-[17px] py-[7px] rounded-md px-[20px]'>{t("Example.96")}</span>
            <Link to={'/subCategory'}>
            <span  className='text-[#262626] cursor-pointer font-[500] text-[17px]'>{t("Example.97")}</span>
            </Link>
    </div>

    <div className=' mt-[55px] flex items-start justify-between'>
        <div className=' p-[10px] w-[450px]'>
        <table className='w-[100%]'>
            <thead>
                <tr className='text-[#5A607F]'>
                    <th className='text-start pb-[15px]'>{t('Example.99')}</th>
                    <th className='text-center pb-[15px]'>{t('Example.62')}</th>
                </tr>
            </thead>
            <tbody>
                {data && data.data.map((e) => {
                    return (
                        <tr className='border-t-2 border-b-2 border-[#E6E9F4] '>
                            <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.brandName}</td>
                            <td className='text-center '>
                                <div className='flex items-center justify-center gap-[15px]'>
                                    <EditIcon onClick={() => openDialog(e)} className='text-[#1E5EFF] cursor-pointer' />
                                    <DeleteIcon  type="primary" onClick={() => {setSelectedCategoryId(e.id);  showModal();}}  className='text-[#F04438] cursor-pointer' />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>

        <div className='border p-[20px] w-[540px] flex flex-col items-start gap-[35px] rounded-md border-[#E5E5E5]'>
        <h1 className={`font-[700] text-[20px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.100")}</h1>
        <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder={t("Example.101")} className='border w-[100%] rounded-md py-[12px] px-[15px] border-[#E5E5E5]' />
        <button onClick={addBrand} className='bg-[#2563EB] text-white rounded-md ml-[77%]'>{t("Example.102")}</button>
        </div>
    </div>

    </div>

        </div>

        </div>









        <div className='sm:hidden'>
        <div className='w-[100%] m-auto'>
        <div className='flex items-center mt-[20px] justify-around gap-[25px]'>
        <Link to={'/other'}>
            <span className='cursor-pointer text-[#262626] font-[500] text-[17px] '>{t("Example.95")}</span>
        </Link>
            
            <span className=' bg-[#DBEAFE] text-[#1D4ED8]  cursor-pointer font-[500] text-[17px] py-[7px] rounded-md px-[20px]'>{t("Example.96")}</span>
            <Link to={'/subCategory'}>
            <span  className='text-[#262626] cursor-pointer font-[500] text-[17px]'>{t("Example.97")}</span>
            </Link>
    </div>
        </div>

        <div className=' p-[10px] w-[98%] m-auto mt-[45px]'>
        <table className='w-[100%]'>
            <thead>
                <tr className='text-[#5A607F]'>
                    <th className='text-start pb-[15px]'>{t('Example.99')}</th>
                    <th className='text-center pb-[15px]'>{t('Example.62')}</th>
                </tr>
            </thead>
            <tbody>
                {data && data.data.map((e) => {
                    return (
                        <tr className='border-t-2 border-b-2 border-[#E6E9F4] '>
                            <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.brandName}</td>
                            <td className='text-center '>
                                <div className='flex items-center justify-center gap-[15px]'>
                                    <EditIcon onClick={() => openDialog(e)} className='text-[#1E5EFF] cursor-pointer' />
                                    <DeleteIcon  type="primary" onClick={() => {setSelectedCategoryId(e.id);  showModal();}}  className='text-[#F04438] cursor-pointer' />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>

        <div className='border p-[20px] my-[40px] w-[98%] m-auto flex flex-col items-start gap-[35px] rounded-md border-[#E5E5E5]'>
        <h1 className={`font-[700] text-[20px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.100")}</h1>
        <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder={t("Example.101")} className='border w-[100%] rounded-md py-[12px] px-[15px] border-[#E5E5E5]' />
        <button onClick={addBrand} className='bg-[#2563EB] text-white rounded-md ml-[70%]'>{t("Example.102")}</button>
        </div>

        </div>


    </>
  )
}

export default React.memo(Brands)