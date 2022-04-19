/**
 * Get drivers data from API or LocalStorage if data already cached
 */
const getDrivers = async () => {
  const url = 'https://randomuser.me/api/?results=30'
  const cacheSupported = 'caches' in window;

  // if cache not supported, get data from API directly
  if (!cacheSupported) {
    const response = await fetch(url);

    return new Promise((resolve, reject) => {
      if (!response.ok) return reject()

      resolve(response.json())
    })
  }

  /**
   * if cache supported, then :
   * - see match cache. if exist, return cached data
   * - if not exist, fetch API like usual, cache it, then return the data
   */
  return caches.open('drivers').then(async cache => {
    const cachedData = await caches.match(url)

    if (cachedData) {
      return cachedData.json();
    }

    return fetch(url).then(res => {
      cache.put(url, res.clone());
      return res.json()
    })
  })
}

export default getDrivers