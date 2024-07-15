import React, { useEffect, useState } from 'react'

const Search = () => {

    const [searchValue, setsearchValue] = useState(' ');
    const [data, setData] = useState([])
    //const url = 'http://127.0.0.1:8080/product/search/';
    useEffect(() => {
        const debounceFetchData = setTimeout(() => {
            fetchData();

        }, 300);
        return () => clearTimeout(debounceFetchData);


    }, [searchValue]);
    const fetchData = async () => {
        if (searchValue.trim() === '') {
            setData([])
            return;
        }
        try {
            const response = await fetch(`http://127.0.0.1:8080/product/search?txt=${searchValue.trim()}`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='search-box flex flex-col items-center w-full justify-center h-auto p-4'>
        <input
          type='search'
          placeholder='Search..'
          className='bg-blue-200 rounded-3xl font-bold text-center items-center border-zinc-400 hover:bg-blue-300 shadow-2xl h-10 mb-4'
          onChange={(e) => setsearchValue(e.target.value)}
        />
        <div className='w-full  justify-center grid grid-cols-3'>
          {data?.length ? data.map((item, index) => (
            <div key={index} className='border border-gray-300 rounded-lg p-2 m-2 w-50'>
              <img
                src={item.imageUrl}
                alt={item.title}
                className='w-full h-32 object-contain rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-110'
              />
              <h3 className='text-lg font-semibold mt-2'>{item.title}</h3>
              <p className='text-gray-700'>{item.description}</p>
              <p className='text-gray-500'>Price: ₹{item.price}</p>
              if(data.length===0){
                console.log('no product found')
              }
            </div>
          )) : null}
        </div>
      </div>
         
      );
    };
    


//     return (
//         <div className='search-box flex items-center w-full justify-center h-15 p-4'>
//             <input type='search'
//                 placeholder='Search..'
//                 className='bg-blue-200 rounded-3xl font-bold text-center items-center border-zinc-400 hover:bg-blue-300 shadow-2xl h-10'
//                 onChange={(e) => setsearchValue(e.target.value)} />
//             <div>
//                 {
//                     data?.length ? data.map((item, index) =>(
//                        <div key={index} className='border border-gray-300 rounded-lg p-2 m-2 w-45'>
//                         <img
//                         src={item.imageUrl}
//                         alt={item.title}
//                         className='w-32 rounded-xl h-32 object-contain ' 
//                         />
//                         <h3 className="text-lg font-semibold">{product.title}</h3>
//                 <p className="text-gray-700 font-medium">{product.description}</p>
//                 <p className="text-gray-500 font-bold">Price: ₹{product.price}</p>

//                         <div/>
//                     )) : <p>No result found</p>
//                 }
//             </div>
//         </div>
//     );
// };

export default Search


//     const [apiUser, setApiUsers] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
//     const [searchItem, setSearchItem] = useState(' ')
//     const [filteredUsers, setFilteredUsers] = useState([])
//     useEffect(() => {
//       fetch('http://127.0.0.1:8080/product/search')
//       .then(response=>response.json())
//       .then(data=>{
//         setApiUsers(data.page)
//         setFilteredUsers(data.page)
//       }).catch(err=>{
//         console.log(err)
//         setError(err)
//       }).finally(()=>{
//         setLoading(false)
//       })
//     }, [])