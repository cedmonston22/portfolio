import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Cole Edmonston — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

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
          background: "#f2ebd9",
          alignItems: "center",
          gap: 64,
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Headshot — plain <img> is required inside next/og (no next/image) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={headshotSrc}
          alt="Cole Edmonston"
          width={372}
          height={466}
          style={{
            width: 372,
            height: 466,
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: 28,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        />

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              fontWeight: 600,
              color: "#8a6244",
            }}
          >
            COMPUTER SCIENCE · CAL POLY SLO
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontSize: 88,
              fontWeight: 700,
              color: "#241c14",
              lineHeight: 1,
            }}
          >
            <span>Cole</span>
            <span>Edmonston</span>
          </div>
          <div
            style={{
              width: 104,
              height: 5,
              background: "#8a6244",
              borderRadius: 3,
              margin: "32px 0",
            }}
          />
          <div style={{ fontSize: 32, color: "#5c5044" }}>
            Software Engineer · Builder
          </div>
          <div style={{ fontSize: 22, color: "#8a7d6c", marginTop: 22 }}>
            coleedmonston.me
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
