'use client';

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import withAuthorization from '@/components/auth/withAuthorization';

function DashboardPage() {
  return (
    <ContentLayout>
      <p>これはログインしたら見れるダッシュボードの仮ページです。</p>
    </ContentLayout>
  );
}

export default withAuthorization(DashboardPage);