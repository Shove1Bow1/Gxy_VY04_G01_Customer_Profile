import React,{useContext,useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Navigator/NavbarInfo";
import ProfileSetting from "./EditProfile/ProfileSetting";
import CreditCard from "./CreditCard/CreditCardManager";
import Point from "./Point/App_Bouns_Points";
import "./ProfileController.css";
import HistoryTransaction from "./HistoryTransaction/HistoryTransaction";
export default function ProfileController(props){
    return (
        <div className="customer-profile-controller" style={{heigh:"1000px"}}>
            <div className="customer-sidebar">
                <SideBar value={props.value}/>
            </div>
            <div style={{Width:"100%",Height:"800px"}}>
                <Routes>
                    <Route path="/" element={<ProfileSetting value={props.value}/>} />
                    <Route path="/Point" element={<Point value={props.value}/>} />
                    <Route path="/CreditCard" element={<CreditCard value={props.value}/>} />
                    <Route path="/HistoryTransaction" element={<HistoryTransaction value={props.value}/>}/>
                </Routes>
            </div>
        </div>
    )
}