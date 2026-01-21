import Avatar from "../Avatar/Avatar";
import { Dialog, DialogContent, DialogTrigger } from "../Dialog";
import Divider from "../Divider/Divider";
import { Navbar, NavbarItem } from "../Navbar";
import { UserMenu,UserMenuFooter, UserMenuHeader } from "../UserMenu/UserMenu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <img src="/assets/images/logo.svg" alt="Prip logo" />
      <Navbar>
        <NavbarItem active>Dashboard</NavbarItem>
        <NavbarItem>About us</NavbarItem>
      </Navbar>
      <Dialog relativeTo="parent">
        <DialogTrigger classes={styles.HeaderUserTrigger}>
          <span>Bio Pharma</span>
          <img src="/assets/images/user-icon.svg" alt="User icon" />
        </DialogTrigger>
        <DialogContent position="bottom-right" >
          <UserMenu>
            <UserMenuHeader>
              <Avatar initial="B" />
              <div style={{textAlign: "center"}}>
                <h2>Bio Pharma Solutions</h2>
                <p>contact@bioPharma.com</p>
              </div>
            </UserMenuHeader>
            <Divider />
            <UserMenuFooter>
              <p>Logout</p>
            </UserMenuFooter>
          </UserMenu>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
