'use client'

import { useEffect, useState } from 'react'

/**
 * A hook for returning structured data and a scroll function for pagination.
 * @returns
 */
function usePagination({ id, items = [] }: { id?: string; items?: any[] }) {
  const buttonIds: string[] = items?.map((_, index) => `${id}-button-${index}`) ?? []
  const itemIds: string[] = items?.map((_, index) => `${id}-item-${index}`) ?? []
  const outerId = `${id}-outer`

  function goTo(index: number, options: ScrollToOptions | null = null) {
    const outer = document.getElementById(outerId)
    const item = document.getElementById(itemIds[index])

    if (outer && item) {
      outer.scrollTo({
        behavior: options?.behavior ?? 'auto',
        left: options?.left ?? item.clientWidth * index,
        top: options?.top ?? 0,
      })
    }
  }

  return {
    buttonIds,
    goTo,
    id,
    itemIds,
    outerId,
  }
}

/**
 * A hook for detecting if a given id is on screen.
 * @param id
 */
export function useOnScreen(id: string) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const elem = document.getElementById(id)
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      threshold: [0.125],
    })

    if (elem) {
      observer.observe(elem)
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect()
      }
    }
    // eslint-disable-next-line
  }, [])

  return isIntersecting
}

function Button({ id, index, items = [] }: { id: string; index: number; items: any[] }) {
  const { buttonIds, goTo, itemIds } = usePagination({ id, items })
  const isVisible = useOnScreen(itemIds[index])

  return (
    <button
      className="group flex h-6 w-6 cursor-pointer"
      id={buttonIds[index]}
      onClick={() => {
        goTo(index, { behavior: 'smooth' })
      }}
    >
      <span
        className="data-[is-visible=true]:bg-brand data-[is-visible=true]:outline-brand m-auto h-3 w-3 rounded-full bg-[white] outline transition-all duration-75 group-hover:opacity-50 data-[is-visible=false]:outline-transparent lg:h-4 lg:w-4 lg:outline-2"
        data-is-visible={isVisible}
      />
      <span className="sr-only">go to item {index + 1}</span>
    </button>
  )
}

/**
 * Buttons for paginating through a list of items.
 */
function Pagination({ id, items }: { id: string; items: any[] }) {
  const { buttonIds } = usePagination({ id, items })

  return (
    <div className="flex w-full items-center justify-center gap-x-1 lg:gap-x-2">
      {buttonIds.map((_, index) => (
        <Button key={buttonIds[index]} id={id} index={index} items={items} />
      ))}
    </div>
  )
}

export default Pagination
