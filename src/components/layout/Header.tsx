import { useAtom, useSetAtom } from "jotai";
import { UserCircle2Icon } from "lucide-react";
import { useRef } from "react";
import { NavLink } from "react-router";

import { LogInDialog, SignupDialog } from "@/features/auth";
import { ROUTE_PATH } from "@/routes";
import { webAtoms } from "@/store/atoms";
import { BUTTON_TYPES } from "@/types";

import { WebButton, WebIcon, WebText } from "../ui";

import type { LoginDialogRef, SignupDialogRef } from "@/features/auth";

export const WebHeader = () => {
  const logInDialogRef = useRef<LoginDialogRef>(null);
  const signupDialogRef = useRef<SignupDialogRef>(null);
  const [isLoggedIn, setIsLoggedIn] = useAtom(webAtoms.isLoggedInAtom);
  const setUser = useSetAtom(webAtoms.userAtom);

  const onLoginClick = () => {
    logInDialogRef.current?.open();
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <>
      <div
        className={`fixed flex z-999  bg-bg justify-between align-middle items-center py-7.5 px-27.75 w-full`}
      >
        <WebIcon source="ic_logo" sizes="36" />
        <div className="flex gap-6">
          <WebButton buttonType={BUTTON_TYPES.TEXT}>
            <WebText>Home</WebText>
          </WebButton>
          <WebButton buttonType={BUTTON_TYPES.TEXT}>
            <WebText>About</WebText>
          </WebButton>
          <WebButton buttonType={BUTTON_TYPES.TEXT}>
            <WebText>Contact</WebText>
          </WebButton>
          {isLoggedIn && (
            <NavLink to={ROUTE_PATH.questionnaire}>
              <WebButton buttonType={BUTTON_TYPES.TEXT}>
                <WebText>Questionnaire</WebText>
              </WebButton>
            </NavLink>
          )}
          {isLoggedIn ? (
            <UserCircle2Icon onClick={onLogout} />
          ) : (
            <WebButton buttonType={BUTTON_TYPES.PRIMARY} onClick={onLoginClick}>
              <WebText>Login</WebText>
            </WebButton>
          )}
        </div>
      </div>
      <LogInDialog ref={logInDialogRef} signupRef={signupDialogRef} />
      <SignupDialog ref={signupDialogRef} loginRef={logInDialogRef} />
    </>
  );
};
