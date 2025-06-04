import { Checkbox } from "antd";
import "./index.scss";

export const TlCheckBox = ({ children, onChange, ...resetProps }) => {
    return (
        <>
            <Checkbox onChange={onChange} {...resetProps}>{children}</Checkbox>
        </>
    );
};