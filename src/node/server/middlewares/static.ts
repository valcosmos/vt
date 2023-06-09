import { NextHandleFunction } from 'connect'
import { isImportRequest } from '../../utils'
// 一个用于加载静态资源的中间件
import sirv from 'sirv'
import { ServerContext } from '..'

export function staticMiddleware(serverContext: ServerContext): NextHandleFunction {
  const serveFromRoot = sirv(serverContext.root, { dev: true })
  return async (req, res, next) => {
    if (!req.url) {
      return
    }
    // 不处理 import 请求
    if (isImportRequest(req.url)) {
      return
    }
    serveFromRoot(req, res, next)
  }
}
