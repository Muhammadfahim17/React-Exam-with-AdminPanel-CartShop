import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SellIcon from '@mui/icons-material/Sell';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import image1 from '../../../../shared/images/div.MuiBox-root (2).png'
import image2 from '../../../../shared/images/div.MuiBox-root.png'
import image3 from '../../../../shared/images/iconly-glass-discount.svg.png'
import image4 from '../../../../shared/images/div.MuiBox-root (3).png'
import image5 from '../../../../shared/images/Image (69).png'
import image6 from '../../../../shared/images/Image (70).png'
import image7 from '../../../../shared/images/Image (71).png'
import image8 from '../../../../shared/images/Image (72).png'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Link, useOutletContext } from 'react-router';



const Dashboard = () => {

    const {t, i18n} = useTranslation();
      function TranslateClick(lang) {
          i18n.changeLanguage(lang);
    }

    const data = [
      { name: 'Jan', orders: 10 },
      { name: 'Feb', orders: 5 },
      { name: 'Mar', orders: 9 },
      { name: 'Apr', orders: 22 },
      { name: 'May', orders: 33, tooltip: "864 Orders" },
      { name: 'Jun', orders: 30 },
      { name: 'Jul', orders: 35 },
      { name: 'Aug', orders: 50 },
      { name: 'Sep', orders: 44 },
      { name: 'Oct', orders: 25 },
      { name: 'Nov', orders: 27 },
      { name: 'Dec', orders: 32 }
    ];

    const { theme } = useOutletContext();


    let dataUsers = ([
      {
        name : "Jagarnath S.",
        date : "24.05.2023",
        price : "$124.97",
        status : t("Example.26"),
        id : "1"
      },
      {
        name : "Anand G.",
        date : "23.05.2023",
        price : "$55.42",
        status : t("Example.27"),
        id : "2"
      },
      {
        name : "Kartik S.",
        date : "23.05.2023",
        price : "$89.90",
        status : t("Example.26"),
        id : "3"
      },

      {
        name : "Rakesh S.",
        date : "22.05.2023",
        price : "$144.94",
        status : t("Example.27"),
        id : "4"
      },
      {
        name : "Anup S..",
        date : "22.05.2023",
        price : "$70.52",
        status : t("Example.26"),
        id : "5"
      },
      {
        name : "Jimmy P.",
        date : "22.05.2023",
        price : "$70.52",
        status : t("Example.26"),
        id : "6"
      }
    ])

    let dataProducts = ([
      {
        img : image5,
        name : t("Example.32"),
        price : "$49.90",
        des : "204",
        id : "1"
      },
      {
        img : image6,
        name : t("Example.33"),
        price : "$34.90",
        des : "155",
        id : "2"
      },
      {
        img : image7,
        name : t("Example.34"),
        price : "$40.90",
        des : "120",
        id : "3"
      },
      {
        img : image5,
        name : t("Example.35"),
        price : "$49.90",
        des : "204",
        id : "4"
      },
      {
        img : image8,
        name : t("Example.36"),
        price : "$34.90",
        des : "155",
        id : "5"
      }
    ])

  return (
    <>




      <div className='hidden sm:block'>
      <div className='w-[100%] flex items-start'>

      <div className='bg-[#1C2536] text-white w-[300px] p-[15px] h-[140vh] '>
      <div className='w-[260px] p-[5px] m-auto  mt-[20px] flex flex-col items-start h-[220px] justify-around'>
      <div className='flex items-center w-[100%] bg-white text-[#5A607F] justify-between hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
        <HomeIcon/>
        <span className='font-[500] text-[17px]'>{t("Example.7")}</span>
      </div>
      <Link to={'/orders'} className='flex items-center justify-between w-[100%]'>
      <div className='flex items-center w-[100%] justify-between  hover:bg-white hover:text-[#5A607F] cursor-pointer py-[10px] rounded-md px-[5px]'>
        <ViewListRoundedIcon/>
        <span className='font-[500] text-[17px]'>{t("Example.8")}</span>
      </div>
      </Link>
      <Link to={'/products'} className='flex items-center justify-between w-[100%]'>
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

      <div className='w-[80%]  p-[25px] m-auto h-[140vh]'>

      <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.11")}</h1>
      <div className=' mt-[35px] flex items-start justify-between'>

      <div className='w-[63%] flex flex-col gap-[25px] '>
        <div className='flex items-center justify-between'>
        <div className='bg-[#FEF3F2] w-[200px] p-[10px] rounded-md flex items-center justify-around'>
          <img src={image2} alt="" />
          <div className='flex flex-col items-start gap-[5px]'>
            <span className='text-[#6C737F] font-[500]'>{t("Example.12")}</span>
            <span className='text-[#111927] font-[700] text-[24px]'>$152k</span>
          </div>
        </div>
        <div className='bg-[#FFFAEB] w-[200px] p-[10px] rounded-md flex items-center justify-around'>
          <img src={image3} alt="" />
          <div className='flex flex-col items-start gap-[5px]'>
            <span className='text-[#6C737F] font-[500]'>{t("Example.13")}</span>
            <span className='text-[#111927] font-[700] text-[24px]'>$99.7k</span>
          </div>
        </div>
        <div className='bg-[#F0FDF9] w-[200px] p-[10px] rounded-md flex items-center justify-around'>
          <img src={image4} alt="" />
          <div className='flex flex-col items-start gap-[5px]'>
            <span className='text-[#6C737F] font-[500]'>{t("Example.14")}</span>
            <span className='text-[#111927] font-[700] text-[24px]'>$32.1k</span>
          </div>
        </div>
        </div>
        <div className="w-full h-80">
      <h2 className="font-semibold text-lg mb-4">{t("Example.20")}</h2>
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value, name, props) => [`${value} Orders`, '']} />
          <Line type="monotone" dataKey="orders" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
      </div>

      <div className='w-[35%] rounded-md shadow p-[10px] flex flex-col h-[60vh] justify-around'>
      <div className='flex items-center justify-between'>
        <h3 className={`font-[700] text-[17px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.15")}</h3>
        <div className='flex items-center gap-[8px] cursor-pointer'>
        <span className={`font-[700] text-[16px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.16")}</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></button>
        </div>
      </div>
      <div className='flex justify-between p-[5px]'>
        <img src={image1} alt="" />
        <div className='flex flex-col items-start gap-[4px]'>
          <span className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.17")}</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.18")}</span>
        </div>
        <div className='flex flex-col items-start gap-[4px]'>
          <span className='text-[#10B981] font-bold'>13,153</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.19")}</span>
        </div>
      </div>
      <div className='flex justify-between p-[5px]'>
        <img src={image1} alt="" />
        <div className='flex flex-col items-start gap-[4px]'>
          <span className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.17")}</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.18")}</span>
        </div>
        <div className='flex flex-col items-start gap-[4px]'>
          <span className='text-[#10B981] font-bold'>13,153</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.19")}</span>
        </div>
      </div>
      <div className='flex justify-between p-[5px]'>
        <img src={image1} alt="" />
        <div className='flex flex-col items-start gap-[4px]'>
          <span className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.17")}</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.18")}</span>
        </div>
        <div className='flex flex-col items-start gap-[4px]'>
          <span className='text-[#10B981] font-bold'>13,153</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.19")}</span>
        </div>
      </div>
      <div className='flex justify-between p-[5px]'>
        <img src={image1} alt="" />
        <div className='flex flex-col items-start gap-[4px]'>
          <span className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.17")}</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.18")}</span>
        </div>
        <div className='flex flex-col items-start gap-[4px]'>
          <span className='text-[#10B981] font-bold'>13,153</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.19")}</span>
        </div>
      </div>
      <div className='flex justify-between p-[5px]'>
        <img src={image1} alt="" />
        <div className='flex flex-col items-start gap-[4px]'>
          <span className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.17")}</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.18")}</span>
        </div>
        <div className='flex flex-col items-start gap-[4px]'>
          <span className='text-[#10B981] font-bold'>13,153</span>
          <span className='text-[#6C737F] font-[500]'>{t("Example.19")}</span>
        </div>
      </div>
      </div>

      </div>

      <div className='  w-[100%] p-[10px] mt-[50px] flex items-start justify-between'>
      <div className='w-[48%] border-[#00000014] rounded-md  p-[15px] border'>
      <h4 className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.21")}</h4>
      <table className='w-[100%] mt-[15px]'>
        <thead>
          <tr className='text-[#5A607F]'>
            <th className='text-start pb-[7px]'>{t("Example.22")}</th>
            <th className='text-start pb-[7px] pl-[20px]'>{t("Example.23")}</th>
            <th className='text-start pb-[7px]'>{t("Example.24")}</th>
            <th className='pb-[7px]'>{t("Example.25")}</th>
          </tr>
        </thead>
        <tbody className='border-t-1 border-[#00000014]'>
        {dataUsers.map((e) => {
          return (
            <tr>
              <td className={`font-[500] py-[10px]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.name}</td>
              <td className={`font-[500] py-[10px]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.date}</td>
              <td className={`font-[600] py-[10px]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.price}</td>
              <td className={`font-[500] flex flex-col items-center py-[5px] mt-[10px]  text-center rounded-md   ${theme == 'dark' ? 'text-[#06A561] ' : 'text-[#111927] '} ${e.status === t("Example.26") ? 'bg-[#C4F8E2] ' : e.status === t("Example.27") ? 'bg-[#E6E9F4]' : ''}`  }>{e.status}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      </div>
      <div className='w-[48%] border-[#00000014] rounded-md  p-[15px] border'>
      <h4 className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.28")}</h4>
      <table className='w-[100%] mt-[15px]'>
        <thead>
          <tr className='text-[#5A607F]'>
            <th className='text-start pb-[7px]'>{t("Example.29")}</th>
            <th className='text-start pb-[7px]'>{t("Example.30")}</th>
            <th className='pb-[7px]'>{t("Example.31")}</th>
          </tr>
        </thead>
        <tbody className='border-t-1 border-[#00000014]'>
          {dataProducts.map((e) => {
            return (
              <tr>
                <td className='pt-[15px]'>
                  <div className='flex items-center gap-[5px]'>
                    <img src={e.img} alt="" />
                    <span className={`font-[500]   ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.name}</span>
                  </div>
                </td>
                <td className={`font-[500]   ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.price}</td>
                <td className={`font-[500] text-center  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.des}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      </div>

      </div>

      </div>
        
      </div>








      

        <div className='sm:hidden'>
          <div className='w-[98%] m-auto p-[15px]'>
          <h1 className={`font-[700] text-[25px] ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.11")}</h1>
          <div className='w-[98%] flex flex-col gap-[25px] mt-[50px]'>
        <div className='flex flex-wrap gap-[35px] items-center justify-between'>
        <div className='bg-[#FEF3F2] w-[95%] p-[10px] rounded-md flex items-center justify-around'>
          <img src={image2} alt="" />
          <div className='flex flex-col items-start gap-[5px]'>
            <span className='text-[#6C737F] font-[500]'>{t("Example.12")}</span>
            <span className='text-[#111927] font-[700] text-[24px]'>$152k</span>
          </div>
        </div>
        <div className='bg-[#FFFAEB] w-[95%] p-[10px] rounded-md flex items-center justify-around'>
          <img src={image3} alt="" />
          <div className='flex flex-col items-start gap-[5px]'>
            <span className='text-[#6C737F] font-[500]'>{t("Example.13")}</span>
            <span className='text-[#111927] font-[700] text-[24px]'>$99.7k</span>
          </div>
        </div>
        <div className='bg-[#F0FDF9] w-[95%] p-[10px] rounded-md flex items-center justify-around'>
          <img src={image4} alt="" />
          <div className='flex flex-col items-start gap-[5px]'>
            <span className='text-[#6C737F] font-[500]'>{t("Example.14")}</span>
            <span className='text-[#111927] font-[700] text-[24px]'>$32.1k</span>
          </div>
        </div>
        </div>
        <div className="w-full h-80">
      <h2 className="font-semibold text-lg mb-4">{t("Example.20")}</h2>
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value, name, props) => [`${value} Orders`, '']} />
          <Line type="monotone" dataKey="orders" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
      </div>
          </div>


          <div className='  w-[100%] p-[10px] mt-[50px] flex flex-col gap-[50px] items-start justify-between'>
      <div className='w-[100%] border-[#00000014] rounded-md  p-[15px] border'>
      <h4 className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.21")}</h4>

          

      <table className='w-[100%] mt-[15px]'>
        <thead>
          <tr className='text-[#5A607F]'>
            <th className='text-start pb-[7px]'>{t("Example.22")}</th>
            <th className='text-start pb-[7px] pl-[20px]'>{t("Example.23")}</th>
            <th className='text-start pb-[7px]'>{t("Example.24")}</th>
            <th className='pb-[7px]'>{t("Example.25")}</th>
          </tr>
        </thead>
        <tbody className='border-t-1 border-[#00000014]'>
        {dataUsers.map((e) => {
          return (
            <tr>
              <td className={`font-[500] py-[10px]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.name}</td>
              <td className={`font-[500] py-[10px]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.date}</td>
              <td className={`font-[600] py-[10px]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.price}</td>
              <td className={`font-[500] flex flex-col items-center py-[5px] mt-[10px]  text-center rounded-md   ${theme == 'dark' ? 'text-[#06A561] ' : 'text-[#111927] '} ${e.status === t("Example.26") ? 'bg-[#C4F8E2] ' : e.status === t("Example.27") ? 'bg-[#E6E9F4]' : ''}`  }>{e.status}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      </div>
      <div className='w-[100%] border-[#00000014] rounded-md  p-[15px] border'>
      <h4 className={`font-[700]  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{t("Example.28")}</h4>
      <table className='w-[100%] mt-[15px]'>
        <thead>
          <tr className='text-[#5A607F]'>
            <th className='text-start pb-[7px]'>{t("Example.29")}</th>
            <th className='text-start pb-[7px]'>{t("Example.30")}</th>
            <th className='pb-[7px]'>{t("Example.31")}</th>
          </tr>
        </thead>
        <tbody className='border-t-1 border-[#00000014]'>
          {dataProducts.map((e) => {
            return (
              <tr>
                <td className='pt-[15px]'>
                  <div className='flex items-center gap-[5px]'>
                    <img src={e.img} alt="" />
                    <span className={`font-[500]   ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.name}</span>
                  </div>
                </td>
                <td className={`font-[500]   ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.price}</td>
                <td className={`font-[500] text-center  ${theme == 'dark' ? 'text-white' : 'text-[#111927]'}`}>{e.des}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      </div>














        </div>

    </>
  )
}

export default React.memo(Dashboard)