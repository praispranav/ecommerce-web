import React from "react";
import { Colors } from "../config/Colors";
import IconButton from "../elements/IconButton";
import { AiFillSetting, AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Font } from "../config/Font";
import { BsFillBagCheckFill } from "react-icons/bs";

const TopNav = () => {
  const phoneNumber = 7644015588;
  const email = "praispranav@gmail.com";
  return (
    <div
      className="w-100 py-2"
      style={{
        backgroundColor: Colors.PrimaryDark,
        color: "white",
        fontSize: Font.ExtraSmall,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <p class="mx-2">
            <AiFillPhone className="mx-2" />
            {phoneNumber}
          </p>
          /
          <p >
            <HiOutlineMail className="mx-2" />
            {email}
          </p>
        </div>
        <div class="d-flex align-items-center">
          <IconButton className="mx-2 px-2" hover={Colors.Primary} background={Colors.PrimaryDark}>
            <AiFillSetting className="me-2" /> Settings
          </IconButton> /
          <IconButton className="mx-2 px-2" hover={Colors.Primary} background={Colors.PrimaryDark}>
            <BsFillBagCheckFill className="me-2" /> Orders
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
