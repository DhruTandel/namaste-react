// import React, { useState } from "react";

// const Contact = () => {
//   const [list, setList] = useState("");
//   const [showList, setShowList] = useState([]);

//   const handleClick = () => {
//     if (list !== "") {
//       setShowList([...showList, list]);
//       setList("");
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedList = showList.filter((_, i) => i !== index);
//     setShowList(updatedList);
//   };
//   return (
//     <>
//       <h1 className="font-bold text-center mb-5 text-2xl">Contact Information</h1>
//       <div className="mx-auto w-40">
//         <div>
//           <input
//             className="border border-gray-500  "
//             type="text"
//             placeholder="Enter Item"
//             value={list}
//             onChange={(e) => setList(e.target.value)}
//           />
//         </div>
//         <div>
//           <button
//             onClick={handleClick}
//             className="w-full  my-5 bg-green-700 p-1 m-2 rounded-lg text-white hover:bg-green-600"
//           >
//             Add Item
//           </button>
//         </div>
//         <ul className="list-disc">
//           {showList.map((item, index) => {
//             return (
//               <div>
//                 <li className="flex gap-10 mt-3" key={index}>
//                   {item}
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className=" px-2 rounded-lg bg-red-700 text-white hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { RiContactsBook3Line } from "react-icons/ri";

const Contact = () => {
  const [name,setName]=useState("");
  
  return (
    <>
      <div className="h-[calc(100vh-115px)] overflow-hidden">
        <div className="container h-4/5 w-1/3 mx-auto">
          <div className=" flex justify-center text-5xl">
            <RiContactsBook3Line className="mt-5" />
          </div>
          <div className="mt-4">
            <h1 className="text-4xl text-center uppercase">Contact Us</h1>
          </div>
          <form className="m-5 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-100 rounded-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 bg-gray-100 rounded-full"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full p-3 bg-gray-100 rounded-full"
            />
            <textarea
              placeholder="Message..."
              className="bg-gray-50 p-3"
            ></textarea>
            <button className="bg-yellow-600 p-2 text-xl text-white rounded-full hover:bg-yellow-500">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
