import { cn } from '@/lib/utils'

export function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('size-6 fill-current', className)}
    >
      <path d="M12 1.5l3.09 6.86 7.41.78-5.55 5.03 1.57 7.33L12 17.77l-6.52 3.73 1.57-7.33L1.5 9.14l7.41-.78L12 1.5z" />
    </svg>
  )
}
