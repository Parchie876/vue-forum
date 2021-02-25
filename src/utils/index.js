import Vue from 'vue'

const countObjectProperties = obj => {
  if (typeof obj === 'object') {
    return Object.keys(obj).length
  }
  return 0
}
const makeAppendChildToParentMutation = ({parent, child}) =>
  (state, {childId, parentId}) => {
    const resource = state[parent][parentId]
    if (!resource[child]) {
      Vue.set(resource, child, {})
    }
    Vue.set(resource[child], childId, childId)
  }

export {
    countObjectProperties,
    makeAppendChildToParentMutation
}
