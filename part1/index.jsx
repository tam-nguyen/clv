import React, { Component } from 'react';

class Nav extends Component {
    
    render() {
        return (
            <div>
                <User userType>//userType determines type of login user: admin, consulting or student
                    <MenuList menuList>//menuList will list of nav user have

                    </MenuList>
                </User>            
            </div>
        );
    }
}

export default Nav;