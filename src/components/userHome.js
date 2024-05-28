import React, { Component, useEffect, useState } from "react";
import "../App.css";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}


// import React, {  useEffect, useState } from "react";
// import { faTrash,faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function AdminHome({  }) {
//   //setting state
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");


//   useEffect(() => {
//     getAllUser();
//   }, [searchQuery]);

//   //fetching all user
//   const getAllUser = () => {
//     fetch(`http://localhost:5000/getAllUser?search=${searchQuery}`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userData");
//         setData(data.data);
//       });
//   };
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   //logout
//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./login";
//   };

//   //deleting user
//   const deleteUser = (id, name) => {
//     if (window.confirm(`Are you sure you want to delete ${name}`)) {
//       fetch("http://localhost:5000/deleteUser", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           userid: id,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           alert(data.data);
//           getAllUser();
//         });
//     } else {
//     }
//   };

//   return (
//     <div className="auth-wrapper" style={{ height: "auto", marginTop: 50 }}>
//       <div className="auth-inner" style={{ width: "fit-content" }}>
//         <h3>Welcome Admin</h3>
//         <div style={{ position: "relative", marginBottom: 10 }}>
//   <FontAwesomeIcon
//     icon={faSearch}
//     style={{ position: "absolute", left: 10, top: 13, color: "black" }}
//   />
//   <input
//     type="text"
//     placeholder="Search..."
//     value={searchQuery}
//     onChange={handleSearch}
//     style={{
//       padding: "8px 32px 8px 32px",
//       borderRadius: "4px",
//       border: "1px solid #ccc",
//       width: "100%",
//       boxSizing: "border-box",
//     }}
//   />
//   <span style={{ position: "absolute", right: 10, top: 8, color: "#aaa" }}>
//     {searchQuery.length>0?`${data.length} Records Found`:`Total Records ${data.length}`} 
//   </span>
// </div>
//         <table style={{ width: 700 }}>
//           <tr style={{ textAlign: "center" }}>
//             <th>Name</th>
//             <th>Email</th>
//             <th>User Type</th>
//             <th>Delete</th>
//           </tr>
//           {data.map((i) => {
//             return (
//               <tr style={{ textAlign: "center" }}>
//                 <td>{i.fname}</td>
//                 <td>{i.email}</td>
//                 <td>{i.userType}</td>
//                 <td>
//                   <FontAwesomeIcon
//                     icon={faTrash}
//                     onClick={() => deleteUser(i._id, i.fname)}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//         </table>

//         <button
//           onClick={logOut}
//           className="btn btn-primary"
//           style={{ marginTop: 10 }}
//         >
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }

