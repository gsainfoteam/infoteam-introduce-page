import React from "react";
import * as T from "../components/StyledText";

function Member({ name, role, email, githubLink, state }) {
  return (
    <div className="member-container">
      <div className="member-card">
        <T.MemberName>{name}</T.MemberName>
        <T.MemberInfo>{role}</T.MemberInfo>
        <T.MemberInfo>{email}</T.MemberInfo>
        <T.MemberInfo>{githubLink}</T.MemberInfo>
      </div>
    </div>
  );
}

export default Member;
