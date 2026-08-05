import { NavItem } from "../model/nav-item.model";

export const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    title: 'دردشه جديده',
    icon: 'lucideSquarePen',
    active: false,
  },

  {
    id: 3,
    title: 'العملاء',
    icon: 'lucideSearch',
    active: false,
  },
  {
    id: 4,
    title: 'لوحة الاداره',
    icon: 'lucideLayoutGrid',
    active: false,
  },
    {
    id: 2,
    title: 'القضايا',
    icon: 'lucideFolder',
    active: true,
  },
  {
    id: 5,
    title: 'المكتبة القانونية',
    icon: 'lucideBookOpen',
    active: false,
  },
];
