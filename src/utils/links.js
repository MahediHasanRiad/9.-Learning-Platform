const Links = async (req, pagination, baseURL = '') => {
    const links = {
    self: `${req.path}`,
  };

  if (pagination.prev) {
    const query = new URLSearchParams(req.query).toString();
    links.prev = `/${baseURL}?${query}`;
  }

  if (pagination.next) {
    const query = new URLSearchParams(req.query).toString();
    links.next = `/${baseURL}?${query}`;
  }

  return links
}

export {Links}