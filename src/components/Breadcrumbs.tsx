export const Breadcrumbs = (
  { 
    title = "",
    fromTitle = "Головна",
    fromUrl = "/",
  }:
  { title: string;
    fromTitle?: string;
    fromUrl?: string;
  }
) => {
  return (
    <div className="flex flex-col w-full h-[130px] items-center justify-center bg-[#003152]">
      <h1 className="text-xl lg:text-[38px] font-bold text-white">{title}</h1>
      <div className="g-breadcrumbs flex items-center space-x-2 text-white text-xs lg:text-base px-4 py-2 rounded">
        <span>
          <a href={fromUrl} className="g-breadcrumbs-item text-white hover:underline">
            {fromTitle}
          </a>
        </span>
        <span className="g-breadcrumbs-separator">/</span>
        <span className="g-breadcrumbs-item text-white">{title}</span>
      </div>
    </div>
  );
};
