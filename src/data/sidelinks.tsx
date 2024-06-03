import {
  IconCalendarCheck,
  IconUserCircle,
  IconUsersGroup,
  IconRouteAltLeft,
  IconClipboardText,
  IconRun,
  IconUserShield,
  IconHome,
  IconBell,
  IconChartHistogram,
  IconGauge,
} from '@tabler/icons-react';

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon: JSX.Element;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconGauge size={18} />,
  },
  {
    title: 'Bookings',
    label: '',
    href: '',
    icon: <IconUserShield size={18} />,
    sub: [
      {
        title: 'Bookings',
        label: '',
        href: '/bookings',
        icon: <IconCalendarCheck size={18} />,
      },
      {
        title: 'Guests',
        label: '',
        href: '/guests',
        icon: <IconUserCircle size={18} />,
      },
      {
        title: 'Internal Users',
        label: '',
        href: '/internalusers',
        icon: <IconUsersGroup size={18} />,
      },
    ],
  },
  {
    title: 'Manage',
    label: '',
    href: '',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'Programmes',
        label: '',
        href: '/programmes',
        icon: <IconClipboardText size={18} />,
      },
      {
        title: 'Activities',
        label: '',
        href: '/activites',
        icon: <IconRun size={18} />,
      },
      {
        title: 'Facilities',
        label: '',
        href: '/facilities',
        icon: <IconHome size={18} />,
      },
      {
        title: 'Notifications',
        label: '',
        href: '/notifications',
        icon: <IconBell size={18} />,
      },
    ],
  },
  {
    title: 'Analyse',
    label: '',
    href: '',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'Reporting',
        label: '',
        href: '/reporting',
        icon: <IconChartHistogram size={18} />,
      },
    ],
  },
];
