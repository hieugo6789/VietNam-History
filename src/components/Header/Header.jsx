import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="menu">
          <li
            className={activeItem === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            <NavLink to="/" exact activeClassName="active">
              TRANG CHỦ
            </NavLink>
          </li>
          <li
            className={`has-dropdown ${
              activeItem === "timeline" ? "active" : ""
            }`}
            onClick={() => handleClick("timeline")}
          >
            <NavLink to="/timeline" activeClassName="active">
              DÒNG THỜI GIAN
              <FontAwesomeIcon
                className="icon-arrow-dropdown"
                icon={faAngleDown}
              />
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="/timeline/1">
                  {" "}
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Hồng Bàng & Văn Lang
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/2">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Âu Lạc & Nam Việt
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/3">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Bắc thuộc lần I
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/4">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Trưng Nữ Vương
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/5">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Bắc thuộc lần II
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/6">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Lý và Nhà Triệu
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/7">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Bắc thuộc lần III
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/8">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Thời ký xây dựng nền tự chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/9">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Ngô
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/10">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Đinh
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/11">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Tiền Lê
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/12">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Lý
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/13">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Trần
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/14">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Hồ
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/15">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Hậu Trần
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/16">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Bắc thuộc lần IV
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/17">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Hậu Lê
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/18">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nam Bắc Triều
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/19">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Trịnh Nguyễn Phân Tranh
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/20">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Tây Sơn
                </NavLink>
              </li>

              <li>
                <NavLink to="/timeline/21">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Nhà Nguyễn
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/22">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Pháp Thuộc
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/23">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Việt Nam Dân Chủ Cộng Hòa
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline/24">
                  <FontAwesomeIcon
                    className="icon-arrow-dropdown"
                    icon={faAngleRight}
                  />
                  Cộng hòa xã hội chủ nghĩa Việt Nam
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            className={activeItem === "article" ? "active" : ""}
            onClick={() => handleClick("article")}
          >
            <NavLink to="/article" activeClassName="active">
              TƯ LIỆU
            </NavLink>
          </li>
          <li
            className={activeItem === "characters" ? "active" : ""}
            onClick={() => handleClick("characters")}
          >
            <NavLink to="/characters" activeClassName="active">
              NHÂN VẬT
            </NavLink>
          </li>
          <li
            className={activeItem === "leaderboard" ? "active" : ""}
            onClick={() => handleClick("leaderboard")}
          >
            <NavLink to="/rank" activeClassName="active">
              BẢNG XẾP HẠNG
            </NavLink>
          </li>
          <li
            className={activeItem === "quizz" ? "active" : ""}
            onClick={() => handleClick("quizz")}
          >
            <NavLink to="/quizz" activeClassName="active">
              QUIZ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
