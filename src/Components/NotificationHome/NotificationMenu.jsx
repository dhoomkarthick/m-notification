import settings from "../../assets/settings.png";
import pending from "../../assets/wall-clock.png";
import shoppingCart from "../../assets/shopping-cart.png";
import crossImg from "../../assets/cross-button.png";
import menu from "../../assets/menu.png";
import { GrMenu } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const NotificationMenu = ({ setIsMenuOpen }) => {

    const filterList = [{
        id: 1,
        name: "Menu",
        bgColor: "bg-amber-300",
        textColor: "text-black",
        icon: <GrMenu />
    }, {
        id: 2,
        name: "Dashboard",
        bgColor: "bg-green-500",
        textColor: "text-white",
        icon: <MdDashboard />
    }, {
        id: 3,
        name: "Settings",
        bgColor: "bg-yellow-500",
        textColor: "text-black",
        icon: <IoMdSettings />
    },
    {
        id: 5,
        name: "Cart",
        bgColor: "bg-yellow-500",
        textColor: "text-black",
        icon: <FaShoppingCart />
    }];

    const handleMenuBar = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className="flex justify-between items-center py-2 gap-3 fixed w-full bottom-0 overflow-hidden h-[60px] bg-[#ebeaea] p-2 shadow-lg z-10">
                {
                    filterList.map((item) => {
                        return (
                            <div>
                                <div key={item.id} className={`w-[50px] h-[50px]  rounded-2xl flex flex-col justify-center items-center cursor-pointer`} onClick={() => {
                                    item.name === "Menu" ? handleMenuBar() : "";
                                }}>
                                    {/* <img className=" w-[20px]" src={item.imageURL} /> */}
                                    {item.icon}
                                    <p className="text-[12px] font-bold text-center m-0">{item.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NotificationMenu;