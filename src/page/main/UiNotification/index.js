import { toast } from "react-toastify"

export const ShowSuccessNotification = ({
    title = "Success",
    subTitle = "",
    position = "top-right",
    autoClose = 1500,
    hideProgressBar = false,
    closeOnClick = true,
    pauseOnHover = true,
    draggable = true,
    progress,
    theme = "light",
    ...restProps
}) => {
    const Msg = () => (
        <div>
            <h6 className="fw-bold"> {title}</h6>
            <p> {subTitle} </p>
        </div>
    )
    return toast.success(<Msg />, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        theme,
        ...restProps,
    });
};

export const ShowErrorNotification = ({
    title = "Error",
    subTitle = "",
    position = "top-right",
    autoClose = 5000,
    hideProgressBar = false,
    closeOnClick = true,
    pauseOnHover = true,
    draggable = true,
    progress,
    theme = "light",
    ...restProps
}) => {
    const Msg = () => (
        <div>
            <h6 className="fw-bold"> {title}</h6>
            <p> {subTitle} </p>
        </div>
    )
    return toast.error(<Msg />, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        theme,
        ...restProps,
    });
};

export const ShowWarningNotification = ({
    title = "Warning",
    subTitle = "",
    position = "top-right",
    autoClose = 5000,
    hideProgressBar = false,
    closeOnClick = true,
    pauseOnHover = true,
    draggable = true,
    progress,
    theme = "light",
    ...restProps
}) => {
    const Msg = () => (
        <div>
            <h6 className="fw-bold"> {title}</h6>
            <p> {subTitle} </p>
        </div>
    )
    return toast.warning(<Msg />, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        theme,
        ...restProps,
    });
};

export const ShowInfoNotification = ({
    title = "Info",
    subTitle = "",
    position = "top-right",
    autoClose = 5000,
    hideProgressBar = false,
    closeOnClick = true,
    pauseOnHover = true,
    draggable = true,
    progress,
    theme = "light",
    ...restProps
}) => {
    const Msg = () => (
        <div>
            <h6 className="fw-bold"> {title}</h6>
            <p> {subTitle} </p>
        </div>
    )
    return toast.info(<Msg />, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        theme,
        ...restProps,
    });
};