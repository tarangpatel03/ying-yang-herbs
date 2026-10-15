import { useAtomValue } from "jotai";
import { useRef } from "react";

import { LogInDialog, SignupDialog } from "@/features/auth";
import { webAtoms } from "@/store/atoms";
import { BUTTON_TYPES } from "@/types";

import { WebButton, WebIcon, WebText } from "../ui";

import type { LoginDialogRef, SignupDialogRef } from "@/features/auth";

export const WebHeader = () => {
  const logInDialogRef = useRef<LoginDialogRef>(null);
  const signupDialogRef = useRef<SignupDialogRef>(null);
  const isLoggedIn = useAtomValue(webAtoms.isLoggedInAtom);

  console.log(isLoggedIn);

  const onLoginClick = () => {
    logInDialogRef.current?.open();
  };

  return (
    <>
      <div
        className={`flex justify-between align-middle items-center py-7.5 px-27.75 `}
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
            <WebButton buttonType={BUTTON_TYPES.TEXT}>
              <WebText>Questionnaire</WebText>
            </WebButton>
          )}
          <WebButton buttonType={BUTTON_TYPES.PRIMARY} onClick={onLoginClick}>
            <WebText>Login</WebText>
          </WebButton>
        </div>
      </div>
      <LogInDialog ref={logInDialogRef} signupRef={signupDialogRef} />
      <SignupDialog ref={signupDialogRef} loginRef={logInDialogRef} />
    </>
  );
};
