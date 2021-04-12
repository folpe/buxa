import {
  and,
  between,
  integer,
  keysOf,
  nonNegativeInteger,
} from 'airbnb-prop-types'
import {
  any,
  arrayOf,
  bool,
  func,
  node,
  object,
  objectOf,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types'

export {
  any,
  arrayOf,
  bool,
  func,
  keysOf,
  node,
  nonNegativeInteger,
  object,
  objectOf,
  oneOf,
  oneOfType,
  shape,
  string,
}

export const positiveInteger = and([integer(), between({ gt: 0 })])

export const SamplePropType = shape({
  id: nonNegativeInteger.isRequired,
  name: string.isRequired,
  target: positiveInteger.isRequired,
  units: string.isRequired,
})
