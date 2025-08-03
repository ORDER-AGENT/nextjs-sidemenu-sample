import "./globals.css";

import { cookies } from 'next/headers';
import RootLayoutClient from '@/components/RootLayoutClient';

// メタデータをエクスポート
export const metadata = {
  title: 'Next.js Sidemenu Sample',
  description: 'Next.js のサイドメニューのサンプルアプリケーションです。',
};

// ルートレイアウトコンポーネント
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const sidebarCookie = cookieStore.get('sidebarOpenState');

  // Cookieが存在すればその値を、なければデフォルトでtrue（開いた状態）とする
  const initialIsMenuOpen = sidebarCookie ? sidebarCookie.value === 'true' : true;

  return (
    <html lang="ja">
      <body>
        <RootLayoutClient initialIsMenuOpen={initialIsMenuOpen}>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
} 