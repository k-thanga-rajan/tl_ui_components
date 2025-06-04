import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import "./index.scss";

const UiTabs = ({ children, tabs, onChange, activeTabKey, activeKey, className, ...restProps }) => {
    return (
        <>
            <div>
                <Tabs
                    defaultActiveKey={activeTabKey}
                    activeKey={activeKey}
                    onChange={onChange}
                    className={`custom-style ${className}`}
                    {...restProps}
                >
                    {tabs.map((tab, index) => (
                        <TabPane key={index + 1} tab={tab.label}>
                            {children}
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        </>
    );
}

export default UiTabs;