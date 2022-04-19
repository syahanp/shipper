const isInsideBrowser = () => {
  return typeof window !== 'undefined'
}

export default isInsideBrowser;