import backgroundImg from './assets/bg1.png';

function App() {

  return (
    <div className="font-['Gilroy'] main h-screen w-full flex bg-no-repeat bg-cover" style={{backgroundImage:`url(${backgroundImg})`}}>
      <div className="lefcard text-white  w-1/2 flex items-center justify-center flex-col ">
        <div>
          <h3 className="text-3xl">New features</h3>
          <h3 className="text-3xl">One app Solution</h3>
          <p className="text-[10px] pt-4">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="righcard w-1/2 flex justify-center items-center">
        <div className="card h-[90%] w-[70%] shadow-slate-800 shadow-xl ">
          <div className=" rtop h-1/2 w-full  flex flex-col text-white justify-center px-12 gap-2 bg-cover bg-no-repeat"style={{backgroundImage:`url(${backgroundImg})`}} >
            <div className="pt-6"> 
              <h1 className="font-bold text-3xl">Welcome</h1>
              <h1 className="font-bold text-3xl">To the website</h1>
            </div>
            <p className="text-[11px] pb-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque aut iusto facere quaerat dignissimos odio accusamus totam. Dignissimos corrupti facilis itaque nam earum.</p>
            <h4 className="text-[12px] cursor-pointer ">CREATE ACCOUNT</h4>
          </div>
          <div className=" rbot h-1/2 w-full  flex flex-col items-center gap-4 py-8 bg-white">
            <h5 className='text-[#2A5DA9]'>USER LOGIN</h5>

            <div className="w-[60%] h-6 bg-[#286DB5] rounded-md flex items-center gap-12">
            <i className=" pl-2 text-[12px] fa-solid fa-user text-white"></i>
            <h6 className="text-[12px] text-white">Username</h6>
            </div>

            <div className="w-[60%] h-6 bg-[#286DB5] rounded-md flex items-center gap-12">
            <i className=" pl-2 text-[12px] fa-solid fa-lock text-white"></i>
            <h6 className="text-[12px] text-white ">Password</h6>
            </div>

            <div className="flex items-center justify-between w-[60%]">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded-full" />
                <label className="text-[10px] text-[#286DB5]">Remember</label>
              </div>
              <h3 className="text-[10px] text-[#286DB5]">Forgot Password?</h3>

            </div>

            <button className="text-[10px] py-2 rounded-md px-6 bg-blue-900 text-white">LOGIN</button>

          </div>
        </div>
      </div>  
    </div>
  )
}

export default App
