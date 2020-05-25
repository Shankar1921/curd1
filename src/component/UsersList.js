import React ,{ useEffect ,useState}from 'react'

function UsersList() {
    const [data,setData] = useState()
    
   useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(res => {
           console.log(res)
            setData(res)
        })
   },[])

   console.log(data)


    return (
        <div>
            <h1 className="text-info">UsersList</h1>
            <hr />
             <div>
             { data &&  data.map((item)=>{
                return <div className="dataclass" key={item.id}>
                       <h2 className=" border border-success bg-dark text-white ">{item.first_name} {item.last_name}</h2>
                      <div className="spandiv"> <span className="border border-danger m-4 bg-danger " >DEL</span>
                       <span className="border border-warning m-4 bg-warning">UPDATE</span>
                       </div>
                    </div>
                
            })}
             </div>
        </div>
    )
}

export default UsersList
