
import { useLoaderData } from "react-router-dom";
import  './TeamMember.css';


const TeammembersDetails = () => {
    const datas = useLoaderData()

  
    return (
        <div className="m-6">
            <div   className=" w-full   hover:rounded-md hover:bg-green-600 hover:text-black bg-primary text-primary-content">
  <div className="p-4">
    <h2 className="card-title">{datas.name}</h2>
    <p>Email: {datas.email} </p>
    <p>Username: {datas.username} </p>
    <p>Number: {datas.phone} </p>
  <div className="flex justify-around items-center gap-4">
   
  <div>
        <h1 className="font-bold text-2xl">Company</h1>
        <p>Company Name: {datas.company.name}</p>
        <p>Company catchPhrase: {datas.company.catchPhrase}</p>
    </div>
    <div>
        <h1 className="font-bold text-2xl">Address</h1>
        <p>Street: {datas.address.street} </p>
    <p id="city">City: {datas.address.city} </p>
    <p> </p>
    </div>
   
  </div>
   
  </div>
</div>
        </div>
    );
};

export default TeammembersDetails;