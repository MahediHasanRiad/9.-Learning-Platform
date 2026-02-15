const Links = async (req, pagination, baseURL = '') => {
    const links = {
    self: `${req.path}`,
  };
  let page = Number(req.query.page)

  if (pagination.prev) {
    const query = new URLSearchParams({...req.query, page: page - 1}).toString();
    links.prev = `/${baseURL}?${query}`;
  }

  if (pagination.next) {
    const query = new URLSearchParams({...req.query, page: page + 1}).toString();
    links.next = `/${baseURL}?${query}`;
  }

  return links
}

export {Links}