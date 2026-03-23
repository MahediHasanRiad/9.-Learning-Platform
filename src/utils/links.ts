import type { Request } from "express";
import type { PaginationType } from "./pagination.js";

interface LinksType {
  self: string;
  prev?: string;
  next?: string;
}

const Links = (req: Request, pagination:Pick<PaginationType, "prev" | "next"> , page = 1, baseURL: string = ''): LinksType => {
    const links: LinksType = {
    self: `${req.path}`,
  };
  // let page = Number(req.query.page)

  if (pagination.prev) {
    const query = new URLSearchParams({...req.query as Record<string, string>, page: (page - 1).toString()}).toString();
    links.prev = `/${baseURL}?${query}`;
  }

  if (pagination.next) {
    const query = new URLSearchParams({...req.query as Record<string, string>, page: (page + 1).toString()}).toString();
    links.next = `/${baseURL}?${query}`;
  }

  return links
}

export {Links}