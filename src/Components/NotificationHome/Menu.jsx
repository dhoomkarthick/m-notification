import { Link } from "react-router-dom";
import close from "../../assets/close.png";
const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
    const menu = [{
        name: "Notification List",
        path: "/notification-list",
    }];
    return (
        <>
            {isMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 backdrop-blur-xs z-20 transition-opacity duration-300"
                        style={{ backgroundColor: "rgba(25, 25, 24, 0.3)" }}
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    <div className="bg-[#fefae0] h-full w-8/12 fixed top-0 left-0 transition-transform duration-300 ease-in-out translate-x-0 z-20 overflow-scroll">
                        <div className="pt-[2vh] pb-[10vh] px-2">
                            <div className="mb-2 border-b-2 border-[#a4c3b2] pb-2">
                                <div className=" flex justify-between items-center">
                                    <p className="font-bold text-lg mb-3">Logo</p>
                                    <img src={close} className=" w-[15px] h-[15px] mb-3 cursor-pointer" onClick={() => setIsMenuOpen((state) => !state)} />
                                </div>

                                <div className="">
                                    <input className=" bg-[#f2dba3] border-none text-[#e9edc9] w-full  font-bold text-xl h-[40px] rounded-xl" />
                                </div>
                            </div>

                            <ul className="p-0">
                                {menu.map((item, index) => (
                                    <li className="font-medium text-medium text-[#536b78] cursor-pointer" key={index}>
                                        <Link to={item.path} style={{ textDecoration: "none", color: "#536b78" }}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Menu;