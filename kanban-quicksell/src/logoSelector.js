import React from "react";

import backlog from './icons/backlog.png';
import todo from './icons/todo.png';
import inprogress from './icons/Inprogress.png';
import done from './icons/done.png';
import canceled from './icons/canceled.png';

import urgent from './icons/urgent.png';
import high from './icons/high.png';
import medium from './icons/medium.png';
import low from './icons/low.png';
import nopriority from './icons/nopriority.png';

import userlogo from './icons/user.png';

export const logoSelector = (title) => {
    switch (title) {

        case "Backlog":
            return <img src={backlog} alt="Backlog logo" />
            
        case "Todo":
            return <img src={todo} alt="Todo logo" />
            
        case "In progress":    
        case "In Progress":
            return <img src={inprogress} alt="In progress logo" />
            
        case "Done":
            return <img src={done} alt="Done logo" />
            
        case "Canceled":
            return <img src={canceled} alt="Canceled logo" />
            

        case 4:
        case "Urgent":
            return <img src={urgent} alt="Urgent logo" />
            
        case 3:
        case "High":
            return <img src={high} alt="High priority logo" />
            
        case 2:
        case "Medium":
            return <img src={medium} alt="Medium priority logo" />
            
        case 1:
        case "Low":
            return <img src={low} alt="Low priority logo" />
            
        case 0:
        case "No Priority":
            return <img src={nopriority} alt="No priority logo" />

        default:
            return <img src={userlogo} alt="User logo" />
    }
}