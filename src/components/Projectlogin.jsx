import { useReducer } from "react";

const projectstate = {
    formdata:{
        username:"",
        email:"",
        password:""
    }
};

function reducer(state, action) {
    switch (action.type) {
        case "Username":
            return {
                ...state,
                formdata: { ...state.formdata, username: action.payload }
            }
    
            case "Email":
            return {
                ...state,
                formdata:{...state.formdata,email:action.payload}
            }
    
            case "Password":
            return {
                ...state,
                formdata: {...state.formdata,password:action.payload}
            }
            default:
                return state;
    }
  }




function Projectlogin(){

    const [state, dispatch] = useReducer(reducer, projectstate);

    function handleSubmit(e){
        e.preventDefault()
        alert("Form data submitted")
    }

    return(  
        <div className="grid grid-cols-2  bg-gray-950 text-white">
            <div>
                <img src="https://img.freepik.com/premium-vector/detail-mobile-payment-isometric-illustration-dark-gradient-suitable-mobile-app-website-banner-diagrams-infographics-other-graphic-assets_210682-799.jpg" alt=""  className="w-full h-[60vw]  object-cover "/>
            </div>
            <div className="flex flex-col items-center pt-28 ">
                <div className="flex items-center flex-col border-2 border-black px-5 py-16 shadow-2xl shadow-slate-400  rounded-full">
                <div className="flex items-center flex-col border-2 border-black px-5 py-16 shadow-2xl shadow-slate-400 bg-lime-400 h-[34vw] rounded-tl-full rounded-br-full">
                    <p className="text-2xl font-bold py-7">Login</p>
                    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <input onChange={(e)=>{dispatch({type:"Username",payload:e.target.value})}} type="text" placeholder="Enter your Username" className="w-[20rem]  rounded-full text-xl h-10 bg-gray-400 border-none" />
                        <input onChange={(e)=>{dispatch({type:"Email",payload:e.target.value})}} type="email" placeholder="Enter your Email" className="w-[20rem]  rounded-full text-xl h-10 bg-gray-400 border-none"  />
                        <input onChange={(e)=>{dispatch({type:"Password",payload:e.target.value})}} type="password" placeholder="Enter your Password" className="w-[20rem]  rounded-full text-xl h-10 bg-gray-400 border-none"  />
                       <div className="flex items-center flex-col">
                        <button className="bg-transparent duration-1000 rounded-br-full rounded-tl-full w-[8rem] h-9 hover:bg-orange-400">
                            <button type="submit" className="bg-blue-500 hover:bg-transparent duration-1000 w-[8rem] h-9 text-xl rounded-tr-full rounded-bl-full">Submit</button>
                        </button>
                       </div>
                    </form>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projectlogin