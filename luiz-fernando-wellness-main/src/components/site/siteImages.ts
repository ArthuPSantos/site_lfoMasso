import heroMassage from "@/assets/luiz.jpg";
import luizPortrait from "@/assets/ambiente.jpg";
import serviceMyofascial from "@/assets/service-myofascial.jpg";
import serviceStones from "@/assets/pedras.jpg";
import serviceCupping from "@/assets/ventosa.jpg";
import serviceNeedling from "@/assets/service-needling.jpg";

/**
 * 🖼️ EDITABLE IMAGES
 *
 * To replace any image with a real photo:
 *   1. Drop the new file inside `src/assets/` (e.g. `hero.jpg`).
 *   2. Update the matching `import` above, OR change the value below
 *      to a public URL (e.g. "https://your-cdn.com/photo.jpg").
 *
 * Recommended sizes (landscape unless noted):
 *   - hero:        1600×2000  (portrait 4:5)
 *   - portrait:    1200×1500  (portrait 4:5)
 *   - environment: 1600×1200  (4:3)
 *   - service:     1200×900   (4:3)
 */
export const siteImages = {
  hero: heroMassage,
  portrait: luizPortrait,
  services: {
    myofascial: serviceMyofascial,
    stones: serviceStones,
    cupping: serviceCupping,
    needling: serviceNeedling,
  },
} as const;