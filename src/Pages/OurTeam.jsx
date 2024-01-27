
import { useState } from "react";
import { Link } from "react-router-dom";


const OurTeam = () => {
    const [data,setData]  =useState([])
    const [input,setInput] = useState('')
    const [isLoading,setLoading] = useState(false)
   
   const fetchData=(value)=>{
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then((res)=> {
            
          const results = res.filter((user)=>{
            return user && user.name && user.name.toLowerCase().includes(value)
          })
          setData(results)
          console.log(results)
            //  setData(res)
                setLoading(false)
            })

            // const filter = data.filter
    }
   
   
    // useEffect(()=>{
    //     setLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>res.json())
    //     .then(res=> {
            
    //       const results = res.filter((user)=>{
    //         return user && user.name && user.name.toLowerCase().includes(value)
    //       })
    //       console.log(results)
    //         //  setData(res)
    //             setLoading(false)
    //         })

    //         // const filter = data.filter
    // },[]) 

    const handleChange =(value) =>{
      setInput(value)
      fetchData(value)
    }
    console.log(data)
    return (
        <div className="max-w-7xl mx-auto">

            <div >
              <form onChange={(e)=> handleChange(e.target.value) }  className="items-center  m-16" >


                <input value={input}
                type="text" className="px-4 py-2 bg-yellow-500" placeholder="Search text" />
                <input type="submit" className="px-4 py-2 " value='Search' name="" id="" />
              </form>
            </div>



            <div className="grid grid-cols-5 gap-5">
                  {
                    isLoading ?  <div className="w-full ml-96 h-[20rem] flex  items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div> :  <>{
                        data?.map(datas=> (
<Link key={datas.id} to={`/member/${datas.id}`} >
<div   className="rounded-full   hover:rounded-md hover:bg-green-600 hover:text-black bg-primary text-primary-content">
  <div className="p-4">
    <h2 className="card-title">{datas.name}</h2>
    <p>Email: {datas.email} </p>
   
  </div>
</div>
</Link>
                        ))
                    }</> 
                  }
            </div>
            
        </div>
    );
};

export default OurTeam;