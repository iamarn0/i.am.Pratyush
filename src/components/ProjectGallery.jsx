import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import ScreenshotFrame from "./ScreenshotFrame"

export default function ProjectGallery({ images = [], tone = "light", url = "" }) {
  const [active, setActive] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!active || !dialog) return undefined
    if (!dialog.open) dialog.showModal()
    const onClose = () => setActive(null)
    dialog.addEventListener("close", onClose)
    return () => {
      dialog.removeEventListener("close", onClose)
      if (dialog.open) dialog.close()
    }
  }, [active])

  if (!images.length) return null

  return (
    <>
      <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 xl:-mx-16 xl:px-16">
        <ul className="flex w-max snap-x snap-mandatory gap-4">
          {images.map((image) => {
            const wide = image.kind === "mobile" ? "w-[min(46vw,220px)]" : "w-[min(86vw,680px)]"
            return (
              <li key={image.id} className={`${wide} shrink-0 snap-start`}>
                <ScreenshotFrame image={image} tone={tone} url={image.kind === "hero" ? url : ""} />
                {image.src ? (
                  <button type="button" className="mt-2 cursor-pointer text-sm font-medium underline underline-offset-4" onClick={() => setActive(image)}>
                    Open {image.slot}
                  </button>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={active?.slot || "Screenshot"}
        className="w-full"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        {active ? (
          <div className="bg-surface">
            <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
              <p className="text-sm font-medium">{active.slot}</p>
              <button
                type="button"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center"
                aria-label="Close screenshot"
                onClick={() => dialogRef.current?.close()}
              >
                <X size={18} aria-hidden />
              </button>
            </div>
            <div className="max-h-[calc(100vh-6.5rem)] overflow-auto bg-[#f4f7f6]">
              <img src={active.src} alt={active.alt} className="block h-auto w-full" />
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  )
}
