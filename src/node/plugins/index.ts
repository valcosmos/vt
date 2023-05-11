import { Plugin } from '../plugin'
import { assetPlugin } from './assets'
import { cssPlugin } from './css'
import { esbuildTransformPlugin } from './esbuild'
import { importAnalysisPlugin } from './importAnalysis'
import { resolvePlugin } from './resolve'

export function resolvePlugins(): Plugin[] {
  // 下一部分会逐个补充插件逻辑
  // return []
  return [
    resolvePlugin(),
    esbuildTransformPlugin(),
    importAnalysisPlugin(),
    cssPlugin(),
    assetPlugin()
  ]
}
