

import { useState } from "react";
import crossImg from "../../assets/cross-button.png";
import { SiTicktick } from "react-icons/si";
import { FaTimesCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import Avatar from "react-avatar";

const NotificationFilters = ({ handleFilterFixed, fixedHeader }) => {
    const [filter, setFilter] = useState(1);

    const filterList = [
        {
            id: 1,
            name: "All",
            bgColor: "bg-[#a4c3b2]",
            textColor: "text-white",
            // icon: <SiTicktick />
        },
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

    return (
        <>
            <div className="flex justify-between items-center py-3 px-2 gap-2 h-[50px]">
                <div className=" flex gap-2 items-center justify-center">
                    <img src="https://cdn-icons-png.freepik.com/512/6645/6645163.png" className=" w-[25px]" />
                    <p className="mb-0">Notification App</p>
                </div>
                <Avatar name="Karthick" size="32" round={true} />
            </div>
            <div className={`flex justify-between items-center py-2 ${fixedHeader ? "fixed w-full top-0 bg-[#FDFAF6]" : ""} overflow-hidden h-[50px] border-b-[1px] border-b-[#bcbd8b] p-2 shadow-xl z-10`}>
                {
                    filterList.map((item) => {
                        const icon = item.icon;
                        return (
                            <div key={item.id} className={`w-fit py-2 my-2  rounded-lg flex gap-2 justify-center items-center ${filter === item.id ? "text-white bg-[#99BC85]" : "text-[#99BC85] bg-[#E4EFE7]"}  cursor-pointer`}>
                                <div className=" px-1 flex items-center gap-1 " onClick={() => setFilter(item.id)}>
                                    {/* <img src={crossImg} className=" w-[17px]" /> */}
                                    {item.icon}
                                    <p className="text-[11px] font-bold  text-center m-0">{item.name}-({100})</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NotificationFilters;