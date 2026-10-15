type Props = {
  children: React.ReactNode;
};

export const WebPage = ({ children }: Props) => {
  return <div className="bg-bg min-w-screen min-h-screen">{children}</div>;
};
