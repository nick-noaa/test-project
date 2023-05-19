export const changeDateFormat = date => {
  return new Date(date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDate = date => {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
};

export const slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const calculateCardCount = (data, dataId) => {
  return Math.floor(
    data?.filter(data => {
      return data.path && data.parentId == dataId && data;
    }).length / 4
  );
};

export const filteredByParentId = data => {
  return data.filter(item => item.parent === item.id);
};
