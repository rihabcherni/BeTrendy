import React from "react";
import {BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { FaFileInvoiceDollar, FaMoneyCheck,FaUsers} from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactsIcon from '@mui/icons-material/Contacts';

export const SidebarAdmin = [
  {id: 1, name: "Dashboard",  path:"/admin", icon: <ImStatsDots/>, size:"meduim"},
  {id: 2, name: "Customers",  path:"/admin/customers", icon: <FaUsers/>, size:"meduim"},

  {id: 3,name: "Admin", path:"/admin/admins", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
  {id: 4,name: "Notifications", path:"/admin/notification", icon: <MdNotificationsActive/>, size:"meduim"},

    {id: 9,name: "Billing", path:"/admin/factures", icon: <FaFileInvoiceDollar/>, size:"meduim"},
    {id: 10,name: "payement", path:"/admin/paiements", icon: <FaMoneyCheck/>, size:"meduim"},      
    {id: 12,name: "Reclamation", path:"/admin/reclamation", icon: <BsFillEnvelopeExclamationFill/>, size:"meduim"},
    {id:13, name: "Support",path:"/admin/support", icon: <ContactsIcon/>, size:"meduim"},
  ];
  