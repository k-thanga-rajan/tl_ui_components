import { Select } from "antd";
import "./index.scss";

const UiSelect = ({ disabled, selectedOption, placeholder, handleChange, handleSearch, newFilterOption, options, mode, style, ...resetProps }) => {
    return (
        <Select
            allowClear
            showSearch
            disabled={disabled}
            defaultValue={selectedOption}
            placeholder={placeholder ? placeholder : "Select"}
            optionFilterProp="children"
            onChange={handleChange}
            onSearch={handleSearch}
            filterOption={newFilterOption}
            options={options}
            mode={mode}
            style={style}
            className="ant-select"
            {...resetProps}
        />
    )
};
export default UiSelect;