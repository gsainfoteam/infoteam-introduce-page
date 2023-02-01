import React from "react";
import * as T from "../components/StyledText";
import { useState, useEffect } from "react";
//import axios from "axios";
import Member from "../components/Member";
import CheckButton from "../components/button/CheckButton";
import MemberList from "../components/MemberList";
import { memberList } from "../data/memberInfos";

const Members = () => {
  const [isCheckedFE, setIsCheckedFE] = useState(true);
  const [isCheckedBE, setIsCheckedBE] = useState(true);

  return (
    <div
      className="page-container"
      style={{
        marginTop: "0px",
      }}
    >
      <div
        className="section-container-col"
        style={{
          background: "linear-gradient(to top, #F7F7F7, #F7F7F7)",
          paddingBlock: "0px",
          minHeight: "300px",
        }}
      >
        <T.Title style={{ marginTop: "50px" }}>
          활동중인 <span style={{ fontWeight: "bold" }}>팀원들</span>
        </T.Title>
        <T.Text style={{ fontSize: "20px", marginBottom: "30px" }}>
          2023년 현재 Infoteam으로 활동하고 있는 팀원들을 소개합니다.
        </T.Text>
      </div>
      {/*
      <div
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "70px",
        }}
      >
        <CheckButton
          category="frontend"
          isChecked={isCheckedFE}
          setIsChecked={setIsCheckedFE}
        />
        <CheckButton
          category="backend"
          isChecked={isCheckedBE}
          setIsChecked={setIsCheckedBE}
        />
      </div>
      <MemberList isCheckedFE={isCheckedFE} isCheckedBE={isCheckedBE} />
      */}
      <div className="list-container" style={{ marginTop: "40px" }}>
        {memberList.map((item) => {
          return (
            <Member
              name={item.name}
              role={item.role}
              email={item.email}
              githubLink={item.githubLink}
              state={item.state}
            />
          );
        })}
      </div>
    </div>
  );
};

// jsonplaceholder photos 데이터 받아와서 사용
// const Members = () => {
//   const [members, setMembers] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setMembers(null);
//         setLoading(true);
//         setError(null);
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/photos"
//         );
//         setMembers(response.data);
//       } catch (e) {
//         setError(e);
//       }
//       setLoading(false);
//     };
//     fetchMembers();
//   }, []);

//   if (loading) console.log("로딩 중..");
//   if (error) console.log("에러 발생");
//   if (!members) return null;
//   return (
//     <div className="page-container">
//       <T.Title sty="bold">활동중인 팀원들</T.Title>
//       <div className="list-container">
//         {members.map((item) => {
//           return (
//             <Member
//               name={item.title}
//               role={item.albumid}
//               email={item.url}
//               githubLink={item.thumbnailUrl}
//               state={item.id}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default Members;
