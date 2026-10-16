import { WebText } from "@/components";

type DataContainerProps = {
  value: string;
  title: string;
};

export const MatrixSection = () => {
  return (
    <div className="pt-21 pb-24">
      <div className="bg-text p-12 flex justify-center items-center gap-6 rounded-[20px]">
        <DataContainer title="Happy Clients" value="20k+" />
        <VerticalDivider />
        <DataContainer title="Herbal Remedies" value="100+" />
        <VerticalDivider />
        <DataContainer title="Customer Support" value="24/7" />
      </div>
    </div>
  );
};

const DataContainer = ({ title, value }: DataContainerProps) => {
  return (
    <div className=" flex-1 flex flex-col items-center justify-center align-middle">
      <WebText className="font-semibold text-button-bg text-5xl">
        {value}
      </WebText>
      <WebText className="font-normal text-bg text-lg">{title}</WebText>
    </div>
  );
};

const VerticalDivider = () => {
  return <div className="w-0.5 h-23.25 bg-button-bg" />;
};
