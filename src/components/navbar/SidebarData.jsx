import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Discover',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
    {
        title: 'Awards',
        path: '/products',
        icon: <FaIcons.FaRegStar />,
        cName: 'nav-text',
    },
    {
        title: 'Celebrities',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
    },
];
