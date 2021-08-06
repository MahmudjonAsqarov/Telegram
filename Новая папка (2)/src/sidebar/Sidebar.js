import React, { useEffect, useState } from 'react';
import '../sidebar/Sidebar.css';
import Personal from '../components/personal/Personal';
import { FiEdit2, FiMenu, FiSearch, FiArrowLeft } from 'react-icons/fi';
import searchResult from '../SEARCH_RESULTS.json';
import { BiAdjust } from "react-icons/bi";

function Sidebar() {
    const [isFocused, setIsFocused] = useState(false);
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [darkMode, setDarkmode] = useState(false);
    const [colorValue, setColorValue] = useState("")
    const personalChatData = [
        {
            id: 1,
            username: "Soginboyev Oybek",
            lastMessage: "key={productItem}",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnxlR6bxMYeS7ilYQI1A9FfBfybDCKCoWbw&usqp=CAU",
        },
        {
            id: 2,
            username: "Eldorbek oxunov",
            lastMessage: "hello bro",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 3,
            username: "Gulomjonov Shohruzbek",
            lastMessage: "please install",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 4,
            username: "Soginboyev Oybek",
            lastMessage: "key={productItem}",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnxlR6bxMYeS7ilYQI1A9FfBfybDCKCoWbw&usqp=CAU",
        },
        {
            id: 5,
            username: "Eldorbek oxunov",
            lastMessage: "hello bro",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 6,
            username: "Gulomjonov Shohruzbek",
            lastMessage: "please install",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 7,
            username: "Soginboyev Oybek",
            lastMessage: "key={productItem}",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnxlR6bxMYeS7ilYQI1A9FfBfybDCKCoWbw&usqp=CAU",
        },
        {
            id: 8,
            username: "Eldorbek oxunov",
            lastMessage: "hello bro",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 9,
            username: "Gulomjonov Shohruzbek",
            lastMessage: "please install",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 10,
            username: "Soginboyev Oybek",
            lastMessage: "key={productItem}",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnxlR6bxMYeS7ilYQI1A9FfBfybDCKCoWbw&usqp=CAU",
        },
        {
            id: 11,
            username: "Eldorbek oxunov",
            lastMessage: "hello bro",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 12,
            username: "Gulomjonov Shohruzbek",
            lastMessage: "please install",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 13,
            username: "Gulomjonov Shohruzbek",
            lastMessage: "please install",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 14,
            username: "Soginboyev Oybek",
            lastMessage: "key={productItem}",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnxlR6bxMYeS7ilYQI1A9FfBfybDCKCoWbw&usqp=CAU",
        },
        {
            id: 15,
            username: "Eldorbek oxunov",
            lastMessage: "hello bro",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
        {
            id: 16,
            username: "Gulomjonov Shohruzbek",
            lastMessage: "please install",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_iqGNdD4GH3TF01wwe0LgIwgwl7pODjSEg&usqp=CAU",
        },
    ]
    const handleNewMessage = (e) => {
        const newChatOptions = document.querySelector('.new__chatOptions');
        newChatOptions.classList.add('new__chatOptionsActive');
    }
    const handleNewMessageHide = (e) => {
        const newChatOptions = document.querySelector('.new__chatOptions');
        newChatOptions.classList.remove('new__chatOptionsActive');
    }
    const handleSearch = (e) => {
        const searchResults = document.querySelector('.search__results');
        const sidebarChat = document.querySelector('.sidebar__chats');
        const searchInput = document.querySelector('.search__bar');
        searchInput.classList.add('activeSearch');
        searchResults.classList.add('activeResult')
        sidebarChat.classList.add('activeChat')
        setIsFocused(true);
    }
    const hideSearch = (e) => {
        const searchResults = document.querySelector('.search__results');
        const sidebarChat = document.querySelector('.sidebar__chats');
        const searchInput = document.querySelector('.search__bar');
        searchInput.classList.remove('activeSearch');
        searchResults.classList.remove('activeResult')
        sidebarChat.classList.remove('activeChat')
        setIsFocused(false);
    }
    const openMenu = (e) => {
        setisOpenMenu(!isOpenMenu);  // shu ko'rinishi juda tushunarli 
        const menu = document.querySelector('.menu');
        if (!isOpenMenu) {
            menu.classList.add('activeMenu')
            // setisOpenMenu(true)   //shunday qilgandan ko'ra
        }
        else {
            menu.classList.remove('activeMenu')
            // setisOpenMenu(false)
        }

    }
    
    // useEffect(() => {
    //     if (localStorage.getItem("Theme") === "lightMode") {
    //         const sidebar = document.querySelector('.sidebar');
    //         sidebar.classList.add("Lightmode");
    //         setDarkmode(false)
    //     }

    //     else if (localStorage.getItem("Theme") === "darkMode") {
    //         const sidebar = document.querySelector('.sidebar');
    //         sidebar.classList.remove("Lightmode");
    //         setDarkmode(true)
    //     }
    // }, [darkMode]);
    const setLightMode = (e) => {   // onClick bo'lganda dark Mode ishlaydi
        setDarkmode(!darkMode);
        if (darkMode) {
            localStorage.setItem("Theme", "lightMode");
        } else {
            localStorage.setItem("Theme", "darkMode");
        }

    }

    const setLinghtMode = (e) => {
        localStorage.setItem("Theme", "lightMode");
    }
    useEffect(() => {
        if (localStorage.getItem("Theme") === "lightMode") {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.add('lightmode');
            const searchProfile = document.querySelector('.search__profile')
            searchProfile.classList.add('searchProfileActive');
            setDarkmode(false)
        }
        else if (localStorage.getItem("Theme") === "darkMode") {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('lightmode');
            const searchProfile = document.querySelector('.search__profile')
            searchProfile.classList.add('searchProfileActive');
            setDarkmode(true);
        }
    }, [darkMode]);  // Shu yergacha tayyor

    return (
        <div className="sidebar" >

            <div className="sidebar__navigation"  style={colorValue ? {backgroundColor:colorValue} : {backgroundColor:"#212121"}}>
                <input type="color"  value={colorValue} onChange={(e) => setColorValue(e.target.value)} />
                <div className="hamburger__menu" >
                    {!isFocused ? <FiMenu onClick={openMenu} /> : <FiArrowLeft />}
                </div>
                <div className="search__bar">
                    <FiSearch className="search_bar_svg" onClick={setLinghtMode} />
                    <input type="text" placeholder="Search" id="search__input" onBlur={hideSearch} onFocus={handleSearch} />
                </div>
                <div className="menu">
                    <ul className="menu_collection">
                        <li className="menu_collectionItem"> <BiAdjust onClick={setLightMode} />Dark Mode </li>
                    </ul>
                </div>
            </div>

            <div className="search__results">
                {
                    searchResult.map(searchItem => (
                        <div className="search__profile">
                            <div className="searchedProfileImage" style={{ backgroundImage: `url(${searchItem.profileImage})` }}></div>
                            <p>{searchItem.nickname}</p>
                        </div>
                    ))
                }
            </div>
            <div className="sidebar__chats">
                {
                    personalChatData.map(chatInfo =>
                    (
                        <Personal
                            key={chatInfo.id}
                            username={chatInfo.username}
                            lastMessage={chatInfo.lastMessage}
                            image={chatInfo.image}
                        />
                    )
                    )
                }
            </div>
            <div className="new__chatOptions">
                <ul className="new__chatCollection">
                    <li>New Channel</li>
                    <li>New Group</li>
                    <li>New Secret Chat</li>
                </ul>
            </div>
            <button className="new" onFocus={handleNewMessage} onBlur={handleNewMessageHide}>
                <FiEdit2 />
            </button>
        </div>
    )
}

export default Sidebar;