import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { PullToRefresh } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <div style={{ height: '300px', padding: '12px', border: '1px solid #ccc' }}>
        <PullToRefresh onRefresh={() => Promise.resolve({})}>
          <div>list</div>
        </PullToRefresh>
      </div>
    </DemoSection>
    
    <DemoSection title="自定义加载更多区域">
      <div style={{ height: '300px', padding: '12px', border: '1px solid #ccc' }}>
        <PullToRefresh 
          onRefresh={() => Promise.resolve({})}
          loadMoreText={(onLoadMore) => (
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                background: '#f5f5f5',
                borderRadius: '8px',
                margin: '8px',
                cursor: 'pointer',
                border: '1px solid #ddd',
                transition: 'all 0.2s ease'
              }}
              onClick={onLoadMore}
            >
              <span>自定义加载更多区域</span>
            </div>
          )}
        >
          <div>list</div>
        </PullToRefresh>
      </div>
    </DemoSection>
  </DemoPage>
);
