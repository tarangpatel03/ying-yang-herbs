import { X } from "lucide-react";
import { forwardRef, useImperativeHandle, useState } from "react";

import { WebButton, WebDropdown, WebInput, WebText } from "@/components";
import { BUTTON_TYPES } from "@/types/ui.types";

import type { LoginDialogRef } from "./LoginDialog";
import type { RefObject } from "react";

type Props = React.ComponentProps<"input"> & {
  loginRef: RefObject<LoginDialogRef | null>;
};

export type SignupDialogRef = {
  open: () => void;
  close: () => void;
};

export const SignupDialog = forwardRef<SignupDialogRef, Props>(
  ({ loginRef }, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useImperativeHandle(ref, () => ({
      close: () => {
        setOpen(false);
      },
      open: () => {
        setOpen(true);
      },
    }));

    const onLoginClick = () => {
      setOpen(false);
      loginRef.current?.open();
    };

    const handleCreateAccount = () => {
      console.log(name, gender, email, password);
      setOpen(false);
    };

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-999 flex justify-center items-center bg-drop-shadow backdrop-blur-sm">
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
            <WebText className="text-2xl font-semibold">
              Let’s Get Started
            </WebText>
            <WebText className="text-sm text-text-secondary">
              Please enter your details to create account.
            </WebText>
          </div>
          <div className="flex flex-col gap-5">
            <WebInput
              required
              name="Full Name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />

            <WebDropdown
              name="Gender"
              options={["male", "female"]}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />

            <WebInput
              required
              name="Email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <WebInput
              required
              name="Password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <WebButton
              className="font-medium text-lg py-2 px-8"
              buttonType={BUTTON_TYPES.PRIMARY}
              onClick={handleCreateAccount}
            >
              <WebText>Create Account</WebText>
            </WebButton>

            <div className="flex align-middle items-center gap-1">
              <WebText className="font-normal text-[16px] text-text-secondary">
                Already have an account?
              </WebText>
              <WebButton buttonType={BUTTON_TYPES.TEXT} onClick={onLoginClick}>
                <WebText className="font-normal text-[16px]">Sign In</WebText>
              </WebButton>
            </div>
          </div>
        </dialog>
      </div>
    );
  },
);
