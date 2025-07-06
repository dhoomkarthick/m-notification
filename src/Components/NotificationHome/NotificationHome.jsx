import NotificationFilters from "./NotificationFilters";
import NotificationCart from "../NotificationList/NotificationCart";
import NotificationMenu from "./NotificationMenu";
import { useState } from "react";
import Menu from "./Menu";
import { MdDashboard } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";
import { FaTimesCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const NotificationHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [fixedHeader, setFixedHeader] = useState(false);
    const [filterListActive, setFilterListActive] = useState(false);
    const [filter, setFilter] = useState(1);

    const handleFilterFixed = () => {
        if (window.scrollY >= 50) {
            setFixedHeader(true);
        } else {
            setFixedHeader(false);
        }
    };

    const filterList = [
        // {
        //     id: 1,
        //     name: "All",
        //     bgColor: "bg-[#a4c3b2]",
        //     textColor: "text-white",
        //     // icon: <SiTicktick />
        // },
        {
            id: 2,
            name: "Approve",
            bgColor: "bg-[#a4c3b2]",
            textColor: "text-white",
            icon: <SiTicktick size={14} />
        }, {
            id: 3,
            name: "Reject",
            bgColor: "bg-[#edafb8]",
            textColor: "text-white",
            icon: <FaTimesCircle size={14} />
        }, {
            id: 4,
            name: "Pending",
            bgColor: "bg-[#adb5bd]",
            textColor: "text-black",
            icon: <IoIosTime size={14} />
        }];

    window.addEventListener("scroll", handleFilterFixed);

    return (
        <>
            <div className="min-h-[100vh] max-h-full relative">
                <NotificationFilters handleFilterFixed={handleFilterFixed} fixedHeader={fixedHeader} />

                <div className={`${fixedHeader ? "pt-[70px]" : "pt-[20px]"} pb-[13vh]`}>
                    <NotificationCart />
                    <NotificationCart />
                    <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>

                <div className="flex justify-center">
                    <AnimatePresence>
                        {filterListActive && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="fixed bottom-32 rounded-xl bg-white w-5/12 h-[150px] flex flex-col items-center"
                            >
                                {filterList.map((item) => {
                                    const icon = item.icon;
                                    return (
                                        <div
                                            key={item.id}
                                            className={`w-fit py-2 my-2 rounded-lg flex gap-2 justify-center items-center ${filter === item.id
                                                ? "text-white bg-[#99BC85]"
                                                : "text-[#99BC85] bg-[#E4EFE7]"
                                                } cursor-pointer`}
                                        >
                                            <div
                                                className="px-1 flex items-center gap-1 min-w-[120px] max-w-full justify-center"
                                                onClick={() => setFilter(item.id)}
                                            >
                                                {icon}
                                                <p className="text-[11px] font-bold text-center m-0">
                                                    {item.name}-({100})
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        <motion.div
                            key="toggleButton"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed bottom-[73px] bg-blue-300 p-2 rounded-full cursor-pointer"
                            onClick={() => setFilterListActive((state) => !state)}
                        >
                            {!filterListActive ? <MdDashboard size={25} /> : <RxCross2 size={25} />}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <NotificationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div >
        </>
    )
}

export default NotificationHome;