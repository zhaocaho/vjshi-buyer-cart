interface DrawerHeaderProps {
  onClose: () => void;
}
export default function DrawerHeader({ onClose }: DrawerHeaderProps) {
  return (
    <header className="flex w-full items-center justify-between px-10 pt-9 pb-4" onClick={onClose}>
      <span className="text-2xl leading-[36px]">购物车</span>
      <div tabIndex={-1} className="cursor-pointer">
        <svg viewBox="0 0 24 24" width="28" height="28" className="dioa-icon">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="7" x2="17" y2="17"></line>
            <line x1="7" y1="17" x2="17" y2="7"></line>
          </g>
        </svg>
      </div>
    </header>
  );
}
