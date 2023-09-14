import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Kittisak Bundit",
    studentId: "650610748",
  });
};
