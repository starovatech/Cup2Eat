import { ImageResponse } from "next/og";
import { pricing } from "@/config/site";

export const alt = "CUP2EAT — Eat Your Drink. Edible cups for chai, coffee and desserts.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Auto-generated social share image (used by every page unless overridden). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0B3B2C",
          backgroundImage: "radial-gradient(circle at 75% 20%, rgba(212,168,75,0.28) 0%, rgba(11,59,44,0) 55%)",
          color: "#FFFBF3",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#0F4D3A",
              border: "3px solid #D4A84B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#EBCB7E",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            C2E
          </div>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#FFFBF3" }}>
            CUP<span style={{ color: "#EBCB7E" }}>2</span>EAT
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, lineHeight: 1, display: "flex" }}>
            Eat Your&nbsp;<span style={{ color: "#D4A84B", fontStyle: "italic" }}>Drink.</span>
          </div>
          <div style={{ fontSize: 34, marginTop: 24, color: "rgba(255,251,243,.85)", fontFamily: "sans-serif" }}>
            Edible cups for chai, coffee, ice cream & desserts
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontFamily: "sans-serif", fontSize: 26 }}>
          <div style={{ display: "flex", padding: "12px 26px", borderRadius: 999, background: "#D4A84B", color: "#0B3B2C", fontWeight: 700 }}>
            {`Rs ${pricing.main.price.toLocaleString("en-IN")} for ${pricing.main.cups} cups`}
          </div>
          <div style={{ display: "flex", padding: "12px 26px", borderRadius: 999, border: "2px solid rgba(235,203,126,.6)", color: "#EBCB7E" }}>
            FSSAI registered · Free delivery across India
          </div>
        </div>
      </div>
    ),
    size
  );
}
