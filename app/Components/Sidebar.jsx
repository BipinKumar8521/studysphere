"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./Sidebar.module.css"; // Ensure this path matches your CSS file's location

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <Link href="/" className={styles.sidebarLogo}>
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className={styles.sidebarNav}>
          <SignedIn>
            <ul className={styles.navElements}>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.label}
                    className={`${styles.navElement} ${
                      isActive
                        ? styles.navElementActive
                        : styles.navElementInactive
                    }`}
                  >
                    <Link href={link.route} className={styles.sidebarLink}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive ? styles.imageActive : ""}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className={styles.navElements}>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.label}
                    className={`${styles.navElement} ${
                      isActive
                        ? styles.navElementActive
                        : styles.navElementInactive
                    }`}
                  >
                    <Link href={link.route} className={styles.sidebarLink}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive ? styles.imageActive : ""}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className={styles.userButton}>
                <UserButton afterSignOutUrl="/sign-in" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <button className={styles.loginButton}>
              <Link href="/sign-in" className={styles.sidebarLink}>
                Login
              </Link>
            </button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
