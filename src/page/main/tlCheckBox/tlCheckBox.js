import { Checkbox } from "antd";
import "./index.scss";

const TlCheckBox = ({ children, onChange, ...resetProps }) => {
    return (
        <>
            <Checkbox onChange={onChange} {...resetProps}>{children}</Checkbox>
        </>
    );
};

export default TlCheckBox;