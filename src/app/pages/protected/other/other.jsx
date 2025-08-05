import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SellIcon from '@mui/icons-material/Sell';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useTranslation } from 'react-i18next';
import { Link, useOutletContext } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import { useAddCategoryMutation, useDeleteCategoriesMutation, useEditCategoryMutation, useGetCategoriesQuery } from '../../../../features/services/userApi';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Modal } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Other = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    let [inpName,setInpName] = useState('')
    let [inpImage,setInpImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null);
    let [addNewCategory] = useAddCategoryMutation()


    const draggerProps = {
        name: 'file',
        multiple: false,
        beforeUpload: (file) => {
            setInpImage(file); 
            setImagePreview(URL.createObjectURL(file)); 
            return false;
        },
        onDrop: (e) => {
        console.log('Dropped files', e.dataTransfer.files);
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = async (event) => {
        event.preventDefault()
        if (!inpName || !inpImage) {
            message.error('Пожалуйста, укажите свое имя и фотографию..');
            return;
        }
        const formData = new FormData();
        formData.append('CategoryName', inpName);
        formData.append('CategoryImage', inpImage);
        try {
            await addNewCategory(formData).unwrap();
            message.success('Категория успешно добавлена! ✅');
            refetch(); 
            setIsModalOpen(false);
            setInpName('');
            setInpImage(null);
            setImagePreview(null);
        } catch (error) {
            console.error("Error adding category:", error);
            alert('Ошибка добавления категории ❌');
        }
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

        const {t, i18n} = useTranslation();
        function TranslateClick(lang) {
            i18n.changeLanguage(lang);
        }

        const { theme } = useOutletContext();

        let {data, refetch} = useGetCategoriesQuery()
        // console.log(data);

        let [deleteCategory] = useDeleteCategoriesMutation()

        let CategoryDelete = async (id) => {
            try {
                let res = await deleteCategory(id).unwrap()
                refetch()
                console.log('delete category', res);
            } catch (error) {
                console.error('Error deleting category:', error);
            }
        }

        const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
        const [selectedCategoryId, setSelectedCategoryId] = useState(null);
        let [editCategory] = useEditCategoryMutation()
        const showDeleteModal = () => {
        setIsDeleteModalOpen(true);
        };
        const handleDeleteOk = async (id) => {
            try {
                let res = await deleteCategory(id).unwrap()
                refetch()
                setIsDeleteModalOpen(false);
                console.log('delete category', res);
            } catch (error) {
                console.error('Error deleting category:', error);
            }
        };
        const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
        };


        const [isEditModalOpen, setIsEditModalOpen] = useState(false);
        let [editName,setEditName] = useState('')
        let [idx,setIdx] = useState(null)
        const showEditModal = () => {
        setIsEditModalOpen(true);
        };
        const handleEditOk = async (event) => {
            event.preventDefault()
            if (!editName || !inpImage) {
                alert('Пожалуйста, введите новое имя и фотографию.');
                return;
            }
            const formData = new FormData();
            formData.append('Id', idx);
            formData.append('CategoryName', editName);
            formData.append('CategoryImage', inpImage);

            try {
                await editCategory(formData).unwrap();
                alert('Категория исправлена! ✅');
                refetch();
                setIsEditModalOpen(false);
                setEditName('');
                setIdx(null);
                setInpImage(null);
                setImagePreview(null);
            } catch (error) {
                console.error('Error editing category:', error);
                alert('Ошибка при редактировании ❌');
            }

        };
        const handleEditCancel = () => {
        setIsEditModalOpen(false);
        };
        
        function openDialog(e) {
            showEditModal()
            setEditName(e.categoryName)
            setIdx(e.id)
            setImagePreview(`https://store-api.softclub.tj/images/${e.categoryImage}`);
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
        <input value={editName} onChange={(e) => setEditName(e.target.value)} type="text" className='border w-[95%] py-[11px] rounded-md px-[20px] font-[600] my-[25px]' />
        <Dragger {...draggerProps}>
        <p className="ant-upload-drag-icon"><InboxOutlined /></p>
        <p className="ant-upload-text">Click or drag to upload image</p>
        {imagePreview && <img src={imagePreview} alt="preview" className="w-[200px] h-[200px] mt-4 m-auto" />}
    </Dragger>
    </Modal>


    <div className='hidden sm:block'>

    

    <div className='w-[100%] flex items-start'>

    <div className='bg-[#1C2536] text-white w-[300px] p-[15px] h-[165vh] '>
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

    <div className='w-[80%]  p-[20px] m-auto h-[165vh]'>

    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[25px]'>
            <span className='bg-[#DBEAFE] cursor-pointer text-[#1D4ED8] font-[500] text-[17px] py-[7px] rounded-md px-[20px]'>{t("Example.95")}</span>
            <Link to={'/brands'}>
            <span className='text-[#262626] cursor-pointer font-[500] text-[17px]'>{t("Example.96")}</span>
            </Link>
            <Link to={'/subCategory'}>
            <span  className='text-[#262626] cursor-pointer font-[500] text-[17px]'>{t("Example.97")}</span>
            </Link>
        </div>

    <button type="primary" onClick={showModal} className={`font-[600] text-[17px]  rounded-md bg-[#2563EB]  ${theme == 'dark' ? 'text-white' : 'text-[white]'}`}>+ {t("Example.98")}</button>
    <Modal
        title="Add category"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
    >
        <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" className='border w-[95%] py-[11px] rounded-md px-[20px] font-[600] my-[25px]' placeholder='Category name' />
        <Dragger {...draggerProps}>
    <p className="ant-upload-drag-icon">
    <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
    JPG/PNG only — 1 file.
    </p>
    {imagePreview && (
    <img 
    src={imagePreview} 
    alt="Preview" 
    style={{ marginTop: 16, maxWidth: '200px', maxHeight: '200px', borderRadius: 8, margin : 'auto' }} 
/>
)}
</Dragger>
    </Modal>
    </div>

            <div className='border mt-[40px] border-[#E5E5E5] w-[250px] py-[12px]  font-[500] rounded-md px-[10px]'>
                <input className={`font-[600] text-[16px] border-none outline-none ${theme == 'dark' ? 'text-black' : 'text-[#5A607F]'}`} type="text" placeholder={t("Example.41")} />
                <SearchIcon className='text-[#737373] font-bold' />
            </div>

            <div  className='mt-[40px] flex flex-wrap justify-between gap-[45px]'>
                {data && data.data.map((e) => {
                    return (
                        <div key={e.id} className='border relative border-[#0000004D] rounded-md w-[200px] h-[150px] flex flex-col justify-around p-[10px]'>
                            <div className='absolute flex flex-col items-center gap-[10px] ml-[75%] bottom-[45%]'>
                                <DeleteIcon   onClick={() => {setSelectedCategoryId(e.id);  showDeleteModal();}} className='text-red-600 cursor-pointer font-bold' />
                                <EditIcon onClick={() => openDialog(e)} className='text-blue-600  cursor-pointer font-bold' />
                            </div>
                            <img className='w-[56px] h-[56px]' src={`https://store-api.softclub.tj/images/${e.categoryImage}`} alt="" />
                            <h1>{e.categoryName}</h1>
                        </div>
                    )   
                })}
            </div>

                    <div className='flex items-center justify-between mt-[80px]'>
                    <div>
                    <Stack spacing={2}>
                <Pagination count={24} color="primary" />
                </Stack>
                    </div>
                    <p  className={`font-[700] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#5A607F]'}`}>{t("Example.55")}</p>
                </div>

    </div>

    <Modal
        title="Delete Items"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isDeleteModalOpen}
        onOk={() => handleDeleteOk(selectedCategoryId)}
        onCancel={handleDeleteCancel}
    >
        <h2 className='text-[#131523] font-[500] text-[17px]'>Are you sure you want to delete  select item?</h2>
    </Modal>


    </div>

    </div>







    <div className='sm:hidden'>
        
    <div className='w-[100%] m-auto'>

    <div className='flex flex-wrap m-auto w-[100%] gap-[45px] mt-[30px] items-center justify-between'>
        <div className='flex w-[100%] m-auto items-center justify-around'>
            <span className='bg-[#DBEAFE] cursor-pointer text-[#1D4ED8] font-[500] text-[17px] py-[7px] rounded-md px-[20px]'>{t("Example.95")}</span>
            <Link to={'/brands'}>
            <span className='text-[#262626] cursor-pointer font-[500] text-[17px]'>{t("Example.96")}</span>
            </Link>
            <Link to={'/subCategory'}>
            <span  className='text-[#262626] cursor-pointer font-[500] text-[17px]'>{t("Example.97")}</span>
            </Link>
        </div>

    <button type="primary" onClick={showModal} className={`font-[600] text-[17px] m-auto  rounded-md bg-[#2563EB]  ${theme == 'dark' ? 'text-white' : 'text-[white]'}`}>+ {t("Example.98")}</button>
    <Modal
        title="Add category"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
    >
        <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" className='border w-[95%] py-[11px] rounded-md px-[20px] font-[600] my-[25px]' placeholder='Category name' />
        <Dragger {...draggerProps}>
    <p className="ant-upload-drag-icon">
    <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
    JPG/PNG only — 1 file.
    </p>
    {imagePreview && (
    <img 
    src={imagePreview} 
    alt="Preview" 
    style={{ marginTop: 16, maxWidth: '200px', maxHeight: '200px', borderRadius: 8, margin : 'auto' }} 
/>
)}
</Dragger>
    </Modal>
    </div>

    <div  className='mt-[40px] p-[25px] flex flex-wrap justify-between gap-[45px]'>
                {data && data.data.map((e) => {
                    return (
                        <div key={e.id} className='border relative border-[#0000004D] rounded-md w-[40%] h-[150px] flex flex-col justify-around p-[10px]'>
                            <div className='absolute flex flex-col items-center gap-[10px] ml-[75%] bottom-[45%]'>
                                <DeleteIcon   onClick={() => {setSelectedCategoryId(e.id);  showDeleteModal();}} className='text-red-600 cursor-pointer font-bold' />
                                <EditIcon onClick={() => openDialog(e)} className='text-blue-600  cursor-pointer font-bold' />
                            </div>
                            <img className='w-[56px] h-[56px]' src={`https://store-api.softclub.tj/images/${e.categoryImage}`} alt="" />
                            <h1>{e.categoryName}</h1>
                        </div>
                    )   
                })}
            </div>

    </div>






    </div>

    </>
)
}

export default React.memo(Other)