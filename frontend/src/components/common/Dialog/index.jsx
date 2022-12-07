/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "../../../assets/icons/CloseIcon";
import { ThemeContext } from "../../../components/App";
import "./style.css";
import Text from "../Text";

export default function DialogWrapper(props) {
    const {
        title,
        open,
        close,
        hideTitle = false,
        customWidth,
        subTitle = "",
        customMarginTop,
        isFullTransparent = false
    } = props;
    const theme = useContext(ThemeContext);
    const isDarkMode = theme === "dark";
    const cancelButtonRef = useRef(null);

    let clsName =
        "inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle";
    if (!customWidth) {
        clsName = clsName + " sm:max-w-xl sm:w-full";
    } else {
        clsName = `${clsName} ${customWidth}`;
    }

    if (customMarginTop) {
        if (window.scrollY === 0) {
            clsName = `${clsName} marginTop145px`;
        } else {
            clsName = `${clsName} marginTop50px`;
        }
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className={`fixed z-40 inset-0 overflow-y-auto ${isDarkMode && "dark"
                    }`}
                initialFocus={cancelButtonRef}
                onClose={close}
            >
                <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-80 transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className='hidden sm:inline-block sm:align-middle sm:h-screen'
                        aria-hidden='true'
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className={clsName}>
                            <div className={`${!isFullTransparent && "bg-theme-light dark:bg-dark-gray"} px-4 pt-4 pb-4 sm:p-6 sm:pb-6`}>
                                {!hideTitle && (
                                    <div className='flex justify-between mt-2 mb-1 px-4'>
                                        <div className=''>
                                            <Dialog.Title
                                                as='h3'
                                                className='text-dark-gray1 dark:text-light-gray text-3xl font-medium'
                                            >
                                                {title}
                                            </Dialog.Title>
                                            {subTitle && (
                                                <Text as='p' className='mt-2'>
                                                    {subTitle}
                                                </Text>
                                            )}
                                        </div>
                                        <span
                                            className='text-3xl mt-2'
                                            onClick={close}
                                        >
                                            <CloseIcon
                                                fill={`${isDarkMode ? "#eee" : "#222"
                                                    }`}
                                            />
                                        </span>
                                    </div>
                                )}
                                {props.children}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
