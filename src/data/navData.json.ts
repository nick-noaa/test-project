const navData = await fetch(
  // 'http://nick2.dev.ncei.noaa.mobomo.net/api/navData.json'
  'http://chris.dev.ncei.noaa.mobomo.net/jsonapi/menu_items/main'
)
  .then(response => response.json())
  .then(data => {
    const result = data?.data.map(item => ({
      id: item?.id,
      text: item?.attributes.title,
      parent: item?.attributes.parent,
      href: item?.attributes.url,
    }));
    return result;
  })
  .catch(error => console.error(error));

export default navData;
