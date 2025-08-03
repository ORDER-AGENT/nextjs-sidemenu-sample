import { RiDashboardHorizontalFill, RiSettings5Fill, RiCalendarScheduleFill } from 'react-icons/ri';
import { IoNotifications } from 'react-icons/io5';
import { HiUsers } from 'react-icons/hi2';
import { SidebarMenuItemType } from '@/types/sidebar';

export const allMenuItems: SidebarMenuItemType[] = [
  {
    type: 'item',
    key: 'dashboard',
    icon: RiDashboardHorizontalFill,
    text: 'ダッシュボード',
    path: '/',
    displayInFooter: true,
  },
  {
    type: 'item',
    key: 'users',
    icon: HiUsers,
    text: 'ユーザー',
    path: '/users',
    roles: ['admin'],
    displayInFooter: true,
  },
  {
    type: 'item',
    key: 'schedule',
    icon: RiCalendarScheduleFill,
    text: 'スケジュール',
    path: '/schedule',
    displayInFooter: true,
  },
  {
    type: 'divider',
    key: 'external-divider',
  },  {
    type: 'item',
    key: 'notification',
    icon: IoNotifications,
    text: '通知',
    path: '/notification',
    displayInFooter: true,
  },
  {
    type: 'item',
    key: 'settings',
    icon: RiSettings5Fill,
    text: '設定',
    path: '/settings',
    displayInFooter: false,
  },
];

export const getSidebarMenuItems = (userRoles: string[]): SidebarMenuItemType[] => {
  // ユーザーのロールに基づいてメニュー項目をフィルタリング
  return allMenuItems.filter(item => {
    // ロールが設定されていない、または空配列の場合は常に表示
    if (!item.roles || item.roles.length === 0) {
      return true;
    }
    // ユーザーのロールとメニュー項目のロールのいずれかが一致すれば表示
    return item.roles.some(role => userRoles.includes(role));
  });
};