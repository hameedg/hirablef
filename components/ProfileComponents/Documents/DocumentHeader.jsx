import React from 'react'

export default function DocumentHeader() {
  return (
            <div
            className="relative flex flex-row items-center pb-[20px] mb-[5px] mt-[5px] "
            >
            <div  style={{borderBottom : "1px solid grey"}}  className="flex items-center break-words mt-0 mr-5 mb-0 text-[0.875rem] w-[100%] justify-between pb-[15px] font-medium">
            
              <div   className='flex  w-[37%]'>
                 <h1 > File Name</h1>
              </div>
              
              <div  className="w-[15%]">
                <h1 className="text-[0.875rem] h-full w-full "  >
                  File Type
                </h1>
              </div>
              <div  className='w-[15%]'>
                <span  className=" text-[0.875rem] w-full" >Modified</span>
              </div>
      
            {/* </div> */}

            <div  className="w-[20%]">

            <h1  className="w-full m-auto flex-col justify-center items-center status_icon inline-flex cursor-pointer">
                Verification Status
            </h1>
            </div>
            {/* absolute right-0 top-0 */}
            
            <div  className="w-[10%]">
            <h1
              className="w-full ml-[50%]"
              
            >
                Edit
            </h1>
            </div>
          </div>
        
    </div>
  )
}
