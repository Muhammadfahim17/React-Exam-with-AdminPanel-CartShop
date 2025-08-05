import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SellIcon from '@mui/icons-material/Sell';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useTranslation } from 'react-i18next';
import { Link, useOutletContext } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Orders = () => {

        const {t, i18n} = useTranslation();
        function TranslateClick(lang) {
            i18n.changeLanguage(lang);
        }

        const { theme } = useOutletContext();

        let dataUser = ([
            {
                des : "#12512B",
                date : "May 5, 4:20 PM",
                name : "Tom Anderson",
                status : t("Example.50"),
                order : t("Example.52"),
                price : "$49.90",
                id : "1"
            },
            {
                des : "#12523C",
                date : "May 5, 4:15 PM",
                name : "Jayden Walker",
                status : t("Example.50"),
                order : t("Example.52"),
                price : "$34.36",
                id : "2"
            },
            {
                des : "#51232A",
                date : "May 5, 4:15 PM",
                name : "Inez Kim",
                status : t("Example.50"),
                order : t("Example.52"),
                price : "$5.51",
                id : "3"
            },
            {
                des : "#23534D",
                date : "May 5, 4:12 PM",
                name : "Francisco Henry",
                status : t("Example.50"),
                order : t("Example.53"),
                price : "$29.74",
                id : "4"
            },
            {
                des : "#51323C",
                date : "May 5, 4:12 PM",
                name : "Violet Phillips",
                status : t("Example.50"),
                order : t("Example.53"),
                price : "$23.06",
                id : "5"
            },
            {
                des : "#35622A",
                date : "May 5, 4:12 PM",
                name : "Rosetta Becker",
                status : t("Example.50"),
                order : t("Example.53"),
                price : "$87.44",
                id : "6"
            },
            {
                des : "#34232D",
                date : "May 5, 4:10 PM",
                name : "Dean Love",
                status : t("Example.50"),
                order : t("Example.52"),
                price : "$44.55",
                id : "7"
            },
            {
                des : "#56212D",
                date : "May 5, 4:08 PM",
                name : "Nettie Tyler",
                status : t("Example.50"),
                order : t("Example.52"),
                price : "$36.79",
                id : "8"
            },
            {
                des : "#23534D",
                date : "May 5, 4:04 PM",
                name : "Miguel Harris",
                status : t("Example.51"),
                order : t("Example.52"),
                price : "$50.54",
                id : "9"
            },
            {
                des : "#12523C",
                date : "May 5, 4:04 PM",
                name : "Angel Conner",
                status : t("Example.51"),
                order : t("Example.52"),
                price : "$63.47",
                id : "10"
            },
            {
                des : "#51232A",
                date : "May 5, 4:03 PM",
                name : "Rosalie Singleton",
                status : t("Example.51"),
                order : t("Example.54"),
                price : "$91.63",
                id : "11"
            }
        ])



return (
    <>



    <div className='hidden sm:block'>
    <div className='w-[100%] flex items-start '>

    <div className='bg-[#1C2536] text-white w-[300px] p-[15px] h-[140vh] '>
    <div className='w-[260px] p-[5px] m-auto  mt-[20px] flex flex-col items-start h-[220px] justify-around'>
        <Link to={'/dashboard'} className='w-[100%] justify-around'>
    <div className='flex items-center w-[100%]   justify-between hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
        <HomeIcon/>
        <span className='font-[500] text-[17px]'>{t("Example.7")}</span>
    </div>
        </Link>
    <div className='flex bg-white text-[#5A607F] items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
        <ViewListRoundedIcon/>
        <span className='font-[500] text-[17px]'>{t("Example.8")}</span>
    </div>
    <Link to={'/products'} className='w-[100%] justify-around'>
    <div className='flex items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
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

    <div className=' w-[80%] m-auto p-[25px] h-[140vh]'>
    <div className='flex items-center justify-between'>
        <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.39")}</h1>
        <button className={`font-[600] text-[17px]  rounded-md bg-[#2563EB]  ${theme == 'dark' ? 'text-white' : 'text-[white]'}`}>+ {t("Example.40")}</button>
    </div>
    <div className='mt-[25px] flex items-center justify-between'>
        
        <div className='flex items-center gap-[20px]'>
        <div className='border border-[#E5E5E5] py-[12px]  font-[500] rounded-md px-[10px]'>
            <input className={`font-[600] text-[16px] border-none outline-none ${theme == 'dark' ? 'text-black' : 'text-[#5A607F]'}`} type="text" placeholder={t("Example.41")} />
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
    <div>

    </div>

    <table className='w-[100%] mt-[35px]'>
        <thead>
            <tr className='text-[#5A607F] shadow'>
                <th className='text-start pb-[7px]'><input type="checkbox" /> {t("Example.44")}  </th>
                <th className='text-start pb-[7px]'>{t("Example.45")}</th>
                <th className='text-start pb-[7px]'>{t("Example.46")}</th>
                <th className='text-start pb-[7px]'>{t("Example.47")}</th>
                <th className='text-start pb-[7px] '>{t("Example.48")}</th>
                <th className='text-center pb-[7px] '>{t("Example.49")}</th>
            </tr>
        </thead>
        <tbody>
            {dataUser.map((e) => {
                return (
                    <tr className='border-b-2 border-[#eeeeee]'>
                        <td>
                        <div className='flex items-center gap-[8px]'>
                            <input type="checkbox" />
                            <span  className={`font-[700] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.des}</span>
                        </div>
                        </td>
                        <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.date}</td>
                        <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.name}</td>
                        <td className={`font-[500] flex flex-col items-center w-[130px] py-[5px] mt-[10px]  text-center rounded-md   ${theme == 'dark' ? 'text-[#06A561] ' : 'text-[#111927] '} ${e.status === t("Example.26") ? 'bg-[#C4F8E2] ' : e.status === t("Example.27") ? 'bg-[#E6E9F4]' : ''}`  }>{e.status}</td>
                        <td className={`font-[500] w-[100px]   items-center py-[5px] mt-[10px]  text-center rounded-md   ${theme == 'dark' ? 'text-[#06A561] ' : 'text-[#111927] '} ${e.status === t("Example.") ? 'bg-[#C4F8E2]' : e.status === t("Example.53") ? 'bg-[#E6E9F4]' : ''}`  }>{e.order}</td>
                        <td className={`font-[500] text-[16px] py-[15px] pl-[70px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.price}</td>
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

            <div className='w-[100%] p-[15px]'>
            <div className='flex items-center justify-between'>
        <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.39")}</h1>
        <button className={`font-[600] text-[17px]  rounded-md bg-[#2563EB]  ${theme == 'dark' ? 'text-white' : 'text-[white]'}`}>+ Add Order</button>
    </div>
    <div className='mt-[25px] flex flex-col items-center justify-between'>
        
        <div className='flex w-[95%] flex-col items-center gap-[20px]'>
        <div className='border w-[98%] border-[#E5E5E5] py-[12px] flex items-center justify-around font-[500] rounded-md px-[10px]'>
            <input className={`font-[600] text-[16px] border-none outline-none ${theme == 'dark' ? 'text-black' : 'text-[#5A607F]'}`} type="text" placeholder={t("Example.41")} />
            <SearchIcon className='text-[#737373] font-bold' />
        </div>
        <div className='border-[#E5E5E5] w-[95%] pb-[10px]'>
            <fieldset className='border flex items-center justify-around  border-[#E5E5E5] px-[15px] py-[5px] rounded-md'>
                <legend className='text-[#737373]'>{t("Example.42")} </legend>
                <input className={`font-[600] text-[16px] border-none outline-none ${theme == 'dark' ? 'text-black' : 'text-[#5A607F]'}`} type="text" placeholder={t("Example.43")}  />
                <p><KeyboardArrowDownIcon/></p>
            </fieldset>
        </div>
        </div>

    

    </div>
            </div>



            <table className='w-[100%] mt-[35px] mb-[50px]'>
        <thead>
            <tr className='text-[#5A607F] shadow'>
                <th className='text-start pb-[7px]'><input type="checkbox" /> {t("Example.44")}  </th>
                {/* <th className='text-start pb-[7px]'>{t("Example.45")}</th> */}
                <th className='text-start pb-[7px]'>{t("Example.46")}</th>
                {/* <th className='text-start pb-[7px]'>{t("Example.47")}</th> */}
                {/* <th className='text-start pb-[7px] '>{t("Example.48")}</th> */}
                <th className='text-center pb-[7px] '>{t("Example.49")}</th>
            </tr>
        </thead>
        <tbody>
            {dataUser.map((e) => {
                return (
                    <tr className='border-b-2 border-[#eeeeee]'>
                        <td>
                        <div className='flex items-center gap-[8px]'>
                            <input type="checkbox" />
                            <span  className={`font-[700] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.des}</span>
                        </div>
                        </td>
                        {/* <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.date}</td> */}
                        <td className={`font-[500] text-[16px] py-[15px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.name}</td>
                        {/* <td className={`font-[500] flex flex-col items-center w-[130px] py-[5px] mt-[10px]  text-center rounded-md   ${theme == 'dark' ? 'text-[#06A561] ' : 'text-[#111927] '} ${e.status === t("Example.26") ? 'bg-[#C4F8E2] ' : e.status === t("Example.27") ? 'bg-[#E6E9F4]' : ''}`  }>{e.status}</td> */}
                        {/* <td className={`font-[500] w-[100px]   items-center py-[5px] mt-[10px]  text-center rounded-md   ${theme == 'dark' ? 'text-[#06A561] ' : 'text-[#111927] '} ${e.status === t("Example.") ? 'bg-[#C4F8E2]' : e.status === t("Example.53") ? 'bg-[#E6E9F4]' : ''}`  }>{e.order}</td> */}
                        <td className={`font-[500] text-[16px] py-[15px] pl-[70px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.price}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>


    </div>

    </>
  )
}

export default React.memo(Orders)