"use client"

import "./styles.scss";
import Image from "next/image";
import { Input } from "antd";


export default function Navbar() {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="navbar_container">
      <Image
        className="pokeball_icon"
        src="/pokeball_icon.png"
        width={40}
        height={40}
        alt="Home"
      />

      <div className="search_navbar">
        {/* <input className="text" placeholder="Buscar..." />
        <button className="submit">Search</button> */}
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
      <div className="generaciones"></div>
    </div>
  );
}
