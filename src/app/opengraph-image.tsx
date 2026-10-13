import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Cole Edmonston — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const GOLD = "#e0b44c";

export default async function Image(): Promise<ImageResponse> {
  const headshot = await readFile(join(process.cwd(), "public/headshot.jpg"));
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0c0b09",
          alignItems: "center",
          gap: 72,
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", position: "relative", width: 372, height: 466 }}>
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              width: 372,
              height: 466,
              background: GOLD,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={headshotSrc}
            alt="Cole Edmonston"
            width={372}
            height={466}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 372,
              height: 466,
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 6, fontWeight: 600, color: GOLD }}>
            COMPUTER SCIENCE · CAL POLY SLO
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontSize: 92,
              fontWeight: 800,
              color: "#f3eee3",
              lineHeight: 0.95,
            }}
          >
            <span>Cole</span>
            <span>Edmonston</span>
          </div>
          <div style={{ width: 104, height: 5, background: GOLD, margin: "32px 0" }} />
          <div style={{ fontSize: 32, color: "#c2baa9" }}>Software Engineer · Builder</div>
          <div style={{ fontSize: 22, color: "#8a8272", marginTop: 22 }}>coleedmonston.me</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
