import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import "./styles.scss";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const onChange = () => {
    setDrawer(!drawer);
  };
  return (
    <div className="header-wp">
      <div>
        <Link to={routes.myPage}>
          <img src="/images/logo.svg" alt="Healthy" />
        </Link>
      </div>
      <div className="items">
        <div className="item">
          <img src="/icons/demo.svg" alt="Demo" />
          <Link to={routes.myRecord}>自分の記録</Link>
        </div>
        <div className="item">
          <img src="/icons/challenge.svg" alt="Challenge" />
          <div>チャレンジ</div>
        </div>
        <div className="item">
          <img src="/icons/info.svg" alt="Info" />
          <div>お知らせ</div>
        </div>
        <div className="item" onClick={onChange}>
          <div
            className="popover"
            style={{ display: drawer ? "block" : "none" }}
          >
            <Link to={routes.myRecord}>
              <div className="popover-item">自分の記録</div>
            </Link>
            <div className="line"></div>
            <div className="popover-item">体重グラフ</div>{" "}
            <div className="line"></div>
            <div className="popover-item">目標</div>{" "}
            <div className="line"></div>
            <div className="popover-item">選択中のコース</div>{" "}
            <div className="line"></div>
            <Link to={routes.category}>
              <div className="popover-item">コラム一覧</div>
            </Link>
            <div className="line"></div>
            <div className="popover-item">設定</div>
          </div>
          {drawer ? (
            <img src="/icons/close.svg" alt="Menu" />
          ) : (
            <img src="/icons/menu.svg" alt="Menu" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
