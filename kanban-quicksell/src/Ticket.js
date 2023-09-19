import React, { useState, useEffect } from "react";
import userlogo from './icons/user.png';
import taglogo from './icons/tag.png';
import { logoSelector } from "./logoSelector";
import './ticket.css'

export default function Ticket ({ ticketData, group, userOnline }) {

    const [isGroupStatus, setIsGroupStatus] = useState(false);
    const [isGroupPriority, setIsGroupPriority] = useState(false);
    const [isGroupUser, setIsGroupUser] = useState(false);

    const truncatedTitle = (title) => {
        if (title.length >= 50) 
            return title.substring(0, 50) + "...";
        return title;
    };

    useEffect(() => {
        switch (group) {
            case "Status":
                setIsGroupStatus(true);
                break;
            case "Priority":
                setIsGroupPriority(true);
                break;
            case "User":
                setIsGroupUser(true);
                break;
            default:
                break;
        }
    }, [group]);

    // const ticketTags = ticketData.tag.map((tag, index) => {
    //     return <span key={tag}>{tag}</span>;
    // });

    const TicketTags = () => {
        return <span key={ticketData.tag}>{ticketData.tag}</span>;
    };

    return (
        <div className="Ticket">
            <div className="TicketId">
                {ticketData.id}
                {!isGroupUser && (
                <div className="UserIcon">
                    <img src={userlogo} alt="User Icon" />
                    <span className={userOnline === 1 ? "greenLogo" : "idleLogo"}></span>
                </div>)}
            </div>
            <div className="TicketTitle">
                {!isGroupStatus && (<div className="TicketStatus">{logoSelector(ticketData.status)}</div>)}
                <div className="TitleText">{truncatedTitle(ticketData.title)}</div>
            </div>
            <div className="TicketFooter">
            {!isGroupPriority && (<div className="TicketPriority">{logoSelector(ticketData.priority)}</div>)}
                <div className="TicketTag">
                    <img src={taglogo} alt="Tag icon" />
                    <TicketTags />
                </div>
            </div>

        </div>
    );
}