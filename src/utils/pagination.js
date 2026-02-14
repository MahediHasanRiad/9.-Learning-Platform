
const Pagination = async (page, limit, totalItems, baseURL = '') => {
  const totalPage = Math.ceil(totalItems / limit);

  const pagination = {
    page: page,
    limit: limit,
    totalPage,
    totalItems,
  };

  if (page > 1) {
    pagination.prev = `/${baseURL}/${page - 1}`;
  }
  if (page < totalPage) {
    pagination.next = `/${baseURL}/${page + 1}`;
  }

  return pagination
}

export {Pagination}