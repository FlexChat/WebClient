const useDeviceDetect = () => {
  const isMobile = window.matchMedia;
  if (isMobile) {
    const matchMobile = isMobile("(pointer:coarse)");
    return matchMobile.matches;
  }
  return false;
};

export default useDeviceDetect;
