import React from "react";
import { useState, useEffect } from "react";
import Member from "../components/Member";
import { memberList } from "../data/memberInfos";

function MemberList({ isCheckedFE, isCheckedBE }) {
  const [conditionalMemberList, setConditionalMemberList] =
    useState(memberList);

  useEffect(() => {
    setConditionalMemberList(
      memberList.filter(
        (item) =>
          (isCheckedFE && item.role == "frontend") ||
          (isCheckedBE && item.role == "backend")
      )
    );
    return () => {};
  }, [isCheckedFE, isCheckedBE]);

  return (
    <div className="list-container" style={{ marginTop: "40px" }}>
      {conditionalMemberList.map((item) => {
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
  );
}

export default MemberList;
