import { Mail, MapPin, PhoneCallIcon } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

import { WebIcon, WebText } from "../ui";

export const WebFooter = () => {
  const openWeb = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="px-27.75 py-18 justify-center items-center flex flex-col gap-12 bg-text">
      <div className="flex justify-between w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <WebIcon
              source="ic_logo_circular"
              className="w-9 h-9 object-contain"
            />
            <WebText className="font-semibold text-4xl text-button-bg">
              Yin Yang Herbs
            </WebText>
          </div>

          <Divider />

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <PhoneCallIcon className="w-6 h-6 text-bg" />
              <WebText className="font-normal text-[16px] text-bg">
                +91 123-456-7890
              </WebText>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-bg" />
              <WebText className="font-normal text-[16px] text-bg">
                user@gmail.com
              </WebText>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-bg" />
              <WebText className="font-normal text-[16px] text-bg">
                Ahmadabad, Gujarat, India
              </WebText>
            </div>
          </div>

          <Divider />

          {/* Socials */}
          <div className="flex gap-4">
            <div
              className="h-8 w-8 rounded-full bg-FFFFFF26 justify-center items-center flex"
              onClick={() => openWeb("https://www.instagram.com")}
            >
              <SiInstagram className="w-4 h-4 text-bg" />
            </div>
            <div
              className="h-8 w-8 rounded-full bg-FFFFFF26 justify-center items-center flex"
              onClick={() => openWeb("https://www.facebook.com")}
            >
              <SiFacebook className="w-4 h-4 text-bg" />
            </div>
            <div
              className="h-8 w-8 rounded-full bg-FFFFFF26 justify-center items-center flex"
              onClick={() => openWeb("https://www.x.com")}
            >
              <SiX className="w-4 h-4 text-bg" />
            </div>
            <div
              className="h-8 w-8 rounded-full bg-FFFFFF26 justify-center items-center flex"
              onClick={() => openWeb("https://www.youtube.com")}
            >
              <SiYoutube className="w-4 h-4 text-bg" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <WebText className="font-medium text-xl text-button-bg">
            Navigation Links
          </WebText>
          <div className="flex flex-col gap-4">
            <WebText className="font-normal text-[16px] text-bg">Home</WebText>
            <WebText className="font-normal text-[16px] text-bg">About</WebText>
            <WebText className="font-normal text-[16px] text-bg">
              Contact
            </WebText>
          </div>
        </div>
      </div>

      <Divider />

      {/* Bottom Section */}
      <div className="flex w-full justify-between items-center">
        <WebText className="font-normal text-[16px] text-bg">
          © 2026 Yin Yang Herbs. All rights reserved.
        </WebText>
        <div className="flex gap-8">
          <WebText className="font-normal text-[16px] text-bg">
            Terms of Use
          </WebText>
          <WebText className="font-normal text-[16px] text-bg">
            Privacy Policy
          </WebText>
        </div>
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="h-px w-full bg-FFFFFF26" />;
};
