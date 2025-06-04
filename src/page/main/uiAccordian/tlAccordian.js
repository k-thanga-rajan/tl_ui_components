import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import './style.scss';

const TlAccordian = ({ children, changeAccordianResponse, ...props }) => {
    const contentEl = useRef();
    const { handleToggle, active, data, noborder } = props;
    const { label, subLabel, id } = data;
    const [height, setHeight] = useState("0px"); // State to track height dynamically


    useEffect(() => {
        if (contentEl.current) {
            if (active === id) {
                contentEl.current.style.height = "auto"; // Set to auto to get natural height
                const newHeight = contentEl.current.scrollHeight + "px";
                setHeight(newHeight); // Update state with new height
            } else {
                setHeight("0px"); // Collapse when inactive
            }
        }
    }, [active, id, children, changeAccordianResponse]);

    return (
        <div className={classNames({ 'accordion__card': true, 'no-border': noborder })}>
            <div className={`accordion__header ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                <div className={`accordion__toggle ${active === id ? 'active' : ''}`}>
                    <div>
                        <h5 className="accordion__title">{label}</h5>
                        {subLabel && active === id ? <p className="accordion__sub-title">{subLabel}</p> : active === id && <p></p>}
                    </div>
                    <img src={DownArro} alt="Arrow" />
                </div>
            </div>
            <div ref={contentEl} className={`accordion__collapse ${active === id ? 'show' : ''}`} style={{
                height: active === id ? height : "0px",
                overflow: "hidden",
                // transition: "height 0.3s ease-in-out",
            }}
            >
                <div className="accordion__body">
                    <div className="accordion__content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UiAccordian;
