export const HASH_SCROLL_OFFSET_PX = 112;

export function scrollToHashTarget(
  id: string,
  behavior: ScrollBehavior = 'auto'
): boolean {
  const element = document.getElementById(id);
  if (!element) return false;

  const top =
    element.getBoundingClientRect().top + window.scrollY - HASH_SCROLL_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function activeLocationHash(routerHash: string): string {
  return routerHash || window.location.hash;
}
