// import autosuggest from "react-autosuggest";
// const Search = () => {

//   const [searchValue, setsearchValue] = useState(' ');
//   
//   const [data, setData] = useState([])
//   const [suggestions, setSuggestions] = useState([])
//   //const url = 'http://127.0.0.1:8080/product/search/';
//   useEffect(() => {
//     const debounceFetchData = setTimeout(() => {
//       fetchData();

//     }, 300);
//     return () => clearTimeout(debounceFetchData);


//   }, [searchValue]);
//   const fetchData = async () => {
//     if (searchValue.trim() === '') {
//       setData([])
//       return;
//     }
//     try {
//       const response = await fetch(`http://127.0.0.1:8080/product/search?txt=${searchValue.trim()}`);
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className='search-box flex flex-col items-center w-full justify-center h-auto p-4'>
//       <input
//         type='search'
//         placeholder='Search..'
//         className='bg-blue-200 rounded-3xl font-bold text-center items-center border-zinc-400 hover:bg-blue-300 shadow-2xl h-10 mb-4'
//         onChange={(e) => setsearchValue(e.target.value)}
//       />
//       <div className='w-full  justify-center grid grid-cols-3'>
//         {data?.length ? data.map((item, index) => (
//           <div key={index} className='border border-gray-300 rounded-lg p-2 m-2 w-50'>
//             <img
//               src={item.imageUrl}
//               alt={item.title}
//               className='w-full h-32 object-contain rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-110'
//             />
//             <h3 className='text-lg font-semibold mt-2'>{item.title}</h3>
//             <p className='text-gray-700'>{item.description}</p>
//             <p className='text-gray-500'>Price: ₹{item.price}</p>

//           </div>
//         )) : null}
//       </div>
//     </div>

//   );
// };





// export default Search


// import React, { useEffect, useState } from 'react';
// //import Autosuggest from 'react-autosuggest'
// const Search = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const debounceFetchData = setTimeout(() => {
//       fetchData();
//     }, 300);
//     return () => clearTimeout(debounceFetchData);
//   }, [inputValue]);

//   const fetchData = async () => {
//     if (inputValue.trim() === '') {
//       setSuggestions([]);
//       return;
//     }
//     try {
//       const response = await fetch(`http://127.0.0.1:8080/product/search?txt=${inputValue.trim()}`);
//       const data = await response.json();
//       setSuggestions(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//   };
//   const handleSuggestionClick = (suggestion) => {
//     setInputValue(suggestion.title);
//     setSuggestions([]);
//   }

//   return (
//     <div className="autocomplete p-2">
//       <input
//         type="search"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Search..."
//         className="bg-blue-200 rounded-3xl font-bold text-center items-center border-zinc-400 hover:bg-blue-300 shadow-2xl h-10 mb-4"
//       />
//       {suggestions.length > 0 && (
//         <div className="suggestions-list grid grid-cols-3">
//           {suggestions.map((suggestion, index) => (
//             <div
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               className="p-2 cursor-pointer hover:bg-gray-200"
//             >
//               {/* <img
//                 src={suggestion.imageUrl}
//                 alt={suggestion.title}
//                 className="w-full h-32 object-contain rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
//               /> */}
//               <span>{suggestion.title}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;


import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import '../Components/Search.css'; // Import the custom styles

const Search = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchData = async (value) => {
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(`http://127.0.0.1:8080/product/search?txt=${value.trim()}`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSuggestionsFetchRequested = async ({ value }) => {
    await fetchData(value);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => (
    <div className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleSuggestionClick(suggestion)}>
      <span className="suggestion-title">{suggestion.title}</span>
    </div>
  );

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion.title);
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Search...',
    value,
    onChange
  };

  return (
    <div className="autocomplete p-2">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        highlightFirstSuggestion={true}
      />
    </div>
  );
};

export default Search;







// `http://127.0.0.1:8080/product/search?txt=${inputValue.trim()}`