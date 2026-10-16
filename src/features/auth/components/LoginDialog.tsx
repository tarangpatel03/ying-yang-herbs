import { useSetAtom } from "jotai";
import { X } from "lucide-react";
import { forwardRef, useImperativeHandle, useState } from "react";

import { WebButton, WebInput, WebText } from "@/components";
import { webAtoms } from "@/store";
import { BUTTON_TYPES } from "@/types";

import type { SignupDialogRef } from "./SignupDialog";
import type { RefObject } from "react";

type Props = React.ComponentProps<"dialog"> & {
  signupRef: RefObject<SignupDialogRef | null>;
};

export type LoginDialogRef = {
  open: () => void;
  close: () => void;
};

export const LogInDialog = forwardRef<LoginDialogRef, Props>(
  ({ signupRef }, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const setUser = useSetAtom(webAtoms.userAtom);
    const setLoggedIn = useSetAtom(webAtoms.isLoggedInAtom);

    useImperativeHandle(ref, () => ({
      close: () => {
        setOpen(false);
      },
      open: () => {
        setOpen(true);
      },
    }));

    const onSignupClick = () => {
      setOpen(false);
      signupRef.current?.open();
    };

    const handleLogin = () => {
      if (email === "user@gmail.com" && password === "123456") {
        setUser({
          name: "User",
          email: email,
          gender: Math.random() >= 0.5 ? "male" : "female",
        });
        setLoggedIn(true);
        setOpen(false);
        setEmail("");
        setPassword("");
      } else {
        console.log("Please Fill All the Data");
      }
    };

    if (!open) return null;

    return (
      <div
        className={`fixed inset-0 z-999 flex justify-center items-center bg-drop-shadow backdrop-blur-sm`}
      >
        <dialog
          open={open}
          className="relative bg-bg p-8 rounded-2xl w-125 flex flex-col gap-8"
        >
          <div className="absolute top-6 right-6">
            <WebButton buttonType={BUTTON_TYPES.TEXT}>
              <X size={30} onClick={setOpen.bind(null, false)} />
            </WebButton>
          </div>
          <div className="flex flex-col gap-1">
            <WebText className="text-2xl font-semibold">Welcome Back</WebText>
            <WebText className="text-sm text-text-secondary">
              Please enter your details to sign in.
            </WebText>
          </div>
          <div className="flex flex-col gap-5">
            <WebInput
              required
              name="Email"
              value={email}
              placeholder="user@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <WebInput
              required
              name="Password"
              type="password"
              value={password}
              placeholder="123456"
              onChange={(e) => setPassword(e.target.value)}
            />

            <WebButton
              className="font-medium text-lg py-2 px-8"
              buttonType={BUTTON_TYPES.PRIMARY}
              onClick={handleLogin}
            >
              <WebText>Sign in</WebText>
            </WebButton>

            <div className="flex align-middle items-center gap-1">
              <WebText className="font-normal text-[16px] text-text-secondary">
                Already have an account?
              </WebText>
              <WebButton buttonType={BUTTON_TYPES.TEXT} onClick={onSignupClick}>
                <WebText className="font-normal text-[16px]">
                  Create Account
                </WebText>
              </WebButton>
            </div>
          </div>
        </dialog>
      </div>
    );
  },
);
