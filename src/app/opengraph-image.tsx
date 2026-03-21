import { ImageResponse } from "next/og";

export const alt = "Cole Edmonston — Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
          }}
        >
          Cole Edmonston
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#d4a843",
            letterSpacing: 4,
          }}
        >
          SOFTWARE DEVELOPER
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#a0a0b0",
            marginTop: 24,
          }}
        >
          coleedmonston.me
        </div>
      </div>
    ),
    { ...size }
  );
}
