import "./style.css";

const Cert: React.FC<{
   title: string;
   where: string;
   logoSrc?: string;
}> = ({ title, where, logoSrc }) => {
   return (
      <>
         <div className="cert flex flex-row space-x-2">
            <div className="flex grow flex-col justify-start space-y-1">
               <div className="flex h-10 flex-row justify-end">
                  <div className="cursor-default pl-6 font-avel text-3xl text-grey-900">
                     {title}
                  </div>
                  <div className="empty-grow"></div>
               </div>

               <div className="cert-line h-[3px] bg-red-700"></div>
               {/* <div className="relative h-10">
                  <div className="cert-where-hide static z-10 h-full w-6 overflow-clip bg-greenwhite">
                     <div className="absolute right-0.5 top-0 font-avel text-xl text-grey-800">
                        {where}
                     </div>
                  </div>
               </div> */}
               <div className="relative h-10">
                  <div className="cert-where-hide absolute right-0 z-10 h-full bg-greenwhite"></div>
                  <div className="absolute right-0.5 top-0 z-0 cursor-default font-avel text-xl text-grey-800">
                     {where}
                  </div>
               </div>
            </div>
            <div className="cert-logo -mt-[1.5px] h-24 w-24 grow-0 rounded-full bg-transparent">
               <img src={logoSrc} />
            </div>
         </div>
      </>
   );
};

export default Cert;