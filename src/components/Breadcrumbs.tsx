export const Breadcrumbs = ({ title = "" }: { title: string; }) => {
  return (
    <div className="flex flex-col w-full bg-[#003152]">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <div className="g-breadcrumbs flex items-center space-x-2 text-white px-4 py-2 rounded">
        <span>
          <a href="/" className="g-breadcrumbs-item text-white hover:underline">
            Головна
          </a>
        </span>
        <span className="g-breadcrumbs-separator">/</span>
        <span className="g-breadcrumbs-item text-white">{title}</span>
      </div>
    </div>
  );
};
