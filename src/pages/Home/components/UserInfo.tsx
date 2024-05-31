import type { FC } from "react";
import userInfoCss from "./UserInfo.module.css";

const UserAvatar: FC = () => {
  return (
    <div>
      <img
        className={userInfoCss.userInfo_avatar}
        src="https://picsum.photos/200/200.jpg"
        alt=""
      />
    </div>
  );
};

const UserInfo: FC = () => {
  return (
    <div className={userInfoCss.userInfo_box}>
      <div className="flex-row">
        <UserAvatar />
        <div>
          <div>用户昵称</div>
          <div>积分</div>
          <div>任务达人</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
