import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import {
  faAngleDown,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faBriefcase,
  faCaretDown,
  faCaretUp,
  faChartArea,
  faChartBar,
  faChartLine,
  faCog,
  faCoins,
  faCouch,
  faExchangeAlt,
  faGripHorizontal,
  faPen,
  faPiggyBank,
  faSearch,
  faSortDown,
  faSortUp,
  faTimes,
  faTrash,
  faUtensils,
  faWallet
} from '@fortawesome/free-solid-svg-icons'

const registerIcons = () =>
  library.add(
    fab,
    faAngleDown,
    faAngleRight,
    faArrowDown,
    faArrowUp,
    faBriefcase,
    faCaretDown,
    faCaretUp,
    faChartArea,
    faChartBar,
    faChartLine,
    faClock,
    faCog,
    faCoins,
    faCouch,
    faExchangeAlt,
    faGripHorizontal,
    faPen,
    faPiggyBank,
    faSearch,
    faSortDown,
    faSortUp,
    faTimes,
    faTrash,
    faUtensils,
    faWallet
  )

export default registerIcons
