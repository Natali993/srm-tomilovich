import { usePathname } from 'next/navigation';

export function useCollectionHref() {
  const pathname = usePathname();
  
  const generateHref = (slug: string) => {
    // Get the current path without trailing slash
    const basePath = pathname.replace(/\/$/, '');
    return `${basePath}/${slug}`;
  };

  return { generateHref };
}
