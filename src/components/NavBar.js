import React from "react";
import { FaFacebook } from "react-icons/fa";
import styled from "styled-components";
import MyImg from "../assets/me.png"

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 50px;
  padding-right: 30px;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;

  .navbar__icon {
    font-size: 24px;
    color: #1877f2;
    margin-right: 10px;
    height: 32px;
    width: 32px;
  }

  form {
    display: flex;
    align-items: center;

    input {
      height: 30px;
      padding: 0 10px;
      border: none;
      border-radius: 20px;
      background-color: #f0f2f5;
      margin-right: 10px;

      &:focus {
        outline: none;
      }
    }

    button {
      height: 30px;
      padding: 0 10px;
      border: none;
      border-radius: 20px;
      background-color: #1877f2;
      color: #fff;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: #3b5998;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;

  .navbar__user {
    display: flex;
    align-items: center;
    margin-right: 10px;

    .navbar__user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .navbar__user-name {
      font-weight: bold;
    }
  }

  .navbar__menu {
    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    span:last-child {
      margin-right: 0;
    }
  }
`;

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarLeft>
        <FaFacebook className="navbar__icon" />
        <form>
          <input type="text" placeholder="Facebook 검색" />
          <button type="submit">검색</button>
        </form>
      </NavbarLeft>
      <NavbarRight>
        <div className="navbar__user">
          <img
            src={MyImg}
            alt="프로필 이미지"
            className="navbar__user-avatar"
          />
          <span className="navbar__user-name">박정규</span>
        </div>
        <div className="navbar__menu">
          <span>메세지</span>
          <span>로그아웃</span>
        </div>
      </NavbarRight>
    </NavbarWrapper>
  );
}

export default Navbar;
