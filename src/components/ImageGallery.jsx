import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import ProjectImage from "./ProjectImage"

export default function ImageGallery({ images, tone = "light" }) {
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

  return (
    <>
      <ul className="grid gap-8 sm:grid-cols-2">
        {images.map((image) => (
          <li key={image.id}>
            <figure>
              {image.src ? (
                <button
                  type="button"
                  className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden border border-line text-left"
                  onClick={() => setActive(image)}
                  data-cursor="Open"
                >
                  <ProjectImage image={image} tone={tone} />
                </button>
              ) : (
                <div className="relative aspect-[16/10] overflow-hidden border border-line">
                  <ProjectImage image={image} tone={tone} />
                </div>
              )}
              <figcaption className="mt-3 text-sm text-muted">{image.slot}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

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
              <button type="button" className="inline-flex h-10 w-10 cursor-pointer items-center justify-center" aria-label="Close screenshot" onClick={() => dialogRef.current?.close()}>
                <X size={18} aria-hidden />
              </button>
            </div>
            <div className="relative aspect-[16/10]">
              <ProjectImage image={active} priority />
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  )
}
