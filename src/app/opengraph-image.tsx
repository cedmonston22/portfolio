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
          background: "#f2ebd9",
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
            fontSize: 76,
            fontWeight: 700,
            color: "#241c14",
            letterSpacing: -1,
          }}
        >
          Cole Edmonston
        </div>
        <div
          style={{
            width: 96,
            height: 4,
            background: "#a67b5b",
            borderRadius: 2,
            margin: "24px 0",
          }}
        />
        <div
          style={{
            fontSize: 34,
            color: "#a67b5b",
            letterSpacing: 6,
            fontWeight: 600,
          }}
        >
          SOFTWARE ENGINEER
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8a7d6c",
            marginTop: 28,
          }}
        >
          coleedmonston.me
        </div>
      </div>
    ),
    { ...size }
  );
}
