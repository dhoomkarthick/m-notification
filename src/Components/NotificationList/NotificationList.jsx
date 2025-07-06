import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/userSlice";
import NotificationCart from "./NotificationCart";

const NotificationList = () => {
    const userInfo = useSelector((store) => store.user.userInfo);
    const dispatch = useDispatch();
    return (
        <div className=" bg-[#f1faee] min-h-[100vh] max-h-full ">
            <h1 className=" font-bold text-2xl text-center text-[#F1EFEC]">Notivication List</h1>
            <NotificationCart />
            <div className=" flex justify-center ">
                <div className="fixed w-11/12 bottom-2 overflow-hidden bg-[#ebeaea] p-1 shadow-lg rounded-2xl">
                    <div className="flex justify-between bg-[#ebeaea] rounded-[10px]">
                        <button className="bg-[#578E7E] text-[#000000] w-6/12 text-lg font-bold px-2 py-2" style={{ borderRadius: "10px" }}>Approve</button>
                        <button className="text-[#000000] text-lg w-6/12 font-bold px-2 py-2">Reject</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationList;