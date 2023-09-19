import React from "react";
import Ticket from "./Ticket";
import './App.css';
import { logoSelector } from "./logoSelector";
import plus from "./icons/plus.png";
import dots from "./icons/dots.png"
import { PRIORITY, TITLE } from "./constants";

export default function TicketColumn({ title, ticketList, group, order, users }) {

    const RenderTickets = () => {
        var sortedTickets;
        if (order === PRIORITY) {
            sortedTickets = ticketList.sort((a, b) => b.priority - a.priority);
        } else if (order === TITLE) {
            sortedTickets = ticketList.sort((a, b) => a.title - b.title);
        }
        return sortedTickets.map((ticket, index) => {
            var currentUser = users.filter((user, index)=>{ 
                return ticket.userId === user.userId 
            });
            // console.log("currentUser is " + currentUser);
            return <Ticket 
                key={index} 
                ticketData={ticket}
                group={group} 
                userOnline={currentUser[0].available}
            />
        });    
    }

    return (
        <div className="TicketColumn">
            <div className="ColumnName">
                {logoSelector(title)}     
                {title}
                <span style={{marginLeft :"10px"}}>{ticketList.length}</span>
                <div className="Plusmore">
                <img src={plus} alt="plus" />
                <img src={dots} alt="more" />
                </div>
            </div>
            <div><RenderTickets /></div>
        </div>
    );

}