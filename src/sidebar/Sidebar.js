import React, { useEffect, useState } from 'react';
import '../sidebar/Sidebar.css';
import Personal from '../components/personal/Personal';
import { FiEdit2, FiMenu, FiSearch, FiArrowLeft } from 'react-icons/fi';
import searchResult from '../SEARCH_RESULTS.json';
// import { BiAdjust } from "react-icons/bi";
// import { IoMdContact} from 'react-icons/io';
import { Link } from 'react-router-dom';
import sidebarData from '../SEARCH_RESULTS.json';


// material ui icons
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import TranslateIcon from '@material-ui/icons/Translate';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function Sidebar() {
    const [isFocused, setIsFocused] = useState(false);
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [darkMode, setDarkmode] = useState(false);
    const [oybek, setOybek] = useState(false);


    const handleNewMessage = (e) => {
        const newChatOptions = document.querySelector('.new__chatOptions');
        if (!oybek) {
            newChatOptions.classList.add('new__chatOptionsActive');
            setOybek(true)
        }
        else {
            newChatOptions.classList.remove('new__chatOptionsActive');
            setOybek(false);
        }
    }
    const handleNewMessageHide = (e) => {
        const newChatOptions = document.querySelector('.new__chatOptions');
        if (!oybek) {
            newChatOptions.classList.add('new__chatOptionsActive');
            setOybek(true)
        }
        else {
            newChatOptions.classList.remove('new__chatOptionsActive');
            setOybek(false);
        }
    }

    const handleSearch = (e) => {
        const searchResults = document.querySelector('.search__results');
        const sidebarChat = document.querySelector('.sidebar__chats');
        const searchInput = document.querySelector('.search__bar');

        if (!isFocused) {
            searchInput.classList.add('activeSearch');
            searchResults.classList.add('activeResult')
            sidebarChat.classList.add('activeChat')
            setIsFocused(true);
        }
       
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
        setisOpenMenu(!isOpenMenu);
        const menu = document.querySelector('.menu');
        if (!isOpenMenu) {
            menu.classList.add('activeMenu')
            setisOpenMenu(true) 
        }
        else {
            menu.classList.remove('activeMenu')
            setisOpenMenu(false)
        }

    }

    const setLightMode = (e) => {
        setDarkmode(!darkMode);
        const darkModeIcon_Right = document.querySelector('.darkModeIcon_Right');
        const darkModeIcon = document.querySelector('.darkModeIcon');
        if (darkMode) {
            localStorage.setItem("Theme", "lightMode");
            darkModeIcon_Right.classList.add('activeRightMode');
            darkModeIcon.style.backgroundColor = 'grey';
        } else {
            localStorage.setItem("Theme", "darkMode");
            darkModeIcon_Right.classList.remove('activeRightMode');
            darkModeIcon.style.backgroundColor = 'slateblue';
        }
    }

    const setLight_Mode = (e) => {
        localStorage.setItem("Theme", "lightMode");
    }
    useEffect(() => {
        const darkModeIcon_Right = document.querySelector('.darkModeIcon_Right');
        const darkModeIcon = document.querySelector('.darkModeIcon');
        if (localStorage.getItem("Theme") === "lightMode") {
            const sidebar = document.querySelector('.sidebar');
            darkModeIcon_Right.classList.add('activeRightMode');
            darkModeIcon.style.backgroundColor = 'grey';
            sidebar.classList.add('lightmode');
            setDarkmode(false)
        }
        else if (localStorage.getItem("Theme") === "darkMode") {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('lightmode');
            darkModeIcon_Right.classList.remove('activeRightMode');
            darkModeIcon.style.backgroundColor = 'slateblue';
            setDarkmode(true)
        }
    }, [darkMode]);


    const chatSet = (e) => {
        const chat_settings = document.querySelector('.chat_settings');
        chat_settings.classList.add('activeChats')
    }

    const removeChats = (e) => {
        const chat_settings = document.querySelector('.chat_settings');
        chat_settings.classList.remove('activeChats');
    }

    const showChatOptions = (e) => {
        document.body.innerHTML += '<p>Right-click is disabled</p>';
        e.preventDefault();
       return false
       
    }

    return (
        <div className="sidebar" >
            <div className="sidebar__navigation">
                <div className="hamburger__menu">
                    {!isFocused ? <FiMenu onClick={openMenu} style={{ fontSize: "25px" }} /> : <FiArrowLeft onClick={hideSearch} />}
                </div>
                <div className="search__bar">
                    <FiSearch className="search_bar_svg" onClick={setLight_Mode} />
                    <input type="text" placeholder="Search" id="search__input"  onClick={handleSearch} />
                </div>
                <div className="menu">
                    <ul className="menu_collection">
                        <li className="collectionItem"> <BookmarkBorderRoundedIcon className="itemIcon" />Saved Message</li>
                        <li className="collectionItem"> <ArchiveOutlinedIcon className="itemIcon" />Saved Message</li>
                        <li className="collectionItem"> <PersonOutlineIcon className="itemIcon" />Saved Message</li>
                        <li className="collectionItem"> <SettingsIcon className="itemIcon" />Saved Message</li>
                        <li className="collectionItem" onClick={setLightMode}> <NightsStayIcon className="itemIcon" />Dark Mode
                            <div className="darkModeIcon">
                                <div className="darkModeIcon_Right"></div>
                            </div>
                        </li>
                        <li className="collectionItem" onClick={chatSet}> <ModeCommentOutlinedIcon className="itemIcon" />Chat Settings</li>
                        <li className="collectionItem"> <ContactSupportOutlinedIcon className="itemIcon" />Saved Message</li>
                        <li className="collectionItem"> <BugReportOutlinedIcon className="itemIcon" />Saved Message</li>
                        <li className="collectionItem"> <SortByAlphaIcon className="itemIcon" />Saved Message</li>
                        <li className="collectionItem"> <TranslateIcon className="itemIcon" />Saved Message</li>
                        <li className="collectionItem webk">Telegram Webk alpha 0.1.0</li>
                    </ul>
                    <div className="chat_settings">
                        <div className="chat_header">
                            <ArrowBackOutlinedIcon onClick={removeChats} />
                            <CloseOutlinedIcon />
                        </div>
                        <div className="chat_body">
                            <p>Theme</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search__results">
                {
                    searchResult.map(searchItem => (
                        <div key={searchItem.id} className="search__profile">
                            <div className="searchedProfileImage" style={{ backgroundImage: `url(${searchItem.profileImage})` }}></div>
                            <p>{searchItem.nickname}</p>
                        </div>
                    ))
                }
            </div>
            <div className="sidebar__chats" onContextMenu={showChatOptions}>
                {
                    sidebarData.map(chatInfo =>
                    (
                        <Link key={chatInfo.id} to={`/${chatInfo.id}`}>
                            <Personal
                                username={chatInfo.username}
                                lastMessage={chatInfo.lastMessage}
                                image={chatInfo.image}
                            />
                        </Link>
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
            <button className="new" onClick={handleNewMessage} onBlur={handleNewMessageHide}>
                <FiEdit2 />
            </button>
        </div>
    )
}

export default Sidebar;