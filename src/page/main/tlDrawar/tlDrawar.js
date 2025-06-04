import { Drawer, } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./index.scss";

const TlDrawer = ({
    children,
    className,
    title,
    placement,
    open,
    onClose,
    size,
    extra,
    width,
    spinLoad = false,
    ...restProps

}) => {
    return (
        <Drawer
            title={title}
            closable={false}
            onClose={onClose}
            open={open}
            className={`custom-drawer ${className}`}
            size={size}
            extra={extra}
            width={width}
            zIndex={999}
            maskClosable={false}
            {...restProps}
        >
            <CloseOutlined
                className="close-icon"
                style={{ color: "var(--text-on-secondary)" }}
                onClick={onClose}
            />
            {children}
        </Drawer>
    );
};

export default TlDrawer;
