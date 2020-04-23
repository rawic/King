import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleRight,
  faChartBar,
  faCog,
  faExchangeAlt,
  faGripHorizontal,
  faSearch,
  faSortDown,
  faSortUp
} from '@fortawesome/free-solid-svg-icons'

const registerIcons = () =>
  library.add(
    fab,
    faAngleRight,
    faChartBar,
    faCog,
    faExchangeAlt,
    faGripHorizontal,
    faSearch,
    faSortDown,
    faSortUp
  )

export default registerIcons
