import { Navbar, NavbarBrand, NavbarItem, NavbarContent, Link, Button } from '@nextui-org/react';

export default function NavbarUI() {
    return (
        <Navbar isBordered className={'dark'}>
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent>asdada</NavbarContent>
        </Navbar>
    )
}