import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface SidebarItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  badge?: string | number;
  onClick?: () => void;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  portalLabel?: string;
  items?: SidebarItem[];
  footer?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({
  portalLabel = 'Dashboard',
  items = [],
  footer,
  className,
  ...props
}) => {
  return (
    <aside className={cn('dashboard-sidebar hidden lg:flex', className)} {...props}>
      <div className="dashboard-sidebar-brand">
        <div className="dashboard-brand-mark">
          <svg className="h-5 w-5" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M7 13l7-4 7 4-7 4-7-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9 15v2c0 1.4 2.2 2.3 5 2.3s5-.9 5-2.3v-2M21 13v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="21" cy="18.5" r="1.2" fill="currentColor" />
          </svg>
        </div>
        <div>
          <h2>connectifyX</h2>
          <p>{portalLabel}</p>
        </div>
      </div>

      <nav className="dashboard-sidebar-nav" aria-label={`${portalLabel} navigation`}>
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              onClick={item.onClick}
              className={cn('dashboard-nav-item', item.active && 'is-active')}
              aria-current={item.active ? 'page' : undefined}
            >
              <span className="dashboard-nav-label">
                <Icon className="h-4 w-4" />
                {item.title}
              </span>
              {item.badge ? <span className="dashboard-nav-badge">{item.badge}</span> : null}
              {item.active ? <ChevronRight className="dashboard-nav-chevron" /> : null}
            </button>
          );
        })}
      </nav>

      {footer ? <div className="dashboard-sidebar-footer">{footer}</div> : null}
    </aside>
  );
};
