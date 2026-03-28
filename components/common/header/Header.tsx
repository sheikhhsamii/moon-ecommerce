interface CommonHeaderProps {
  title: string;
  description: string;
}

const CommonHeader = (props: CommonHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 md:gap-14 mb-8 text-black text-center md:text-left">
      <h2 className="font-semibold text-3xl sm:text-4xl 2xl:text-5xl bg-green p-2 rounded-md shrink-0">
        {props.title}
      </h2>
      <p className="text-base sm:text-lg max-w-2xl leading-relaxed">
        {props.description}
      </p>
    </div>
  );
};

export default CommonHeader;
