/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import DownArrow from "../../../assets/icons/DownArrow";

export default function Example({ current, setCurrent, className = "", options = [] }) {
    return (
        <Menu as='div' className={`relative inline-block text-left ${className}`}>
            <div>
                <Menu.Button className='flex items-center justify-between shadow-button  rounded-lg p-2 px-5 mt-20px mr-30px w-fit text-lg'>
                    <div className="pr-5">{current}</div>
                    <DownArrow />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <Menu.Items className='flex items-center justify-between text-sm  shadow-button  rounded-lg p-2 px-3  mr-30px  w-full'>
                    <div className='py-1'>
                        {options.map((option, id) => {
                            return (
                                <Menu.Item key={id}>
                                    {({ active }) => (
                                        <p
                                            className={` mb-2 cursor-pointer`}
                                            onClick={() => {
                                                setCurrent(option);
                                            }}
                                        >
                                            {option}
                                        </p>
                                    )}
                                </Menu.Item>
                            );
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
