import React from 'react';
import Search from 'antd/es/input/Search';
import "./index.scss";

const UiSearch = React?.forwardRef(({ className, style, placeholder, handleSearch, searchValue, ...restProps }, ref) => (
    <Search
        ref={ref}
        className={`custom-ant-search ${className}`}
        style={style}
        placeholder={placeholder ? placeholder : "Search"}
        onSearch={handleSearch}
        onChange={(e) => handleSearch(e.target.value)}
        value={searchValue}
        {...restProps}
    />

));
export default TlSearch;