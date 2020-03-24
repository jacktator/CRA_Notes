import React from "react";
import DesktopAppBar from './Desktop';
import {dummyUser as user} from "../../data/user";

export default { title: 'Navbar' };

export const Desktop = () => <DesktopAppBar user={user}/>;
