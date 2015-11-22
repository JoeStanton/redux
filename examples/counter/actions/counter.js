export const CHANGE_FIELD = 'CHANGE_FIELD'

export function change(field, value) {
  return {
    type: CHANGE_FIELD,
    field,
    value
  }
}
