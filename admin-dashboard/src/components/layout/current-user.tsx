import { SettingOutlined } from "@ant-design/icons";
import { useGetIdentity } from "@refinedev/core";
import { Button, Popover } from "antd";
import { useState } from "react";
import { AccountSettings } from "./account-setting";
import CustomAvatar from "./custom-avatar";
import { User } from ''

function CurrentUser() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useGetIdentity<User>();

  const content = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          borderTop: "1px solid #d9d9d9",
          padding: "4px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Button
          style={{ textAlign: "left" }}
          icon={<SettingOutlined />}
          type="text"
          block
          onClick={() => setIsOpen(true)}
        >
          Account Settings
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
        content={content}
      >
        <CustomAvatar
          name={user?.name}
          src={user?.avatarUrl}
          size="default"
          style={{ cursor: "pointer" }}
        />
        {/* {user && (
          <AccountSettings
            opened={isOpen}
            setOpened={setIsOpen}
            userId={user?.id}
          />
        )} */}
      </Popover>
    </>
  );
}

export default CurrentUser;
