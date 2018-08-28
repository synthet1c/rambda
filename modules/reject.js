import filter from './filter'

export default function reject (fn, arr) {
  if (arguments.length === 1) return arrHolder => reject(fn, arrHolder)

  return filter(x => !fn(x), arr)
}
