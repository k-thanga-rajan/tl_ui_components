import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./index.scss";

const UiButton = ({
    add,
    generate,
    style,
    onClick,
    children,
    htmlType,
    className,
    ...restProps
}) => {

    let icon = null;

    if (add) {
        icon =
            <PlusCircleOutlined />
    }

    return (
        <Button
            style={style}
            icon={icon}
            htmlType={htmlType}
            onClick={onClick}
            className={`Ui-Button ${className}`}
            {...restProps}>
            {children}
        </Button>
    );
};

export default UiButton;
